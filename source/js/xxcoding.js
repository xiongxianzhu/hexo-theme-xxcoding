$(function () {
    $('.sidenav').sidenav();
    $('.pushpin').pushpin();
    $('.dropdown-trigger').dropdown({
        constrainWidth: false,
        coverTrigger: false,
        hover: true
    });
    
    AOS.init();

    function scrollToPost() {
        if ($('.post').length != 0) {
            $('html, body').animate({
                scrollTop: $('.post').offset().top - $('#nav-header').height()
            }, 800);
        }
    }

    $('.scroll-down').on('click', scrollToPost);

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
            $('nav#nav-header ul a.nav-item').addClass('white-text');
            $('nav .brand-logo').addClass('white-text')
            // $('.dropdown-content li>a, .dropdown-content li>span').addClass('pink-text text-darken-4')
            $backTop.slideUp(300);
        } else {
            $nav.removeClass('nav-transparent');
            $('nav#nav-header ul a.nav-item').removeClass('white-text');
            $('nav .brand-logo').removeClass('white-text');
            // $('.dropdown-content li>a, .dropdown-content li>span').removeClass('pink-text text-darken-4')
            $backTop.slideDown(300);
        }
    }
});
