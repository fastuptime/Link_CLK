const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let withdraw_money = new mongoose.Schema({
    userID: String, //Kullanıcı id
    code: String, //Kod
    amount: String, //Miktar
    miktar: String, //Miktar dolar
    date: String, //Tarih
    status: String, //Durum ("Ödendi", "İptal Edildi", "Beklemede")
    account_number: String, //Hesap numarası Çekim hesabı
    note: String, //Not
    admin_note: String, //Admin not
    date_withdraw: String, //ödenme tarihi
});

module.exports = mongoDB.model("withdraw_moneys", withdraw_money);