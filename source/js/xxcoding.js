$(function () {
    $('.sidenav').sidenav();
    $('.pushpin').pushpin();
    $('.dropdown-trigger').dropdown({
        constrainWidth: false
    });
    
    AOS.init();

    $('.scroll-down').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(window).height() - 62
        }, 800);
    });

    $(".lazyload").lazyload();

    $(window).resize(function () {
        $('.carousel.carousel-slider').height($(window).height());
    });


    /* 监听滚动条位置 */
    let $nav = $('#nav-header');
    let $backTop = $('.top-scroll');
    // 当页面处于文章中部的时候刷新页面，因为此时无滚动，所以需要判断位置。
    showOrHideNavBg($(window).scrollTop());
    $(window).scroll(function () {
        /* 回到顶部按钮根据滚动条的位置的显示和隐藏.*/
        let scroll = $(window).scrollTop();
        showOrHideNavBg(scroll);
    });

    function showOrHideNavBg(position) {
        let showPosition = 100;
        if (position < showPosition) {
            $nav.addClass('nav-transparent');
            $('nav#nav-header ul a').addClass('white-text');
            $('nav .brand-logo').addClass('white-text')
            $backTop.slideUp(300);
        } else {
            $nav.removeClass('nav-transparent');
            $('nav#nav-header ul a').removeClass('white-text');
            $('nav .brand-logo').removeClass('white-text');
            $backTop.slideDown(300);
        }
    }
});
