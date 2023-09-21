$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >10)/*150*/ {
            $(".navbar").css("background", "rgba(0,0,0, 0.6)");
            $(".nav-link").css("color", "white");
        } else {
            $(".navbar").css("background", "none");
            $(".nav-link").css("color", "white");
        }
    })
})