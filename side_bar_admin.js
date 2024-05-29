module.exports = function(app, config) {
    let r = `
        <ul class="sidebar-links" id="simple-bar">
        <li class="back-btn"><a href="/"><h1 class="logo"><%= config.site.title %></h1></a>
        <div class="mobile-back text-end"><span>Geri</span><i class="fa fa-angle-right ps-2" aria-hidden="true">        </i></div>
        </li>

        <li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav" href="/dashboard">
            <i data-feather="compass"></i><span>Müşteri Paneli</span>
        </a>
        </li>
        <!-- Para Çek -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/withdraw_money_admin">
            <i class="icofont-money"></i><span> Para Çekim Talepleri</span>
            </a>
        </li>
        <!-- İstatistikler -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/statistics_admin">
            <i class="fa-solid fa-chart-line"></i>
            <span> İstatistik</span>
            </a>
        </li>
        <!-- Destek -->
        <li class="sidebar-list">
            <a class="sidebar-link sidebar-title link-nav" href="/support_admin">
            <i class="fa-solid fa-messages-question"></i>
            <span> Destek</span>
            </a>
        </li>
    </ul>
    `
    return r
};