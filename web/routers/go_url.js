const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const hits = require('../../mongoDB/urls/hits.js');
const short_dash = require('../../mongoDB/urls/links.js');
const withdraw_money = require('../../mongoDB/withdraw_money.js');
const temporary_key = require('../../mongoDB/temporary_key.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_dc_hit_no_login = new WebhookClient({ url: "https://discord.com/api/webhooks/x/x" })
var randomToken = require('random-token');
const moment = require('moment');
const md5 = require('md5');
const sha512 = require('js-sha512');
let salt = "LinkKisaltmaServisiSifrelemeSistemi";
const mailer = require('nodemailer');
const request = require('request');
var rand = require("random-key");
const { verify } = require('hcaptcha');

module.exports = function(app, express, config, account_mongo, check_account, sidebar, chech_admin) {
    app.get('/go/:hashID', async (req, res) => {
        let hash = req.params.hashID;
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let url = await short_dash.findOne({ hash: hash, vb: "0" });
        if(!url) return res.redirect('/broken_link?error=true&message=URL Bulunamadı.');
        function link_no_ads() {
            short_dash.findOneAndUpdate({ hash: hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
            });
            let link = url.url;
            if(!link.includes('http://')) link = 'http://' + link;
            setTimeout(() => {
                res.render('ads_pages/go_run', {
                    git: link,
                });
            }, 100);
        }
        if(url.ads == "0") return link_no_ads();
        if(url.ads === "0") return link_no_ads();
        let herror = req.query.error || false;
        let db = url;
        var db_ads;
        var adsstimeman;
        if(db.ads == "1") {
            db_ads = "2";
            adsstimeman = config.time_go.time_one;
        } else if(db.ads == "2") {
            db_ads = "3";
            adsstimeman = config.time_go.time_two;
        } else if(db.ads == "3") {
            db_ads = "5";
            adsstimeman = config.time_go.time_three;
        }
        request(db.url, (err, response, body) => {
            let page_info = {
                title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
            }
            res.render('ads_pages/money/one_ads_captcha.ejs', {
                config,
                page_info,
                db,
                herror,
                user,
                db_ads,
                xxx: 0,
                adsstimeman
            });
        });
    });

    app.post('/go_sm/:hash', async (req, res) => {
        let hash = req.params.hash;
        if(!hash) return res.redirect('/?error=true&message=Aradığınız URL Bulunamadı');
        let db = await short_dash.findOne({ hash: hash });
        if(!db) return res.redirect('/broken_link');
        function link_no_ads() {
            short_dash.findOneAndUpdate({ hash: hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
                //if(err) return res.redirect('/?error=true&message=Linkleri Görüntüleme Hatası!');
            });
            res.redirect(db.url);
        }
        if(!db.ads) return link_no_ads();
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let token = req.body['h-captcha-response'];
        if(!token) return res.redirect('/go_sm/' + hash + '?error=true&message=Captcha boş bırakılamaz.');
        var db_ads;
        var adsstimeman;
        if(db.ads == "1") {
            db_ads = "2";
            adsstimeman = config.time_go.time_one;
        } else if(db.ads == "2") {
            db_ads = "3";
            adsstimeman = config.time_go.time_two;
        } else if(db.ads == "3") {
            db_ads = "5";
            adsstimeman = config.time_go.time_three;
        }
        verify(config.hcaptcha_secret, token).then(async (success) => {
            if(!success) return res.redirect('/go_sm/' + hash + '?/?error=true&message=Captcha Hatası!');
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
                    res.render('ads_pages/money/one_ads.ejs', {
                        config,
                        page_info,
                        db,
                        herror: false,
                        key,
                        user,
                        db_ads,
                        xxx: 0,
                        adsstimeman
                    });
                });
            } else { 
                res.redirect('/go_sm/' + hash + '?error=true&message=Captcha Hatası!');
            }
        }).catch(err => {
            res.redirect('/go_sm/' + hash + '?error=true&message=Captcha Hatası!');
        });
    });

    // app.get('/skip_ad_go/:hash', async (req, res) => {
    //     let hash = req.params.hash;
    //     if(!hash) return res.redirect('/?error=true&message=Aradığınız URL Bulunamadı');
    //     let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
    //     let db = await short_dash.findOne({ hash: hash });
    //     let key = rand.generate(32);
    //     new temporary_key({
    //         hash: db.hash,
    //         hash_id: db._id,
    //         key: key,
    //         date: moment().format('YYYY-MM-DD HH:mm:ss'),
    //     }).save();
    //     var db_ads;
    //     if(db.ads == "1") {
    //         db_ads = "2";
    //     } else if(db.ads == "2") {
    //         db_ads = "3";
    //     } else if(db.ads == "3") {
    //         db_ads = "5";
    //     }
    //     request(db.url, (err, response, body) => {
    //         let page_info = {
    //             title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
    //             description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
    //             keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
    //             image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
    //         }
    //         res.render('ads_pages/money/one_ads.ejs', {
    //             config,
    //             page_info,
    //             db,
    //             herror: false,
    //             key,
    //             user,
    //             db_ads,
    //             xxx: 0
    //         });
    //     });
    // });

    app.post('/sm_go_ads', async (req, res) => {
        let ip_adress = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let key = req.body.key;
        let secret = req.body.secret;
        if(secret !== 'TRYTWERTHGFDSFWETERDFGGREGRFB') return res.json({ error: true, message: 'Güvenlik Hatası!' });
        if(!key) return res.json({ error: true, message: 'Key Hatası!' });
        let temporary_db = await temporary_key.findOne({ key: key });
        if(!temporary_db) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı' });
        let db = await short_dash.findOne({ _id: temporary_db.hash_id, hash: temporary_db.hash });
        if(!db) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı 2' });
        short_dash.findOneAndUpdate({ hash: temporary_db.hash }, { $inc: { clicks: 1 } }, { new: true }, (err, doc) => {
            //if(err) return res.redirect('/?error=true&message=Linkleri Görüntüleme Hatası!');
        });
        
        
        try {
            let user = await account_mongo.findOne({ _id: db.userID });
            if(!user) return;
            let iphsty = await account_mongo.findOne({ _id: db.userID, ip_history: { $elemMatch: { ip: ip_adress } } });
            if(!iphsty) {
                let hit_db = await hits.findOne({ ip: ip_adress, dt: { $gte: moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss') } });
                if(hit_db == null) {
                    if(req.useragent.isBot == false) {
                        if(db.ads == "1") {
                            var bnew = Number(config.rate_page.two_page);
                            account_mongo.findOneAndUpdate({ _id: db.userID }, { $inc: { balance: bnew } }, { new: true }, (err, doc) => {
                                if(err) return;
                            });
                            if(user.invite_ref != "Yok") {
                                let ref = await account_mongo.findOne({ my_ref: user.invite_ref });
                                if(ref) {
                                    try {
                                        let blnc = "0.0001";
                                        var ref_new_b = Number(blnc);
                                        account_mongo.findOneAndUpdate({ _id: ref._id }, { $inc: { ref_earn: ref_new_b } }, { new: true }, (err, doc) => {
                                            if(err) return;
                                        });
                                    } catch(err) { }
                                }
                            }
                            hit();
                        } else if(db.ads == "2") {
                            var bnew = Number(config.rate_page.orta_page);
                            account_mongo.findOneAndUpdate({ _id: db.userID }, { $inc: { balance: bnew } }, { new: true }, (err, doc) => {
                                if(err) return;
                            });
                            if(user.invite_ref != "Yok") {
                                let ref = await account_mongo.findOne({ my_ref: user.invite_ref });
                                if(ref) {
                                    try {
                                        let blnc = "0.0001";
                                        var ref_new_b = Number(blnc);
                                        account_mongo.findOneAndUpdate({ _id: ref._id }, { $inc: { ref_earn: ref_new_b } }, { new: true }, (err, doc) => {
                                            if(err) return;
                                        });
                                    } catch(err) { }
                                }
                            }
                            hit();
                        } else if(db.ads == "3") {
                            var bnew = Number(config.rate_page.zor_page);
                            account_mongo.findOneAndUpdate({ _id: db.userID }, { $inc: { balance: bnew } }, { new: true }, (err, doc) => {
                                if(err) return;
                            });
                            if(user.invite_ref != "Yok") {
                                let ref = await account_mongo.findOne({ my_ref: user.invite_ref });
                                if(ref) {
                                    try {
                                        let blnc = "0.0001";
                                        var ref_new_b = Number(blnc);
                                        account_mongo.findOneAndUpdate({ _id: ref._id }, { $inc: { ref_earn: ref_new_b } }, { new: true }, (err, doc) => {
                                            if(err) return;
                                        });
                                    } catch(err) { }
                                }
                            }
                            hit();
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }

        function hit() {
            setTimeout(async () => {
                try {
                    
                    new hits({
                        dt: moment().format('YYYY-MM-DD HH:mm:ss'),
                        ip: ip_adress,
                        ua: req.useragent.source.toString(),
                        os: req.useragent.os.toString(), //Tıklanma OS
                        br: req.useragent.browser.toString(), //Tıklanma Browser
                        de: req.useragent.isDesktop ? "Desktop" : "Mobile",
                        id: temporary_db.hash, //Tıklanılan link ID
                        uid: db.userID, //Tıklanılan link User ID
                    }).save();
                } catch (e) {
                    console.log(e);
                }
                try {
                    const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`[INFO - HIT] ${db.url} Clicked! Total: ${db.clicks} Click! Go İp: ${ip_adress}`)
                    log_dc_hit_no_login.send({ embeds: [embed] });
                } catch (e) {
                    
                }
                console.log('[INFO]', 'Link Clicked: ' + db.url);
            }, 100);
        }
        await temporary_key.deleteOne({ key: key });
        res.json({ url: db.url });
    });

    app.post('/next_page_go', async (req, res) => {
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let page = req.body.ads_type_pagexx;
        let dbx = await temporary_key.findOne({ hash: req.body.hash });
        if(!dbx) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı' });
        let db = await short_dash.findOne({ hash: dbx.hash });
        if(!db) return res.json({ error: true, message: 'Aradığınız URL Bulunamadı 2' });
        var db_ads;
        var adsstimeman;
        if(db.ads == "1") {
            db_ads = "2";
            adsstimeman = config.time_go.time_one;
        } else if(db.ads == "2") {
            db_ads = "3";
            adsstimeman = config.time_go.time_two;
        } else if(db.ads == "3") {
            db_ads = "5";
            adsstimeman = config.time_go.time_three;
        }
        if(Number(page) >= Number(db_ads)) {
            request(db.url, (err, response, body) => {
                let page_info = {
                    title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                    description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                    keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                    image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
                }
                res.render('ads_pages/money/one_ads.ejs', {
                    config,
                    page_info,
                    db,
                    herror: false,
                    key: dbx.key,
                    user,
                    db_ads,
                    xxx: "go",
                    adsstimeman
                });
            });
        } else {
            let timeee = req.body.timmmeee || "NaN";
            if(timeee == 'NaN') {
                var page_one = Number(page) + 1;
                request(db.url, (err, response, body) => {
                    let page_info = {
                        title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                        description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                        keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                        image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
                    }
                    res.render('ads_pages/money/one_ads.ejs', {
                        config,
                        page_info,
                        db,
                        herror: false,
                        key: dbx.key,
                        user,
                        db_ads,
                        xxx: "0",
                        adsstimeman
                    });
                });
            } else if(Number(timeee) < 0) {
                var page_one = Number(page) + 1;
                request(db.url, (err, response, body) => {
                    let page_info = {
                        title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                        description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                        keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                        image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
                    }
                    res.render('ads_pages/money/one_ads.ejs', {
                        config,
                        page_info,
                        db,
                        herror: false,
                        key: dbx.key,
                        user,
                        db_ads,
                        xxx: page_one,
                        adsstimeman
                    });
                });
            } else {
                var page_one = Number(page);
                request(db.url, (err, response, body) => {
                    let page_info = {
                        title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                        description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                        keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                        image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
                    }
                    res.render('ads_pages/money/one_ads.ejs', {
                        config,
                        page_info,
                        db,
                        herror: false,
                        key: dbx.key,
                        user,
                        db_ads,
                        xxx: page_one,
                        adsstimeman
                    });
                });
            }
        }
    });
}