const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let temporary_dc = new mongoose.Schema({
    id: String, //id
    access: String, //access
    date: String, //Date
});

module.exports = mongoDB.model("temporary_dc", temporary_dc);