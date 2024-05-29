const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const {verify} = require('hcaptcha');
const moment = require('moment');
let karakter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const short_dash = require('../../mongoDB/urls/links.js');
var randomToken = require('random-token');
function randomString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += karakter.charAt(Math.floor(Math.random() * karakter.length));
    }
    return result;
}

module.exports = function(app, express, config, account_mongo, check_account) {
    app.get('/test', async (req, res) => {
        res.render('test');
    });
	
    app.get('/', async (req, res) => {
        let short = req.query.short;
        let db = await main_page_short.find({});
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let hits = await main_page_short.aggregate([ { $group: { _id: null, total: { $sum: "$clicks" } } } ]);
        let ref = req.query.ref;
        if(ref) {
            res.cookie('ref', ref, { 
                maxAge: 1000 * 60 * 60 * 24 * 14,
                httpOnly: true
            });
            return res.redirect('/');
        }
        res.render('index', {
            config,
            short_url: short || "NaN",
            url_length: db.length + config.fakes.fake_link_length,
            account_length: config.fakes.fake_account_length,
            hit_length: config.fakes.fake_hit_length + Number(hits[0]?.total || 0),
            user
        });
    });

    app.post('/short/url', async (req, res) => {
        let url = req.body.url;
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) {
            if(config.main_page_hcaptcha) {
                let token = req.body['h-captcha-response'];
                if(!token) return res.redirect('/?error=true&message=Captcha boş bırakılamaz.');
                if(!url) return res.redirect("/?error=true&message=Lütfen Link Giriniz!");
                if(!url.includes("http")) return res.redirect("/?error=true&message=Lütfen Geçerli Bir Format'da Link Giriniz!");
                let db_check_url = await main_page_short.findOne({ url: url });
                if(db_check_url) return res.redirect("/?short=" + config.short.main_page + db_check_url.hash);
                verify(config.hcaptcha_secret, token).then(async (success) => {
                    if(!success.success) return res.redirect("/?error=true&message=Captcha Hatası!");
                    let shortCode = randomToken(8)
                    let db_check = await main_page_short.findOne({ hash: shortCode });
                    if(db_check) shortCode = randomToken(12);
                    let data_mongo = new main_page_short({
                        url: url,
                        hash: shortCode,
                        ads: true,
                        clicks: 0,
                        createdIp: req.ip,
                        createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
                    });
                    data_mongo.save();
                    res.redirect("/?short=" + config.short.main_page + shortCode);
                }).catch(err => {
                    res.redirect("/?error=true&message=Captcha Hatası!");
                });
            } else {
                if(!url) return res.redirect("/?error=true&message=Lütfen Link Giriniz!");
                if(!url.includes("http")) return res.redirect("/?error=true&message=Lütfen Geçerli Bir Format'da Link Giriniz!");
                let db_check_url = await main_page_short.findOne({ url: url });
                if(db_check_url) return res.redirect("/?short=" + config.short.main_page + db_check_url.hash);
                let shortCode = randomToken(8);
                let db_check = await main_page_short.findOne({ hash: shortCode });
                if(db_check) shortCode = randomToken(12);
                let data_mongo = new main_page_short({
                    url: url,
                    hash: shortCode,
                    ads: true,
                    clicks: 0,
                    createdIp: req.ip,
                    createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
                });
                data_mongo.save();
                res.redirect("/?short=" + config.short.main_page + shortCode);
            }
        } else {
            if(!url) return res.redirect("/?error=true&message=Lütfen Link Giriniz!");
            if(!url.includes("http")) return res.redirect("/?error=true&message=Lütfen Geçerli Bir Format'da Link Giriniz!");
            let hash = randomToken(8);
            let short_das = await short_dash.findOne({ hash: hash });
            if(short_das) hash = randomToken(12);
            new short_dash({
                url: url,
                hash: hash,
                ads: "2",
                clicks: 0, //Tıklanma sayısı
                lastClick: moment().format('YYYY-MM-DD HH:mm:ss'), //Son tıklanma
                userID: account._id,
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
            }).save();
            res.redirect("/?short=" + config.site.url + "/go/" + hash);
        }
    });

   app.get('/payout_rates', async (req, res) => {
        let user = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        let payout_rates = await account_mongo.find({});
        res.render('payout_rates', {
            config,
            user: user,
            payout_rates
        });
    });

    app.get('/login', async (req, res) => {
        res.redirect('/auth/signin');
    });
}