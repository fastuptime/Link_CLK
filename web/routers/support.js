const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const supports_go = require('../../mongoDB/supports.js');
var randomToken = require('random-token');
const moment = require('moment');
const md5 = require('md5');
const sha512 = require('js-sha512');
let salt = "LinkKisaltmaServisiSifrelemeSistemi";
const mailer = require('nodemailer');
module.exports = function(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin) {
    app.get('/support', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let supports = await supports_go.find({ userID: account._id });
        res.render('dashboard/pages/pages_dash/support/create.ejs', {
            config,
            account,
            sidebar,
            supports
        });
    });

    app.post('/support_create', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let mesaj = req.body.msg;
        let konu = req.body.subject;
        if(!mesaj) return res.redirect('/support?error=true&message=Lütfen mesajınızı giriniz.');
        if(!konu) return res.redirect('/support?error=true&message=Lütfen konu giriniz.');
        let support = new supports_go({
            userID: account._id,
            title: konu,
            messages: [{
                message: mesaj,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
                operator: false
            }],
            status: "Açık",
            date: moment().format('YYYY-MM-DD HH:mm:ss')
        });
        await support.save();
        res.redirect('/support?success=true&message=Destek talebi başarıyla oluşturuldu.');
    });

    app.get('/support/show/:id', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let params_id = req.params.id;
        if(!params_id) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        if(params_id.length != 24) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        let support = await supports_go.findOne({ _id: params_id, userID: account._id });
        if(!support) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        if(support.userID != account._id) return res.redirect('/support?error=true&message=Bu destek talebi sizin için değil.');
        res.render('dashboard/pages/pages_dash/support/show.ejs', {
            config,
            account,
            sidebar,
            support,
            support_msg: support.messages
        });
    });

    app.post('/support/new_msg/:id', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let params_id = req.params.id;
        if(!params_id) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        if(params_id.length != 24) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        let support = await supports_go.findOne({ _id: params_id, userID: account._id });
        if(!support) return res.redirect('/support?error=true&message=Destek talebi bulunamadı.');
        if(support.userID != account._id) return res.redirect('/support?error=true&message=Bu destek talebi sizin için değil.');
        let mesaj = req.body.msg;
        if(!mesaj) return res.redirect('/support/show/' + params_id + '?error=true&message=Lütfen mesajınızı giriniz.');
        let support_msg = {
            message: mesaj,
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
            operator: false
        };
        support.messages.push(support_msg);
        support.status = "Müşteri Yanıtı";
        await support.save();
        res.redirect('/support/show/' + params_id + '?success=true&message=Mesajınız başarıyla gönderildi.');
    });

    app.get('/support/show_admin/:id', check_account, chech_admin, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let params_id = req.params.id;
        if(!params_id) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        if(params_id.length != 24) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        let support = await supports_go.findOne({ _id: params_id });
        if(!support) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        res.render('dashboard/pages/pages_dash/support/admin/show.ejs', {
            config,
            account,
            sidebar: sidebar_admin,
            support,
            support_msg: support.messages
        });
    });

    app.get('/support_admin', check_account, chech_admin, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let support = await supports_go.find({}).sort({ date: -1 });
        let supports = [];
        support.forEach(async (item) => {
            if(item.status != "Kapalı") {
                supports.push(item);
            }
        }); 
        res.render('dashboard/pages/pages_dash/support/admin/create.ejs', {
            config,
            account,
            sidebar: sidebar_admin,
            supports
        });
    });

    app.post('/support/new_msg_admin/:id', check_account, check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let params_id = req.params.id;
        if(!params_id) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        if(params_id.length != 24) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        let support = await supports_go.findOne({ _id: params_id });
        if(!support) return res.redirect('/support_admin?error=true&message=Destek talebi bulunamadı.');
        let mesaj = req.body.msg;
        if(!mesaj) return res.redirect('/support/show_admin/' + params_id + '?error=true&message=Lütfen mesajınızı giriniz.');
        let support_msg = {
            message: mesaj,
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
            operator: true
        };
        support.messages.push(support_msg);
        support.status = "Yanıtlandı";
        await support.save();
        res.redirect('/support/show_admin/' + params_id + '?success=true&message=Mesajınız başarıyla gönderildi.');
    });
}