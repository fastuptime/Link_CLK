const main_page_short = require('../../mongoDB/urls/noAuthLinks.js');
const hits = require('../../mongoDB/urls/hits.js');
const short_dash = require('../../mongoDB/urls/links.js');
const withdraw_money = require('../../mongoDB/withdraw_money.js');
const temporary_key = require('../../mongoDB/temporary_key.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const log_dc_hit_no_login = new WebhookClient({ url: "https://discord.com/api/webhooks/xx/xxx" })
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
    setInterval(async () => {
        let time = moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
        let xxxxxx = await temporary_key.find({ date: { $lte: time } });
        try {
            xxxxxx.forEach(async (item) => {
                if(!item) return;
                await temporary_key.deleteOne({ _id: item._id });
            });
        } catch (err) {
            console.log(err);
        }
    }, 240000);
}