const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let task = new mongoose.Schema({
    url: String, //Yönlendirilecek URL
    hash: String, //Kısa URL
    clicks: Number, //Tıklanma sayısı
    lastClick: String, //Son tıklanma tarihi
    dc_1: String,
    dc_2: String,
    dc_3: String,
    vb: String, //0 = görünür, 1 = gizli
    userID: String, //Kullanıcı ID
    createdAt: String, //Oluşturulma Tarihi
});

module.exports = mongoDB.model("Authtask", task);