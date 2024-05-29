const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const hits = require('../../mongoDB/urls/hits.js');
const short_dash = require('../../mongoDB/urls/links.js');
const withdraw_money = require('../../mongoDB/withdraw_money.js');
const temporary_key = require('../../mongoDB/temporary_key.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_dc_hit_no_login = new WebhookClient({ url: "https://discord.com/api/webhooks/xxx/xxxx" })
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
    app.get('/api', async (req, res) => {
        let api = req.query.api;
        let url = req.query.url;
        let alias = req.query.alias || "";
        let pl = req.query.pl || '2';
        if(!api) return res.json({ "status": "error", message: "Lütfen api kodunu giriniz." });
        if(!url) return res.json({ "status": "error", message: "Lütfen url adresini giriniz." });
        if(!pl) return res.json({ "status": "error", message: "Lütfen pl kodunu giriniz." });
        if(isNaN(pl)) return res.json({ "status": "error", message: "Lütfen pl kodunu sayısal bir değer giriniz." });
        let user = await account_mongo.findOne({ api_key: api });
        if(!user) return res.json({ "status": "error", message: "Api kodu hatalı." });
        if(user.ban.status == true) return res.json({ "status": "error", message: "Hesabınız pasif durumdadır. Lütfen yönetici ile iletişime geçiniz." });
        if(pl < 0) return res.json({ "status": "error", message: "Lütfen geçerli bir pl kodu giriniz." });
        if(pl > 3) return res.json({ "status": "error", message: "Pl kodunuz hatalı." });
        let hash = rand.generate(10);
        let xx_short = alias + hash;
        let short = await short_dash.findOne({ url: url, ads: pl });
        if(short) return res.json({ status: "success", url: config.short.go_page + short.hash, message: "Bu url zaten kısa url olarak kayıtlıdır." });
        let sorgu = await short_dash.findOne({ hash: xx_short });
        if(sorgu) xx_short = alias + rand.generate(12);
        new short_dash({
            url: url,
            hash: xx_short,
            ads: pl,
            clicks: 0, //Tıklanma sayısı
            lastClick: moment().format("YYYY-MM-DD HH:mm:ss"), //Son tıklanma tarihi
            type: "0",
            expire: "NaN",
            maxHit: "NaN",
            vb: "0", //0 = görünür, 1 = gizli
            userID: user._id, //Kullanıcı ID
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss") //Oluşturulma Tarihi
        }).save();
        res.json({ status: "success", url: config.short.go_page + xx_short });
    });

    app.get('/api_del', async (req, res) => {
        let api = req.query.api;
        let url = req.query.url;
        if(!api) return res.json({ "status": "error", message: "Lütfen api kodunu giriniz." });
        if(!url) return res.json({ "status": "error", message: "Lütfen url adresini giriniz." });
        let user = await account_mongo.findOne({ api_key: api });
        if(!user) return res.json({ "status": "error", message: "Api kodu hatalı." });
        if(user.ban.status == true) return res.json({ "status": "error", message: "Hesabınız pasif durumdadır. Lütfen yönetici ile iletişime geçiniz." });
        let short = await short_dash.findOne({ url: url });
        if(!short) return res.json({ "status": "error", message: "Bu url zaten kısa url olarak kayıtlı değildir." });
        await short_dash.deleteOne({ url: url });
        res.json({ status: "success", message: "Kısa url başarıyla silindi." });
    });
    
    app.get('/test', async (req, res) => {
        let user = await account_mongo.find({ });
        res.send(user.length + " users");
    });		
	
    app.get('/api_login', async (req, res) => {
        let mail = req.query.email;
        let pass = req.query.pass;
        if(!mail) return res.json({ success: false, message: "Lütfen mail adresini giriniz." });
        if(!pass) return res.json({ success: false, message: "Lütfen şifreyi giriniz." });
        let user = await account_mongo.findOne({ email: mail });
        if(!user) return res.json({ success: false, message: "Böyle bir kullanıcı bulunamadı." });
        if(user.ban.status == true) return res.json({ success: false, message: "Hesabınız pasif durumdadır. Lütfen yönetici ile iletişime geçiniz." });
        let salt = "LinkKisaltmaServisiSifrelemeSistemi";
        let password_hash = md5(pass + salt);
        password_hash = sha512(password_hash);
        if(password_hash == user.password) {
            return res.json({ success: true, api_key: user.api_key, username: user.name, message: "Giriş başarılı." });
        } else {
            return res.json({ success: false, message: "Şifre hatalı." });
        }
    });
}