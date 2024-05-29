const express = require('express');
const request = require('request');
const ejs = require('ejs');
const path = require('path');
const config = require('./config.js');
const app = express();
const bodyParser = require('body-parser');
var useragent = require('express-useragent');
var cookieParser = require("cookie-parser");
const Discord = require('discord.js');
const { Client, Intents, MessageEmbed, VoiceChannel, WebhookClient, Collection, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
    messageCacheLifetime: 60,
    fetchAllMembers: true,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(useragent.express());
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './web/www');

app.use("/assets", express.static(path.join(__dirname, "web/assets/index")));
app.use("/dash_assets", express.static(path.join(__dirname, "web/www/dashboard")));
///MongoDB
const account_mongo = require('./mongoDB/account.js');
///MongoDB

let check_account = (req, res, next) => {
    let mail = req.cookies.usermail;
    let password = req.cookies.userpass;
    if(!mail || !password) return res.redirect('/?error=true&message=Lütfen giriş yapınız.');
    setTimeout(async () => {
        let account = await account_mongo.findOne({ email: mail, password: password });
        if(!account) return res.redirect('/?error=true&message=Lütfen giriş yapınız.');
        if(account.email_verify === false) return res.redirect('/?error=true&message=Hesap aktif değil. Aktif Etmek İçin Lütfen Mail i Onaylayınız.');
        if(account.ban.status === true) return res.redirect('/?error=true&message=Hesap banlandı.');
        if(account.password != password) return res.redirect('/?error=true&message=Şifre yanlış.');
        next();
    }, 10);
};
 
let chech_admin = (req, res, next) => {
    let mail = req.cookies.usermail;
    let mails = [
        "fastuptime@gmail.com",
        "kontasegehan091@gmail.com"
    ]
    if(!mails.includes(mail)) return res.redirect('/?error=true&message=Bu sayfayı görüntüleme yetkiniz yok.');
    next();
}
let sidebar = require('./side_bar.js')(app, config);
let sidebar_admin = require('./side_bar_admin.js')(app, config);
require("./web/routers/index.js")(app, express, config, account_mongo, check_account);
require("./web/routers/redirect.js")(app, express, config, account_mongo, check_account); 
require("./web/routers/dashboard.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin);
require("./web/routers/links.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin, client);
require("./web/routers/go_url.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin);
require("./web/routers/api.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin);
require("./web/routers/kontrol.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin);
require("./web/routers/support.js")(app, express, config, account_mongo, check_account, sidebar, chech_admin, sidebar_admin);
require("./web/routers/register.js")(app, express, config, account_mongo, check_account);
//404

app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'web/sw.js'));
});

app.use((req, res, next) => {
    res.status(404).redirect('/?error=true&message=Aradığınız sayfa bulunamadı.');
}).use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("500");
});
app.listen(80, () => {
    console.log('Site Başlatıldı');
});

client.login(config.token).then(() => {
    console.log('Bot Başlatıldı');
});