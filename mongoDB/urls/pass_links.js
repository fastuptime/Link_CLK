const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let passLink = new mongoose.Schema({
    url: String, //Yönlendirilecek URL
    hash: String, //Kısa URL
    pass: String, //Şifre
    clicks: Number, //Tıklanma sayısı
    lastClick: String, //Son tıklanma tarihi
    userID: String, //Kullanıcı ID
    createdAt: String, //Oluşturulma Tarihi
});

module.exports = mongoDB.model("passLinks", passLink);