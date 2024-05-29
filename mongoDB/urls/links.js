const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let noAuthLink = new mongoose.Schema({
    url: String, //Yönlendirilecek URL
    hash: String, //Kısa URL
    ads: String, //0 = reklam yok, 1 = Genel Reklam Basit (2 Sayfa), 2 = Orta Reklam (3 Sayfa), 3 = En Zor Reklam (5 Sayfa)
    clicks: Number, //Tıklanma sayısı
    lastClick: String, //Son tıklanma tarihi
    type: String, //0 = normal, 1 = Süre sınırlı, 2 = hit sınırlı
    expire: String,
    maxHit: String,
    vb: String, //0 = görünür, 1 = gizli
    userID: String, //Kullanıcı ID
    createdAt: String, //Oluşturulma Tarihi
});

module.exports = mongoDB.model("AuthLinks_v2", noAuthLink);