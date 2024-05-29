module.exports = function(app, config) {
    let r = `
        <ul class="sidebar-links" id="simple-bar">
        <li class="back-btn"><a href="/" title="Ana sayfa"><h1 class="logo"><%= config.site.title %></h1></a>
        <div class="mobile-back text-end"><span>Geri</span><i class="fa fa-angle-right ps-2" aria-hidden="true">        </i></div>
        </li>

        <li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav" href="/dashboard" title="Dashboard">
            <i data-feather="compass"></i><span>Dashboard</span>
        </a>
        </li>
        <!-- İstatistikler -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/statistics" title="İstatistikler">
            <i class="fa-solid fa-chart-line"></i>
            <span> İstatistik</span>
            </a>
        </li>
        <!-- Para Çek -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/withdraw_money" title="Para Çek">
            <i class="icofont-money"></i><span> Para Çek</span>
            </a>
        </li>
        <!-- Linkler -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/my_links" title="Linkler">
            <i class="icofont-link-alt"></i><span> Linklerim</span>
            </a>
        </li>
        <!-- Hızlı Kısalt -->
        <li class="sidebar-list"><a class="sidebar-link sidebar-title" href="#">
            <i class="icofont-plus-circle"></i><span> Link Kısalt</span></a>
            <ul class="sidebar-submenu">
                <li><a href="/new_link_normal" title="Hızlı link kısaltma"> Hızlı Kısalt</a></li>
                <li><a href="/new_link_special" title="Özel link kısaltma"> Özel Link Kısalt</a></li>
                <li><a href="/new_link_pass" title="Şifreli link kısaltma"> Şifreli Link Kısalt</a></li>
                <li><a href="/new_link_timed" title="Süreli link kısaltma"> Süreli Link Kısalt</a></li>
                <li><a href="/new_link_hit_limit" title="Hit sınırlı link kısaltma."> Hit Sınırlı Link Kısalt</a></li>
                <li><a href="/new_link_task" title="Görevli Link Kısaltma"> Görevli Link Kısalt</a></li>
                <li><a href="#soon" title="Videolu reklam modeli. Yapım Aşamasında."> Videolu R. M.(Yakında)</a></li>
                <!-- <li><a href="/new_link_video"> Videolu Reklam Modeli</a></li> -->
            </ul>
        </li>
        <!-- Api -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/tool_api" title="Api">
            <i class="icofont icofont-ui-social-link"></i>
            <span> Geliştirici Api</span>
            </a>
        </li>
        <!-- Şifre Değiştir -->
        <li class="sidebar-list"><a class="sidebar-link sidebar-title" href="#">
            <i class="fa-solid fa-key-skeleton"></i><span> Bilgileri Değiştir</span></a>
            <ul class="sidebar-submenu">
                <li><a href="/change_pass" title="Şifre Değiştir"> Şifre Değiştir</a></li>
                <li><a href="/change_mail" title="E-posta Değiştir"> Mail Değiştir</a></li>
            </ul>
        </li>
        <!-- Destek -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/support" title="Destek">
            <i class="fa-solid fa-messages-question"></i>
            <span> Destek</span>
            </a>
        </li>
        <!-- Referans -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/referrals" title="Referanslar">
            <i class="fa-duotone fa-users"></i>
            <span> Referans</span>
            </a>
        </li>
        <!-- SSS -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/faqs" title="SSS">
            <i class="fa-solid fa-circle-question"></i>
            <span> S.S.S</span>
            </a>
        </li>
        <!-- Kullanım Şartları -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/terms" title="Kullanım Şartları">
            <i class="fa-solid fa-gavel"></i>
            <span> Kullanım Şartları</span>
            </a>
        </li>
        <!-- Linkler -->

    </ul>
    `
    return r
};