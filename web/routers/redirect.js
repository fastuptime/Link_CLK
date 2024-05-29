const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const temporary_key = require('../../mongoDB/temporary_key.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_dc_hit_no_login = new WebhookClient({ url: "https://discord.com/api/webhooks/xxx/xx" })
const { verify } = require('hcaptcha');
const moment = require('moment');
var rand = require("random-key");
const request = require('request');

module.exports = function(app, express, config, account_mongo, check_account) {
    app.get('/sm/:hash', async (req, res) => {
        let hash = req.params.hash;
        if(!hash) return res.redirect('/?error=true&message=Aradığınız URL Bulunamadı');
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let db = await main_page_short.findOne({ hash: hash });
        if(!db) return res.redirect('/broken_link');
        function link_no_ads() {
            main_page_short.findOneAndUpdate({ hash: hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
                //if(err) return res.redirect('/?error=true&message=Linkleri Görüntüleme Hatası!');
            });
            res.redirect(db.url);
        }
        if(!db.ads) return link_no_ads();
        let herror = req.query.error || false;
        request(db.url, (err, response, body) => {
            let page_info = {
                title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
            }
            res.render('ads_pages/one_ads_captcha.ejs', {
                config,
                page_info,
                db,
                herror,
                user
            });
        });
    });
    
    app.post('/sm/:hash', async (req, res) => {
        let hash = req.params.hash;
        if(!hash) return res.redirect('/?error=true&message=Aradığınız URL Bulunamadı');
        let db = await main_page_short.findOne({ hash: hash });
        if(!db) return res.redirect('/broken_link');
        function link_no_ads() {
            main_page_short.findOneAndUpdate({ hash: hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
                //if(err) return res.redirect('/?error=true&message=Linkleri Görüntüleme Hatası!');
            });
            res.redirect(db.url);
        }
        if(!db.ads) return link_no_ads();
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let token = req.body['h-captcha-response'];
        if(!token) return res.redirect('/sm/' + hash + '?error=true&message=Captcha boş bırakılamaz.');
        verify(config.hcaptcha_secret, token).then(async (success) => {
            if(!success) return res.redirect('/sm/' + hash + '?/?error=true&message=Captcha Hatası!');
            if(success.success) {
                let key = rand.generate(32);
                new temporary_key({
                    hash: db.hash,
                    hash_id: db._id,
                    key: key,
                    date: moment().format('YYYY-MM-DD HH:mm:ss'),
                }).save();
                request(db.url, (err, response, body) => {
                    let page_info = {
                        title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                        description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                        keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                        image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
                    }
                    res.render('ads_pages/one_ads.ejs', {
                        config,
                        page_info,
                        db,
                        herror: false,
                        key,
                        user
                    });
                });
            } else { 
                res.redirect('/sm/' + hash + '?error=true&message=Captcha Hatası!');
            }
        }).catch(err => {
            res.redirect('/sm/' + hash + '?error=true&message=Captcha Hatası!');
        });
    });

    app.get('/broken_link', async (req, res) => {
        res.render('pages/broken_url.ejs', {
            config
        });
    });

    // app.get('/skip_ad/:hash', async (req, res) => {
    //     let hash = req.params.hash;
    //     if(!hash) return res.redirect('/?error=true&message=Aradığınız URL Bulunamadı');
    //     let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
    //     let db = await main_page_short.findOne({ hash: hash });
    //     let key = rand.generate(32);
    //     new temporary_key({
    //         hash: db.hash,
    //         hash_id: db._id,
    //         key: key,
    //         date: moment().format('YYYY-MM-DD HH:mm:ss'),
    //     }).save();
    //     request(db.url, (err, response, body) => {
    //         let page_info = {
    //             title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
    //             description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
    //             keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
    //             image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
    //         }
    //         res.render('ads_pages/one_ads.ejs', {
    //             config,
    //             page_info,
    //             db,
    //             herror: false,
    //             key,
    //             user
    //         });
    //     });
    // });

    app.post('/sm_go', async (req, res) => {
        let key = req.body.key;
        let secret = req.body.secret;
        if(secret != 'WEKPWMOEPOEMWEMORWEOMPROWEMPRPMOWE') return res.json({ error: true, message: 'Güvenlik Hatası!' });
        if(!key) return res.json({ error: true, message: 'Key Hatası!' });
        let temporary_db = await temporary_key.findOne({ key: key });
        if(!temporary_db) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı' });
        let db = await main_page_short.findOne({ _id: temporary_db.hash_id });
        if(!db) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı 2' });
        try {
            main_page_short.findOneAndUpdate({ hash: temporary_db.hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
                if(err) return console.log(err);
            });
        } catch(err) {
            console.log(err);
        }
        try {
        const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`[INFO - HIT] ${db.url} Clicked! Total: ${db.clicks}`)
                log_dc_hit_no_login.send({ embeds: [embed] });
        } catch (e) {
            console.log(e);
        }
        try {
            await temporary_key.deleteOne({ key: key });
        } catch (e) {
            console.log(e);
        }
        console.log('[INFO]', 'Link Clicked: ' + db.url);
        res.json({ url: db.url + '?skip=true' });
    });
}