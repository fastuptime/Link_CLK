const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let noAuthLink = new mongoose.Schema({
    url: String, //Yönlendirilecek URL
    hash: String, //Kısa URL
    ads: { type: Boolean, default: true }, //Reklam gösterilsin mi?
    clicks: Number, //Tıklanma sayısı
    createdIp: String, //Oluşturulma IP
    createdAt: String, //Oluşturulma Tarihi
});

module.exports = mongoDB.model("noAuthLinks", noAuthLink);