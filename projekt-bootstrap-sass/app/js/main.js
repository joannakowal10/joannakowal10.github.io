'use strict'
$(function () {

    $("a[href*='#']:not([href='#'])").click(function (e) {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("#main-nav").addClass("scroll");

        } else {
            $("#main-nav").removeClass("scroll")
        }

    });

});
