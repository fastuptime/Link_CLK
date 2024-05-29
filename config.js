module.exports = {
    site: {
        title: "LinkClk.net",
        url: "https://linkclk.net", // Sonuna "/" eklemeyin!!!!
        description: "LinkClk ile linklerinizi paylaşın ve para kazanın. Ücretsiz bir şekilde hesap oluşturun ve linklerinizi kısaltın! Türkiye'deki En Yüksek CPM Oranlarına Sahip Link Kısaltma Servisi! Türkiye'nin İlk Görevli Link Kısaltma Sistemi!",
        keywords: "linkclk, görevli link kısalt, earn money, short link, get paid, link kısaltma servisi, link kısalt, para kazanma, para kazan, bitlt, google link, link, kısa link, link kısalt para kazan, para, kısa link, link kısalt, link kısaltma servisi, kısalink, short url, url kısaltma, url shortener",
        icon: "https://i.hizliresim.com/nxfs7y4.png",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/fastuptime",
		g_tag: `<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2P001CB2G"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-G2P001CB2G');</script>`,
    },
    short: {
        main_page: "https://linkclk.net/sm/",
        go_page: "https://linkclk.net/go/",
    },
    fakes: {
        fake_link_length: 1243,
        fake_account_length: 837,
        fake_hit_length: 7553,
    },
    sm_ads: {
        time: 25, //saniye
    },
    time_go: {
        time_one: 15, //saniye
        time_two: 20, //saniye
        time_three: 30, //saniye
    },
    ads: {
        headers: `<meta name="propeller" content="9507a1db1daa6ad7be6850261161e898"><script>(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5342100,document.body||document.documentElement)</script>`,
        banner: {
            ads_336x280: "",
            ads_468x60: "",
            ads_728x90: "",
            ads_970x250: "",
            ads_970x90: "",
            ads_970x250_2: "",
        },
        exoclick: {
            start_tag: "",
            ads_1: "",
            ads_2: "",
            ads_3: "",
            ads_4: "",
            ads_5: "",
            ads_6: `<a href="https://fastuptime.com" target="_blank"><img src="https://i.hizliresim.com/jacf3q0.gif" width="970px" height="250px" style="border: 0px solid #fff;" alt="speedsmm.com"/></a>`,
            end_tag: "",
            yan: {
                ads_1: `<a href="https://speedsmm.com" target="_blank"><img src="https://i.hizliresim.com/k20cs49.gif" width="360px" height="720px" style="border: 0px solid #fff;" alt="speedsmm.com"/></a>`,
                ads_2: `<a href="https://speedsmm.com" target="_blank"><img src="https://i.hizliresim.com/6m1uzp1.gif" width="360px" height="720px" style="border: 0px solid #fff;" alt="speedsmm.com"/></a>`,
            },
            popunders: "",
            interstitial: ""
        }
    },
    mail_send: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            mail: "xxxxx@gmail.com",
            password: "xxxx",
        }
    },
    maintenance: {
        enabled: false,
        message: "Bakım modu açık. Lütfen daha sonra tekrar deneyiniz.",
    },
    rate_page: {
        two_page: "0.00052",
        orta_page: "0.00063",
        zor_page: "0.00071",
    },
    hcaptcha_secret: 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx',
    hcaptcha_key: 'xx-xx-xx-xxx-xx',
    main_page_hcaptcha: true,
    token: "xxxxx"
}