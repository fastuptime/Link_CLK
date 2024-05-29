const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let temporary_key = new mongoose.Schema({
    hash: String, //Kısa URL
    hash_id: String, //Db id
    key: String, //Temporary Key
    date: String, //Date
});

//Oluşturulduktan 30 dakika sonra silinecek
module.exports = mongoDB.model("temporary_key", temporary_key);