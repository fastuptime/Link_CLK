const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let hit = new mongoose.Schema({
    dt: String, //Tıklanma tarihi
    ip: String, //Tıklanma IP
    ua: String, //Tıklanma User Agent
    os: String, //Tıklanma OS
    br: String, //Tıklanma Browser
    de: String, //Tıklanma Cihaz
    id: String, //Tıklanılan link ID
    uid: String, //Tıklanılan link User ID
});

module.exports = mongoDB.model("hits_v2", hit);