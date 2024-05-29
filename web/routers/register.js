const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
var randomToken = require('random-token');
const moment = require('moment');
const md5 = require('md5');
const sha512 = require('js-sha512');
const mailer = require('nodemailer');
const fetch = require("node-fetch");
module.exports = function(app, express, config, account_mongo, check_account) {
    app.get('/auth/signup', async (req, res) => {
        let usermail = req.cookies.usermail;
        let userpass = req.cookies.userpass;
        let account = await account_mongo.findOne({ email: usermail, password: userpass });
        if(account) {
            if(account.email_verify === false) return res.redirect('/?error=true&message=Hesap aktif değil. Aktif Etmek İçin Lütfen Mail i Onaylayınız.');
            if(account.ban.status === true) return res.redirect('/?error=true&message=Hesap banlandı.');
        }
        if(usermail) return res.redirect('/?success=true&message=Giriş yapıldı. r1');
        if(userpass) return res.redirect('/?success=true&message=Giriş yapıldı. r2');
        res.render('dashboard/pages/register.ejs', {
            config
        });
    });

    app.post('/register', async (req, res) => {
        let name = req.body.name;
        let last_name = req.body.last_name;
        let telefon_no = req.body.telefon_no;
        let mail = req.body.email;
        let register_country = req.body.register_country;
        let bizi_nereden_duydunuz = req.body.bizi_nereden_duydunuz;
        let password = req.body.password;
        //////
        let ref = req.cookies.ref;
        if(!name) return res.redirect('/auth/signup?error=true&message=Ad boş bırakılamaz.');
        if(!last_name) return res.redirect('/auth/signup?error=true&message=Soyad boş bırakılamaz.');
        if(!mail) return res.redirect('/auth/signup?error=true&message=E-posta boş bırakılamaz.');
        if(!register_country) return res.redirect('/auth/signup?error=true&message=Ülke boş bırakılamaz.');
        if(!bizi_nereden_duydunuz) return res.redirect('/auth/signup?error=true&message=Bizi nereden duydunuz boş bırakılamaz.');
        if(!password) return res.redirect('/auth/signup?error=true&message=Şifre boş bırakılamaz.');
        //////
        let check_mail = await account_mongo.findOne({ email: mail });
        if(check_mail) return res.redirect('/auth/signup?error=true&message=Bu e-posta adresi zaten kullanılıyor.');
        //////
        let api_key = randomToken(42);
        let email_verify_key = sha512(randomToken(42));
        let salt = "LinkKisaltmaServisiSifrelemeSistemi";
        let password_hash = md5(password + salt);
        password_hash = sha512(password_hash);
        //////
        try {
            fetch(`https://xxx.glitch.me/mail?email_verify_key=${email_verify_key}&name=${name}&mail=${mail}`)
        } catch(e) {}
        //////
        let moneyyy = 0;
        if(ref) {
            if(ref === '1sv3gy0mmcui') moneyyy = "0.17";
        }
        let ip = req.headers['cf-connecting-ip']  || req.headers['x-forwarded-for']; 
        let account = new account_mongo({
            name: name,
            surname: last_name,
            email: mail,
            email_verify: false,
            email_verify_key: email_verify_key,
            language: "tr",
            refferral: bizi_nereden_duydunuz,
            password: password_hash,
            phone: telefon_no || "Bilinmiyor",
            country: register_country,
            adress: "Bilinmiyor",
            ip: ip,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            last_login: moment().format('YYYY-MM-DD HH:mm:ss'),
            api_key: api_key,
            my_ref: randomToken(12),
            ref_earn: 0, //Referansdan Kazanç
            invite_ref: ref || "Yok", //Davet edem Referans Kodu
            balance: Number(moneyyy) || 0, //Bakiye
            pending_payment: 0,
            total_withdrawn: 0,
            refs: [{}],
            ban: {
                status: false,
                reason: " ",
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            },
            options: {
                url_120_day: false,
                api_url_40_day: false,
                ads_type: "1"
            },
            date_log: [{
                hit: 0,
                date: moment().format('YYYY-MM-DD')
            }],
            notification: [{
                img: "http://admin.pixelstrap.com/zeta/assets/images/avtar/man.png",
                title: `${name}, Hoşgeldin!`, //Başlık
                content: "Web Sitemizde Hesap Oluşturduğunuz İçin Teşekkür Ederiz.", //İçerik
                date: moment().format('YYYY-MM-DD HH:mm:ss'), //Tarih
            }],
            ip_history: [{
                ip: ip,
                device: req.useragent.isDesktop ? "Desktop" : "Mobile",
                os: req.useragent.os.toString(),
                scanner: req.useragent.browser.toString(),
                user_agent: req.useragent.source.toString(),
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            }]
        });
        account.save();

        try {
            setTimeout(async () => {
                let refferans = await account_mongo.findOne({ my_ref: ref });
                if(refferans) {
                    let reff = {
                        id: account._id,
                        name: account.name,
                        mail: account.email,
                        ip: ip,
                        date: moment().format('YYYY-MM-DD HH:mm:ss'),
                    }
                    refferans.refs.push(reff);
                    let bildirimm = {
                        img: "http://admin.pixelstrap.com/zeta/assets/images/avtar/man.png",
                        title: `Yeni Kullanıcı`,
                        content: `${name} İsimli Kullanıcı Sizin Referans Kodunuz İle Kayıt Oldu!`,
                        date: moment().format('YYYY-MM-DD HH:mm:ss'), //Tarih
                    }
                    refferans.notification.push(bildirimm);
                    refferans.save();
                }
            }, 100);
        } catch(e) {

        }

        res.cookie('usermail', mail, {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true
        });

        res.cookie('userpass', password_hash, {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true
        });

        return res.redirect('/auth/signin?success=true&message=Hesap oluşturuldu. Hesabınızı aktifleştirmek için e-posta adresinize gönderilen linki tıklayın.');
    });

    app.get('/email/verify', async (req, res) => {
        let token = req.query.token;
        let account = await account_mongo.findOne({ email_verify_key: token });
        if(!account) return res.redirect('/auth/signup?error=true&message=Hesap aktivasyonu başarısız oldu.');
        account.email_verify = true;
        account.email_verify_key = moment().format('YYYY-MM-DD HH:mm:ss') + ' Tarihinde Onaylandı!';
        account.save();
        return res.redirect('/auth/signin?success=true&message=Hesabınız aktifleştirildi. Giriş yapabilirsiniz.');
    });

    app.get('/auth/signin', async (req, res) => {
        let usermail = req.cookies.usermail;
        let userpass = req.cookies.userpass;
        if(usermail) return res.redirect('/?success=true&message=Giriş yapıldı. l1');
        if(userpass) return res.redirect('/?success=true&message=Giriş yapıldı. l2');
        res.render('dashboard/pages/login.ejs', {
            config
        });
    });

    app.post('/login', async (req, res) => {
        let mail = req.body.email;
        let salt = "LinkKisaltmaServisiSifrelemeSistemi";
        let password = md5(req.body.password + salt);
        password = sha512(password);
        let account = await account_mongo.findOne({ email: mail });
        if(!account) return res.redirect('/auth/signin?error=true&message=Hesap bulunamadı.');
        if(account.email_verify == false) return res.redirect('/auth/signin?error=true&message=Hesap aktif değil. Mail\'i Onaylamanız Gereklidir.');
        if(account.ban.status == true) return res.redirect('/auth/signin?error=true&message=Hesap banlandı.');
        if(account.password != password) return res.redirect('/auth/signin?error=true&message=Şifre yanlış.');
        account.last_login = moment().format('YYYY-MM-DD HH:mm:ss');
        let data_ip_history = {
            ip: req.headers['cf-connecting-ip']  || req.headers['x-forwarded-for'],
            device: req.useragent.isDesktop ? "Desktop" : "Mobile",
            os: req.useragent.os.toString(),
            scanner: req.useragent.browser.toString(),
            user_agent: req.useragent.source.toString(),
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        account.ip_history.push(data_ip_history);
        account.save();
        res.cookie('usermail', mail, {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true
        });
        res.cookie('userpass', password, {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            httpOnly: true
        });
        return res.redirect('/dashboard?success=true&message=Giriş yapıldı.');
    });

    app.get('/logout', async (req, res) => {
        res.clearCookie('usermail');
        res.clearCookie('userpass');
        return res.redirect('/?success=true&message=Çıkış yapıldı.');
    });
}