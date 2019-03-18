


$(document).ready(function() {
    $('.hamburger').click( function () {
        $('.hamburger__label').toggleClass('hamburger__label_active');
        $('.header__nav').toggleClass('header__nav_open')
    });
});