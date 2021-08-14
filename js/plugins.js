/*
 * Template Name      : HLine
 * Template Version   : V 1.0.0
 * Template Url       : .....................
 * Language           : HTML5 | CSS3 |JavaScript
 * Framework          : Bootstrap[CSS] | jQuery [JavaScript]
 * Preprocesseur      : SaSS [CSS]
 * Contact Me : Skaype   :- Boudraa.Hammani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com
*/
/*global $*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    var ColorLi = $(".color-option ul li"),
        scrollTop = $("#scroll-top");
    /*                       End Cashing Variables
    ========================================================================== */

    /*                       Start Option Box Color
    ========================================================================== */
    //--> Charge Color For The Option Box Color
    ColorLi
        .eq(0).css("backgroundColor", "#F44336").end()
        .eq(1).css("backgroundColor", "#673AB7").end()
        .eq(2).css("backgroundColor", "#FF9800").end()
        .eq(3).css("backgroundColor", "#03A9F4").end()
        .eq(4).css("backgroundColor", "#4CAF50");

    //--> Show Color Option Box When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").toggle('slow');
    });

    //--> Change The Main Color Variable When Click On Color
    ColorLi.click(function () {
        $("body").get(0).style.setProperty("--main-Color", $(this).css("backgroundColor"));
        $(".color-option").toggle('slow');
    });
    /*                       End Option Box Color
    ========================================================================== */

    /*                       Start Links Add Active Class
    ========================================================================== */
    $(".navbar-collapse ul li a").click(function () {
        $(this).parent().not(".navbar-collapse ul .dropdown").addClass("active").siblings().removeClass("active");
    });
    /*                       End Links Add Active Class
    ========================================================================== */

    /*                       Start Our Carousel
    ========================================================================== */
    $("#MySlider").carousel({ interval: 3000 });
    /*                       End Our Carousel
    ========================================================================== */

    /*                       Start Testmonials Carousel
    ========================================================================== */
    $("#carousel-testmonials").carousel({
        interval: 2000,
        pause: "none"
    });
    /*                       End Testmonials Carousel
    ========================================================================== */

    /*                       Start Scroll To Top
    ========================================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            scrollTop.show("slow", function () {
                scrollTop.animate({bottom: "20px"}, 100, function () {scrollTop.animate({bottom: "10px"}, 200); });
            });

        } else {
            scrollTop.hide("slow");
        }
    });
    //--> Click On The Button To Scroll Top
    scrollTop.click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    /*                       End Scroll To Top
    ========================================================================== */

    /*                       Start FitText
    ========================================================================== */
    $(".text-responsive").fitText(0.8, { minFontSize: '40px', maxFontSize: '200px' });
    /*                       End FitText
    ========================================================================== */

    /*                       Start Nice Scroll
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: 'var(--main-Color)',
        cursorborder: '1px solid var(--main-Color)'
    });
    /*                       End Nice Scroll
    ========================================================================== */
});

/* ------------------------------- Start Loading Screene ------------------------------- */
$(window).on("load", function () {
    "use strict";
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
});
/* ------------------------------- End Loading Screene ------------------------------- */
