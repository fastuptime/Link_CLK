const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let support = new mongoose.Schema({
    userID: String, //Kullanıcı id
    title: String, //Başlık
    messages: [{
        message: String, //Mesaj
        date: String, //Tarih
        operator: Boolean //Operatör mü ya da kullanıcı mı
    }],
    status: String, //Durum ("Açık", "Kapalı", "Yanıtlandı", "Müşteri Yanıtı",
    date: String, //Date
});

module.exports = mongoDB.model("supports", support);