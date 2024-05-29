const mongoose = require("mongoose");
var mongoDB = mongoose.createConnection("xxxxxxxxxxxxxxxxxxxxxxxx", {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true
});

let account = new mongoose.Schema({
    name: String, //Adı
    surname: String, //Soyadı
    email: String, //E-Posta
    email_verify: Boolean, //E-Posta Doğrulama Durumu (true = doğrulanmış) (false = doğrulanmamış) 
    email_verify_key: String, //E-Posta Doğrulama Anahtarı
    language: String, //Dil (en = English, tr = Türkçe)
    refferral: String, //Bizi nereden duydunuz?
    password: String, //Şifre
    phone: String, //Telefon
    country: String, //Ülke
    adress: String, //Adres
    ip: String, //IP
    created_at: String, //Oluşturulma Tarihi
    last_login: String, //Son Giriş Tarihi
    api_key: String, //API Anahtarı
    my_ref: String, //Benim Referans Kodum
    ref_earn: Number, //Referansdan Kazanç
    invite_ref: String, //Davet edem Referans Kodu
    balance: Number, //Bakiye (TL)
    pending_payment: Number, //Bekleyen Ödeme (TL)
    total_withdrawn: Number, //Toplam Çekilen (TL)
    refs: [{
        id: String, //Referans Kullanıcı ID
        name: String, //Referans Kullanıcı Adı
        mail: String, //Referans Kullanıcı E-Posta
        ip: String, //Referans Kullanıcı IP
        date: String, //Referans Tarihi
    }],
    ban: {
        status: Boolean, //Ban Durumu (true = banlanmış) (false = banlanmamış)
        reason: String, //Ban Sebebi
        date: String, //Ban Tarihi
    },
    options: {
        url_120_day: Boolean, //120 Gün sonra silinir (true = silinir) (false = silinmez) (default = false)
        api_url_40_day: Boolean, //40 Gün sonra silinir (true = silinir) (false = silinmez) (default = false)
        ads_type: String, //Reklam Tipi (0 = Reklamsız Yönlendir) (1 = Genel Reklam Basit (2 Sayfa)) (2 = Orta Reklam (3 Sayfa)) (3 = En Zor Reklam (5 Sayfa)) (4 = +18 Kolay) (5 = +18 Zor)
    },
    date_log: [{
        hit: Number, //Tıklanma tarihi
        date: String, //Tıklanma tarihi (yıl-ay-gün)
    }],
    notification: [{
        img: String, //Resim
        title: String, //Başlık
        content: String, //İçerik
        date: String, //Tarih
    }],
    ip_history: [{
        ip: String, //IP
        device: String, //Cihaz
        os: String, //OS
        scanner: String, //Tarayıcı
        user_agent: String, //Kullanıcı Agenti
        date: String, //Tarih ve Saat
    }]
});

module.exports = mongoDB.model("linkAccount_v2", account);