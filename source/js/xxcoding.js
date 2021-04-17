$(function () {
    let $nav = $('#nav-header');
    scroll_distance = $nav.attr('color-on-scroll') || 500;

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({
        constrainWidth: false,
        coverTrigger: false,
        hover: true
    });
    $('.collapsible').collapsible();
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 700,
        delay: 100
    });

    function scrollToPost() {
        if ($('.post').length != 0) {
            $('html, body').animate({
                scrollTop: $('.post').offset().top - $('#nav-header').height()
            }, 1000);
        }
    }

    $('.scroll-down').on('click', scrollToPost);

    $(".lazyload").lazyload();

    $(window).resize(function () {
        $('.carousel.carousel-slider').height($(window).height());
        $('main').css('min-height', window.innerHeight - $('#nav-header').height() - $('footer').height());
    });

    /* 监听滚动条位置 */
    // 当页面处于文章中部的时候刷新页面，因为此时无滚动，所以需要判断位置。
    // checkScrollForTransparentNavbar($(window).scrollTop());
    xxcodingKit.checkScrollForTransparentNavbar($(document).scrollTop());
    $(window).scroll(xxcodingKit.checkScrollForTransparentNavbar);

    /* 回到顶部 */
    $('#back-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
    });

    
});

let $backTop = $('.top-scroll');

xxcodingKit = {
    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() < scroll_distance) {
            $('#nav-header').addClass('nav-transparent');
            $('nav#nav-header ul a.nav-item').addClass('white-text');
            $('nav .brand-logo').addClass('white-text');
            $backTop.slideUp(300);
        } else {
            $('#nav-header').removeClass('nav-transparent');
            $('nav#nav-header ul a.nav-item').removeClass('white-text');
            $('nav .brand-logo').removeClass('white-text');
            $backTop.slideDown(300);
        }
    }, 17)
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  };
