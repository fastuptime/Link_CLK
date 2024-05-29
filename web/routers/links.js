const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const short_dash = require('../../mongoDB/urls/links.js');
const withdraw_money = require('../../mongoDB/withdraw_money.js');
const passDash = require('../../mongoDB/urls/pass_links.js');
const taskDash = require('../../mongoDB/urls/task.js');
const temporary_dc = require('../../mongoDB/temporary_dc.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_odeme_talebi = new WebhookClient({ url: "https://discord.com/api/webhooks/xx/xxx" })
var randomToken = require('random-token');
const moment = require('moment');
const md5 = require('md5');
const sha512 = require('js-sha512');
let salt = "LinkKisaltmaServisiSifrelemeSistemi";
const mailer = require('nodemailer');
const fetch = require("node-fetch");
const request = require('request');
const passport = require(`passport`);
const Strategy = require(`passport-discord`).Strategy;
const session = require(`express-session`);
const MemoryStore = require(`memorystore`)(session);
const bodyParser = require('body-parser');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('rgertrgdfghjjhgfgdfhgjgfddfgfd');
module.exports = function(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin, client) {
    app.get('/new_link_special', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link_special.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/new_link_special', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let ads_type = req.body.ads;
        let name = req.body.name;
        let ads;
        if(ads_type == "ads_type_0") ads = "0";
        if(ads_type == "ads_type_1") ads = "1";
        if(ads_type == "ads_type_2") ads = "2";
        if(ads_type == "ads_type_3") ads = "3";
        if(!name) return res.redirect('/new_link_special?error=true&message=Lütfen bir isim giriniz.');
        if(!link) return res.redirect('/new_link_special?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_special?error=true&message=Link hatalı');
        let gecersiz_karekterler = ["<", ">", ":", "\"", "\\", "/", "|", "?", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", "=", "+", ";", ",", "(", ")", ".", " "];
        for(let i = 0; i < gecersiz_karekterler.length; i++) {
            if(name.includes(gecersiz_karekterler[i])) return res.redirect('/new_link_special?error=true&message=Geçersiz karakterler içeriyor.');
        }
        let short_li = await short_dash.findOne({ hash: name });
        if(short_li) return res.redirect('/new_link_special?error=true&message=Bu isim kullanılıyor.');
        new short_dash({
            url: link,
            hash: name,
            ads: ads,
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
            type: "0",
            expire: "NaN",
            maxHit: "NaN",
            vb: "0", //0 = görünür, 1 = gizli
            userID: account._id,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }).save();
        res.redirect('/new_link_special?success=true&message=Link başarıyla oluşturuldu&hash=' + name);
    });


    app.get('/new_link_pass', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link_pass.ejs', {
            config,
            account,
            sidebar,
            links: await passDash.find({ userID: account._id }).sort({ createdAt: -1 }).limit(70)
        });
    });

    app.post('/new_link_pass', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let pass = req.body.pass;
        let hash = req.body.name || randomToken(10);
        let gecersiz_karekterler = ["<", ">", ":", "\"", "\\", "/", "|", "?", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", "=", "+", ";", ",", "(", ")", ".", " "];
        for(let i = 0; i < gecersiz_karekterler.length; i++) {
            if(hash.includes(gecersiz_karekterler[i])) return res.redirect('/new_link_special?error=true&message=Geçersiz karakterler içeriyor.');
        }
        let check_hash = await passDash.findOne({ hash: hash });
        if(check_hash) return res.redirect('/new_link_pass?error=true&message=Bu isim kullanılıyor.');
        if(!pass) return res.redirect('/new_link_pass?error=true&message=Lütfen bir şifre giriniz.');
        if(!link) return res.redirect('/new_link_pass?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_pass?error=true&message=Link hatalı');
        new passDash({
            url: link, //Yönlendirilecek URL
            hash: hash, //Kısa URL
            pass: pass, //Şifre
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
            userID: account._id, //Kullanıcı ID
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'), //Oluşturulma Tarihi
        }).save();
        res.redirect('/new_link_pass?success=true&message=Link başarıyla oluşturuldu&hash=' + hash);
    });

    //////////////////////////////////////////////////////////////////////////////////////////
    app.get('/pass/:hash', async (req, res) => {
        let hash = req.params.hash;
        if(!hash) return res.redirect('/?error=true&message=Hash yok');
        let pass = await passDash.findOne({ hash: hash });
        if(!pass) return res.redirect('/?error=true&message=Böyle bir link bulunamadı.');
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        request(pass.url, (err, response, body) => {
            let page_info = {
                title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
            }
            res.render('dashboard/pages/pages_dash/ads/pass.ejs', {
                config,
                hash,
                user,
                page_info,
                db: pass,
                herror: req.query.error || false,
            });
        });
    });

    app.post('/pass/:hash', async (req, res) => {
        let hash = req.params.hash;
        let passwordd = req.body.password;
        if(!passwordd) return res.redirect('/pass/' + hash + '?error=true&message=Lütfen bir şifre giriniz.');
        if(!hash) return res.redirect('/?error=true&message=Hash yok');
        let pass = await passDash.findOne({ hash: hash });
        if(!pass) return res.redirect('/?error=true&message=Böyle bir link bulunamadı.');
        if(pass.pass != passwordd) return res.redirect('/pass/' + hash + '?error=true&message=Şifre hatalı');
        pass.clicks++;
        pass.lastClick = moment().format('YYYY-MM-DD HH:mm:ss');
        pass.save();
        res.redirect(pass.url+'');
    });
    //////////////////////////////////////////////////////////////////////////////////////////
    app.get('/new_link_timed', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link_timed.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/new_link_timed', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let time = req.body.date;
        let hash = req.body.name || randomToken(10);
        let gecersiz_karekterler = ["<", ">", ":", "\"", "\\", "/", "|", "?", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", "=", "+", ";", ",", "(", ")", ".", " "];
        for(let i = 0; i < gecersiz_karekterler.length; i++) {
            if(hash.includes(gecersiz_karekterler[i])) return res.redirect('/new_link_special?error=true&message=Geçersiz karakterler içeriyor.');
        }
        let check_hash = await short_dash.findOne({ hash: hash });
        if(check_hash) return res.redirect('/new_link_timed?error=true&message=Bu isim kullanılıyor.');
        let ads_type = req.body.ads;
        let ads;
        if(ads_type == "ads_type_0") ads = "0";
        if(ads_type == "ads_type_1") ads = "1";
        if(ads_type == "ads_type_2") ads = "2";
        if(ads_type == "ads_type_3") ads = "3";
        let now = moment().format('YYYY-MM-DD HH:mm:ss');
        if(moment(now).isAfter(time)) return res.redirect('/new_link_timed?error=true&message=Geçmiş zamanı seçemezsiniz.');
        if(!time) return res.redirect('/new_link_timed?error=true&message=Lütfen bir süre giriniz.');
        if(!link) return res.redirect('/new_link_timed?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_timed?error=true&message=Link hatalı');
        new short_dash({
            url: link,
            hash: hash,
            ads: ads,
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
            type: "1",
            expire: time,
            maxHit: "NaN",
            vb: "0", //0 = görünür, 1 = gizli
            userID: account._id,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }).save();
        res.redirect('/new_link_timed?success=true&message=Link başarıyla oluşturuldu&hash=' + hash);
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////
    setInterval(async () => {
        let now = moment().format('YYYY-MM-DD');
        let links = await short_dash.find({ expire: { $lte: now }, type: "1" });
        links.forEach(async (link) => {
            link.vb = "1";
            link.save();
        });
        let links2 = await short_dash.find({ type: "2" });
        links2.forEach(async (link) => {
            if(link.maxHit == "NaN") return;
            if(link.clicks >= Number(link.maxHit)) {
                link.vb = "1";
                link.save();
            }
        });
        
        let dcccc = await temporary_dc.find({});
        dcccc.forEach(async (link) => {
            let date = link.date;
            if(moment(date).isBefore(moment().subtract(15, 'minutes'))) {
                setTimeout(async () => {
                    await temporary_dc.findByIdAndDelete(link._id);
                }, 100);
            }
        });
    }, 240000);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    app.get('/new_link_hit_limit', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link_hit_limit.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/new_link_hit_limit', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let ads_type = req.body.ads;
        let hit = req.body.hit;
        let hash = req.body.name || randomToken(10);
        let gecersiz_karekterler = ["<", ">", ":", "\"", "\\", "/", "|", "?", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", "=", "+", ";", ",", "(", ")", ".", " "];
        for(let i = 0; i < gecersiz_karekterler.length; i++) {
            if(hash.includes(gecersiz_karekterler[i])) return res.redirect('/new_link_special?error=true&message=Geçersiz karakterler içeriyor.');
        }
        let check_hash = await short_dash.findOne({ hash: hash });
        if(check_hash) return res.redirect('/new_link_hit_limit?error=true&message=Bu isim kullanılıyor.');
        let ads;
        if(ads_type == "ads_type_0") ads = "0";
        if(ads_type == "ads_type_1") ads = "1";
        if(ads_type == "ads_type_2") ads = "2";
        if(ads_type == "ads_type_3") ads = "3";
        if(!hit) return res.redirect('/new_link_hit_limit?error=true&message=Lütfen bir hit sayısı giriniz.');
        if(isNaN(hit)) return res.redirect('/new_link_hit_limit?error=true&message=Hit sayısı sayısal bir değer olmalıdır.');
        if(hit < 1) hit = 1;
        if(!link) return res.redirect('/new_link_hit_limit?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_hit_limit?error=true&message=Link hatalı');
        new short_dash({
            url: link,
            hash: hash,
            ads: ads,
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
            type: "2",
            expire: "NaN",
            maxHit: String(hit),
            vb: "0", //0 = görünür, 1 = gizli
            userID: account._id,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }).save();
        res.redirect('/new_link_hit_limit?success=true&message=Link başarıyla oluşturuldu&hash=' + hash);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    app.get('/new_link_task', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link_task.ejs', {
            config,
            account,
            sidebar,
            tasks: await taskDash.find({ userID: account._id }).sort({ createdAt: -1 }).limit(70)
        });
    });

    app.post('/new_link_task', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let hash = req.body.name || randomToken(10);
        let gecersiz_karekterler = ["<", ">", ":", "\"", "\\", "/", "|", "?", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", "=", "+", ";", ",", "(", ")", ".", " "];
        for(let i = 0; i < gecersiz_karekterler.length; i++) {
            if(hash.includes(gecersiz_karekterler[i])) return res.redirect('/new_link_special?error=true&message=Geçersiz karakterler içeriyor.');
        }
        let check_hash = await short_dash.findOne({ hash: hash });
        if(check_hash) return res.redirect('/new_link_hit_limit?error=true&message=Bu isim kullanılıyor.');
        if(!link) return res.redirect('/new_link_hit_limit?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_hit_limit?error=true&message=Link hatalı');
        let sunucu_1 = req.body.discord_sw_1 || "NaN";
        let sunucu_2 = req.body.discord_sw_2 || "NaN";
        let sunucu_3 = req.body.discord_sw_3 || "NaN";
        new taskDash({
            url: link,
            hash: hash, //Linkin hash değeri
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
            dc_1: sunucu_1, //Discord sunucu 1
            dc_2: sunucu_2, //Discord sunucu 2
            dc_3: sunucu_3, //Discord sunucu 3
            vb: "0", //0 = görünür, 1 = gizli
            userID: account._id,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }).save();
        res.redirect('/new_link_task?success=true&message=Link başarıyla oluşturuldu&hash=' + hash);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));
    passport.use(new Strategy({
        clientID: "",
        clientSecret: "",
        callbackURL: "https://linkclk.net/auth/discord/redirect",
        scope: [`identify`, `guilds`,`guilds.join`, `email`]
    }, async (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile));

        try {
            new temporary_dc({
                id: profile.id,
                access: accessToken,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            }).save();
        } catch (e) {
            console.log(e)
        }

    }));

    app.use(session({
        store: new MemoryStore({ checkPeriod: 86400000 }),
        secret: `mYr5E2dS4lRgO062f6su0uhqxwEHygh}WQ-lLrWHVi"!sR:])9]{+E$tWxz[r1H-TfQ>n1c/a3b~e.Pz=&R5m&'N9:D4ZcM:3WST)o(C7LOtAgYUQekK#"m0r-Y/t0HLpe$99#'1|skDlglzDj~~]btG%[/?4%`,
        resave: false,
        saveUninitialized: false,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));


    app.get(`/auth/signin/discord`, (req, res, next) => {
        req.session.backURL = req.url;
        if (req.session.backURL) {
            req.session.backURL = req.session.backURL;
        } else if (req.headers.referer) {
            const parsed = url.parse(req.headers.referer);
            if (parsed.hostname === app.locals.domain) {
                req.session.backURL = parsed.path;
            }
        } else {
            let hash = req.cookies.task;
            if(!hash) return res.redirect('/?error=true&message=Login+failed');
            res.redirect(`/task/${hash}`);
        }
        next();
    }, passport.authenticate(`discord`)
    );

    app.get('/auth/discord/redirect', passport.authenticate('discord', {
            failureRedirect: '/?error=true&message=Login+failed'
        }), function(req, res) {
            let hash = req.cookies.task;
            if(!hash) return res.redirect('/?error=true&message=Login+failed');
            res.redirect(`/task/${hash}`);
    });
    
    app.get('/task/:hash', async (req, res) => {
        let hash = req.params.hash;
        if(!hash) return res.redirect('/?error=true&message=Link hatalı');
        let task = await taskDash.findOne({ hash: hash });
        if(!task) return res.redirect('/?error=true&message=Link hatalı veya süresi dolmuş');
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        request(task.url, (err, response, body) => {
            let page_info = {
                title: body?.match(/<title>(.*?)<\/title>/)?.[1] || config.site.title,
                description: body?.match(/<meta name="description" content="(.*?)"/)?.[1] || config.site.description,
                keywords: body?.match(/<meta name="keywords" content="(.*?)"/)?.[1] || config.site.keywords,
                image: body?.match(/<meta property="og:image" content="(.*?)"/)?.[1] || config.site.icon,
            }
            res.cookie('task', hash, { maxAge: 900000, httpOnly: true });
            res.render('dashboard/pages/pages_dash/ads/task.ejs', {
                config,
                page_info,
                db: task,
                user: account,
                dcuser: req.user || null,
            });
        });
    });

    app.get('/task_user_add_discord', async (req, res) => {
        let task_cookie = req.cookies.task;
        if(!task_cookie) return res.redirect('/?error=true&message=Link hatalı');
        let task = await taskDash.findOne({ hash: task_cookie });
        if(!task) return res.redirect('/?error=true&message=Link hatalı');
        if(!req.user) return res.redirect('/auth/signin/discord');
        let user_id = req.user.id;
        let dcdata = await temporary_dc.findOne({ id: user_id });
        if(!dcdata) return res.redirect('/auth/signin/discord');
        let accessToken = dcdata.access;
        if(!accessToken) return res.redirect('/auth/signin/discord');
        try {
            let sunucu_1 = task.dc_1;
            if(sunucu_1 != 'NaN') {
                if (!client.guilds.cache.get(`${sunucu_1}`).members.cache.get(user_id)) {
                    client.guilds.cache.get(`${sunucu_1}`).members.add(user_id, { accessToken: accessToken }).catch(console.error);
                }
            }
        } catch (e) {}
        try {
            let sunucu_2 = task.dc_2;
            if(sunucu_2 != 'NaN') {
                if (!client.guilds.cache.get(`${sunucu_2}`).members.cache.get(user_id)) {
                    client.guilds.cache.get(`${sunucu_2}`).members.add(user_id, { accessToken: accessToken }).catch(console.error);
                }
            }
        } catch (e) {}
        try {
            let sunucu_3 = task.dc_3;
            if(sunucu_3 != 'NaN') {
                if (!client.guilds.cache.get(`${sunucu_3}`).members.cache.get(user_id)) {
                    client.guilds.cache.get(`${sunucu_3}`).members.add(user_id, { accessToken: accessToken }).catch(console.error);
                }
            }
        } catch (e) {}
        setTimeout(() => {
            task.clicks++;
            task.lastClick = moment().format('YYYY-MM-DD HH:mm:ss');
            task.save();
            try {
                temporary_dc.deleteOne({ id: user_id });
            } catch (e) {
                console.log(e);
            }
            res.redirect(task.url+'');
        }, 3000);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
}
