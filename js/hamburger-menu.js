


$(document).ready(function() {
    $('.hamburger').click( function () {
        $('.hamburger__label').toggleClass('hamburger__label_active');
        $('.header__nav').toggleClass('header__nav_open')
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        //autoplay: true,
        nav: true,
        autoHeight: false,
    });
});