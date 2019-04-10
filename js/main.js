


$(document).ready(function() {
    $('.hamburger').click( function () {
        $('.hamburger__label').toggleClass('hamburger__label_active');
        $('.header__nav').toggleClass('header__nav_open');
    });
    $(window).resize(checkSize);

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        //autoplay: true,
        nav: true,
        autoHeight: false,
    });
});

function checkSize(){
    if ($(".header__nav-list").css("display") === "flex" ){
        $('.header__nav').removeClass('header__nav_open')
        $('.hamburger__label').removeClass('hamburger__label_active');
    }
}