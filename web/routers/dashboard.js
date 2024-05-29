const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const short_dash = require('../../mongoDB/urls/links.js');
const hits = require('../../mongoDB/urls/hits.js');
const withdraw_money = require('../../mongoDB/withdraw_money.js');
const passDash = require('../../mongoDB/urls/pass_links.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_odeme_talebi = new WebhookClient({ url: "https://discord.com/api/webhooks/xx/xxxxx" })
var randomToken = require('random-token');
const moment = require('moment');
const md5 = require('md5');
const sha512 = require('js-sha512');
let salt = "LinkKisaltmaServisiSifrelemeSistemi";
const mailer = require('nodemailer');
const fetch = require("node-fetch");
const request = require('request');
module.exports = function(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin) {
    app.get('/dashboard', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/?error=true&message=Lütfen Oturum Açınız');
        if(account.email_verify === false) return res.redirect('/?error=true&message=Hesap aktif değil. Aktif Etmek İçin Lütfen Mail i Onaylayınız.');
        let last_10_ip_history = await account_mongo.findOne({ _id: account._id }, { ip_history: { $slice: -10 } });
        let last_10_ip_history_array = [];
        for(let i = 0; i < last_10_ip_history.ip_history.length; i++) {
            last_10_ip_history_array.push(last_10_ip_history.ip_history[i]);
        }
        last_10_ip_history_array.reverse();
        res.render('dashboard/pages/index.ejs', {
            config,
            account,
            last_10_ip_history_array,
            sidebar
        });
    });

    app.get('/faqs', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/faqs.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.get('/terms', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/terms.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.get('/tool_api', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/tool_api.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.get('/change_pass', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/change_pass.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/dashboard/settings/change_password', async (req, res) => {
        let eski_sifre = req.body.eski_sifresi;
        let yeni_sifre = req.body.yeni_şifreniz;
        let yeni_sifre_tekrar = req.body.tekrar_yeni_şifreniz;
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        if(!eski_sifre) return res.redirect('/change_pass?error=true&message=Eski şifrenizi giriniz');
        if(!yeni_sifre) return res.redirect('/change_pass?error=true&message=Yeni şifrenizi giriniz');
        if(!yeni_sifre_tekrar) return res.redirect('/change_pass?error=true&message=Yeni şifrenizi tekrar giriniz');
        let password = md5(eski_sifre + salt);
        password = sha512(password);
        if(password != account.password) return res.redirect('/change_pass?error=true&message=Eski şifrenizi yanlış girdiniz');
        if(yeni_sifre != yeni_sifre_tekrar) return res.redirect('/change_pass?error=true&message=Yeni şifrenizi tekrar giriniz');
        let new_password = md5(yeni_sifre + salt);
        new_password = sha512(new_password);
        account_mongo.findOneAndUpdate({ _id: account._id }, { $set: { password: new_password } }, (err, result) => {
            if(err) return res.redirect('/change_pass?error=true&message=Bilinmeyen bir hata oluştu');
            res.redirect('/logout');
        });
    });

    app.get('/change_mail', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/change_mail.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/dashboard/settings/change_mail', async (req, res) => {
        let yeni_mail = req.body.yeni_mail;
        let yeni_mail_tekrar = req.body.tekrar_yeni_mail;
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        if(!yeni_mail.includes('@')) return res.redirect('/change_mail?error=true&message=Geçersiz mail');
        if(!yeni_mail) return res.redirect('/change_mail?error=true&message=Yeni mail adresini giriniz');
        if(!yeni_mail_tekrar) return res.redirect('/change_mail?error=true&message=Yeni mail adresini tekrar giriniz');
        if(yeni_mail != yeni_mail_tekrar) return res.redirect('/change_mail?error=true&message=Yeni mail adresini tekrar giriniz');
        let email_verify_key = sha512(randomToken(42));
        account_mongo.findOneAndUpdate({ _id: account._id }, { 
            $set: { 
                email: yeni_mail,
                email_verify: false,
                email_verify_key: email_verify_key
            }
        }, (err, result) => {
            try {
                fetch(`https://xxxxxxxxxxxxxxxxxxxxxxx.glitch.me/mail?email_verify_key=${email_verify_key}&name=${account.name}&mail=${yeni_mail}`)
            } catch(err) {
                console.log(err);
                account_mongo.findOneAndUpdate({ _id: account._id }, { $set: { email_verify: true } }, (err, result) => {
                    
                });
            }
            res.redirect('/logout?success=true&message=E-posta adresiniz başarıyla değiştirildi');
        });
    });

    app.get('/withdraw_money', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let talepleri = await withdraw_money.find({ userID: account._id }).sort({ date: -1 });
        res.render('dashboard/pages/pages_dash/withdraw_money.ejs', {
            config,
            account,
            sidebar,
            talepleri
        });
    });

    app.post('/withdraw_money', async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let cekim_hesabi = req.body.cekim_hesabi;
        let not = req.body.not;
        if(!cekim_hesabi) return res.redirect('/withdraw_money?error=true&message=Çekim hesabınızı giriniz');
        if(!not) return res.redirect('/withdraw_money?error=true&message=Notunuzu giriniz');
        var bakiye = Number(account.balance);
        let xxx;
        request('https://api.genelpara.com/embed/doviz.json', (err, response, body) => {
            if(err) return res.redirect('/withdraw_money?error=true&message=Döviz cevrimi yapılırken bir hata oluştu');
            xxx = body;
        });
        setTimeout(() => {
            xxx = JSON.parse(xxx);
            let usd = xxx.USD.alis;
            var cekim_hesabi_tl = Number(bakiye) * usd;
            if(Number(cekim_hesabi_tl) <= 75) return res.redirect('/withdraw_money?error=true&message=Çekim miktarı en az 75 TL olmalıdır');
            new withdraw_money({
                userID: account._id,
                code: randomToken(6),
                amount: cekim_hesabi_tl + ' TL',
                miktar: bakiye,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
                status: "Beklemede",
                account_number: cekim_hesabi,
                note: not,
                admin_note: "idk",
                date_withdraw: "idk"
            }).save();
            account_mongo.findOneAndUpdate({ _id: account._id }, { $set: { balance: 0 } }, (err, result) => {
            });
            account_mongo.findOneAndUpdate({ _id: account._id }, { $set: { pending_payment: Number(bakiye) } }, (err, result) => {
            });
            log_odeme_talebi.send({ content: `${account.name} adlı kullanıcının çekim işlemi istedi. <@445142958447263747>`});
            res.redirect('/withdraw_money?success=true&message=Çekim işlemi başarıyla gerçekleştirildi');
        }, 1000);
    });

    app.get('/new_link_normal', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        res.render('dashboard/pages/pages_dash/new_link.ejs', {
            config,
            account,
            sidebar
        });
    });

    app.post('/new_link', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let link = req.body.url;
        let ads_type = req.body.ads;
        let ads;
        if(ads_type == "ads_type_0") ads = "0";
        if(ads_type == "ads_type_1") ads = "1";
        if(ads_type == "ads_type_2") ads = "2";
        if(ads_type == "ads_type_3") ads = "3";
        if(!link) return res.redirect('/new_link_normal?error=true&message=Linki giriniz');
        if(!link.startsWith('http')) return res.redirect('/new_link_normal?error=true&message=Link hatalı');
        let hash = randomToken(8);
        new short_dash({
            url: link,
            hash: hash,
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
        res.redirect('/new_link_normal?success=true&message=Link başarıyla oluşturuldu&hash=' + hash);
    });

    app.get('/my_links', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let page = req.query.page;
        if(isNaN(page)) page = 1;
        if(page < 1) page = 1;
        if(!page) page = 1;
        let links = await short_dash.find({ userID: account._id }).sort({ createdAt: -1 }).skip((page - 1) * 75).limit(75);
        res.render('dashboard/pages/pages_dash/my_links.ejs', {
            config,
            account,
            sidebar,
            links
        });
    });

    app.get('/statistics', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        try {
            let links = await short_dash.find({ userID: account._id }).sort({ createdAt: -1 });
            let pass_links = await passDash.find({ userID: account._id }).sort({ createdAt: -1 });
            let link_hit = await short_dash.find({ userID: account._id }).sort({ lastClick: -1});
            link_hit.sort((a, b) => {
                return b.clicks - a.clicks;
            }).slice(0, 10);
            let total_clicks = links.reduce((a, b) => a + b.clicks, 0);
            let xxx;
            request('https://api.genelpara.com/embed/doviz.json', (err, response, body) => {
                if(err) return res.redirect('/withdraw_money?error=true&message=Döviz cevrimi yapılırken bir hata oluştu');
                xxx = body;
            });
            let hits_24 = await hits.find({ uid: account._id, dt: { $gte: moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss') } });
            let hits_24_group = hits_24.reduce((a, b) => {
                if(!a[b.dt.substring(11, 13)]) a[b.dt.substring(11, 13)] = 0;
                a[b.dt.substring(11, 13)] += 1;
                return a;
            }, {});
            let hits_24_group_array = [];
            let bugunkuhit = 0;
            for(let i = 0; i < 24; i++) {
                i = i < 10 ? '0' + i : i;
                i = String(i);
                if(!hits_24_group[i]) hits_24_group[i] = 0;
                let momentz = moment().subtract(24, "hours").format("HH");
                if(momentz < i) {
                    let arr = {
                        hits: 0,
                        hour: i,
                    };
                    hits_24_group_array.push(arr);
                } else {
                    let arr = {
                        hour: i,
                        hits: hits_24_group[i],
                    };
                    bugunkuhit += hits_24_group[i];
                    hits_24_group_array.push(arr);
                }
            }
            setTimeout(async () => {
                try {
                    xxx = JSON.parse(xxx);
                    let usd = xxx.USD.alis;
                    var cekim_hesabi_tl = Number(account.balance) * usd;
                    var cekilentl = Number(account.total_withdrawn) * usd;
                    res.render('dashboard/pages/pages_dash/statistics.ejs', {
                        config,
                        account,
                        sidebar,
                        links,
                        total_links: links.length + pass_links.length,
                        total_clicks,
                        tl: cekim_hesabi_tl,
                        cekilentl,
                        link_hit: link_hit.slice(0, 10),
                        hit_00: hits_24_group_array[0].hits,
                        hit_01: hits_24_group_array[1].hits,
                        hit_02: hits_24_group_array[2].hits,
                        hit_03: hits_24_group_array[3].hits,
                        hit_04: hits_24_group_array[4].hits,
                        hit_05: hits_24_group_array[5].hits,
                        hit_06: hits_24_group_array[6].hits,
                        hit_07: hits_24_group_array[7].hits,
                        hit_08: hits_24_group_array[8].hits,
                        hit_09: hits_24_group_array[9].hits,
                        hit_10: hits_24_group_array[10].hits,
                        hit_11: hits_24_group_array[11].hits,
                        hit_12: hits_24_group_array[12].hits,
                        hit_13: hits_24_group_array[13].hits,
                        hit_14: hits_24_group_array[14].hits,
                        hit_15: hits_24_group_array[15].hits,
                        hit_16: hits_24_group_array[16].hits,
                        hit_17: hits_24_group_array[17].hits,
                        hit_18: hits_24_group_array[18].hits,
                        hit_19: hits_24_group_array[19].hits,
                        hit_20: hits_24_group_array[20].hits,
                        hit_21: hits_24_group_array[21].hits,
                        hit_22: hits_24_group_array[22].hits,
                        hit_23: hits_24_group_array[23].hits,
                        bugunkuhit,
                        hits_24: await hits.find({ uid: account._id, dt: { $gte: moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss') } }).limit(20).sort({ dt: -1 }),
                    });
                } catch (e) {
                    res.redirect('/withdraw_money?error=true&message=Döviz cevrimi yapılırken bir hata oluştu');
                }
            }, 1000);
        }   catch (e) {
            res.redirect('/withdraw_money?error=true&message=Döviz cevrimi yapılırken bir hata oluştu' + e);
        }
    });

    app.get('/statistics_admin', check_account, chech_admin, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let links = await short_dash.find({ }).sort({ createdAt: -1 });
        let link_hit = await short_dash.find({ }).sort({ lastClick: -1});
        link_hit.sort((a, b) => {
            return b.clicks - a.clicks;
        }).slice(0, 10);
        let total_clicks = links.reduce((a, b) => a + b.clicks, 0);
        let xxx;
        let acc = await account_mongo.find({ }).sort({ created_at: -1 }).limit(10);
        request('https://api.genelpara.com/embed/doviz.json', (err, response, body) => {
            if(err) return res.redirect('/dashboard?error=true&message=Döviz cevrimi yapılırken bir hata oluştu');
            xxx = body;
        });
        let hits_24 = await hits.find({ dt: { $gte: moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss') } });
        let hits_24_group = hits_24.reduce((a, b) => {
            if(!a[b.dt.substring(11, 13)]) a[b.dt.substring(11, 13)] = 0;
            a[b.dt.substring(11, 13)] += 1;
            return a;
        }, {});
        let hits_24_group_array = [];
        let bugunkuhit = 0;
        for(let i = 0; i < 24; i++) {
            i = i < 10 ? '0' + i : i;
            i = String(i);
            if(!hits_24_group[i]) hits_24_group[i] = 0;
            let momentz = moment().subtract(24, 'hours').format('HH');
            if(momentz < i) {
                let arr = {
                    hits: 0,
                    hour: i,
                };
                hits_24_group_array.push(arr);
            } else {
                let arr = {
                    hour: i,
                    hits: hits_24_group[i],
                };
                bugunkuhit += hits_24_group[i];
                hits_24_group_array.push(arr);
            }
        }
        setTimeout(async () => {
            try {
                xxx = JSON.parse(xxx);
                let usd = xxx.USD.alis;
                res.render('dashboard/pages/pages_dash/admin/statistics_admin.ejs', {
                    config,
                    account,
                    sidebar: sidebar_admin,
                    links,
                    total_clicks,
                    hesap_sayisi: await account_mongo.countDocuments(),
                    link_hit: link_hit.slice(0, 10),
                    acc,
                    hit_00: hits_24_group_array[0].hits,
                    hit_01: hits_24_group_array[1].hits,
                    hit_02: hits_24_group_array[2].hits,
                    hit_03: hits_24_group_array[3].hits,
                    hit_04: hits_24_group_array[4].hits,
                    hit_05: hits_24_group_array[5].hits,
                    hit_06: hits_24_group_array[6].hits,
                    hit_07: hits_24_group_array[7].hits,
                    hit_08: hits_24_group_array[8].hits,
                    hit_09: hits_24_group_array[9].hits,
                    hit_10: hits_24_group_array[10].hits,
                    hit_11: hits_24_group_array[11].hits,
                    hit_12: hits_24_group_array[12].hits,
                    hit_13: hits_24_group_array[13].hits,
                    hit_14: hits_24_group_array[14].hits,
                    hit_15: hits_24_group_array[15].hits,
                    hit_16: hits_24_group_array[16].hits,
                    hit_17: hits_24_group_array[17].hits,
                    hit_18: hits_24_group_array[18].hits,
                    hit_19: hits_24_group_array[19].hits,
                    hit_20: hits_24_group_array[20].hits,
                    hit_21: hits_24_group_array[21].hits,
                    hit_22: hits_24_group_array[22].hits,
                    hit_23: hits_24_group_array[23].hits,
                    bugunkuhit
                });
            } catch (e) {
                res.redirect('/dashboard?error=true&message=Döviz cevrimi yapılırken bir hata oluştu');
            }
        }, 1000);
    });

    app.get('/withdraw_money_admin', check_account, chech_admin, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let talepleri = await withdraw_money.find({ }).sort({ date: -1 });
        res.render('dashboard/pages/pages_dash/admin/withdraw_moneys.ejs', {
            config,
            account,
            sidebar: sidebar_admin,
            talepleri
        });
    });

    app.post('/withdraw_money_admin', check_account, chech_admin, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let id = req.body.id;
        let not = req.body.not;
        let status = req.body.status;
        if(!id) return res.redirect('/withdraw_money_admin?error=true&message=ID boş olamaz');
        if(!not) return res.redirect('/withdraw_money_admin?error=true&message=Not boş olamaz');
        if(!status) return res.redirect('/withdraw_money_admin?error=true&message=Durum boş olamaz');
        let talep = await withdraw_money.findOne({ code: id });
        if(!talep) return res.redirect('/withdraw_money_admin?error=true&message=Talep bulunamadı');
        talep.status = status;
        talep.admin_note = not;
        talep.date_withdraw = moment().format('YYYY-MM-DD HH:mm:ss');
        talep.save();
        if(status == 'Ödendi') {
            setTimeout(async () => {
                let miktar = talep.miktar;
                account_mongo.findOneAndUpdate({ _id: talep.userID }, { $inc: { total_withdrawn: Number(miktar) }, $set: { pending_payment: 0 } }, (err, result) => {
                    if(err) console.log(err);
                });
                setTimeout(() => {
                    res.redirect('/withdraw_money_admin?success=true&message=Talep başarıyla güncellendi');
                }, 400);
            }, 100);
        } else {
            console.log(status);
            res.redirect('/withdraw_money_admin?success=true&message=Talep başarıyla güncellendi');
        }
    });

    app.get('/referrals', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let reff = account.refs;
        reff.sort((a, b) => {
            return b.date - a.date;
        });
        res.render('dashboard/pages/pages_dash/reff.ejs', {
            config,
            account,
            sidebar,
            reff
        });
    });

    app.get('/link_gizle/:id', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let id = req.params.id;
        await short_dash.findOneAndUpdate({ _id: id, userID: account._id }, { $set: { vb: '1' } });
        res.redirect('/my_links');
    });

    app.get('/link_goster/:id', check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let id = req.params.id;
        await short_dash.findOneAndUpdate({ _id: id, userID: account._id }, { $set: { vb: '0' } });
        res.redirect('/my_links');
    });

    app.get("/my_links_edit/:id", check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let id = req.params.id;
        let link = await short_dash.findOne({ _id: id, userID: account._id });
        if(!link) return res.redirect('/my_links?error=true&message=Link bulunamadı');
        res.render("dashboard/pages/pages_dash/my_links_edit.ejs", {
            config,
            account,
            sidebar,
            link,
        });
    });
    
    app.post("/my_links_edit", check_account, async (req, res) => {
        let account = await account_mongo.findOne({ password: req.cookies.userpass, email: req.cookies.usermail });
        if(!account) return res.redirect('/login');
        let id = req.body.id;
        let link = await short_dash.findOne({ _id: id, userID: account._id });
        if(!link) return res.redirect('/my_links?error=true&message=Link bulunamadı');
        let url = req.body.url;
        if(!url) return res.redirect('/my_links_edit/' + id + '?error=true&message=URL boş olamaz');
        await short_dash.findOneAndUpdate({ _id: id, userID: account._id }, { $set: { url: url } });
        res.redirect('/my_links?success=true&message=Link başarıyla güncellendi');
    });

    app.get('/robots.txt', function (req, res) {        res.type('text/plain');        res.send("User-agent: *\nAllow: /");     });
    app.get('/sitemap.xml', function (req, res) {        res.render('dashboard/sitemap');    });

    app.get('/dashboard/settings', check_account, async (req, res) => {
        res.redirect('/change_mail');
    });
}