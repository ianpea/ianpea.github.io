const baseUrl = "https://ianpea.github.io";
$(window).on('load', function() {
    $("body").removeClass("preload ");

    $(".footer-btn").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).find(".footer-btn-ic").removeClass("spin");
    })

    $(".footer-btn").hover(function() {
        $(this).find(".footer-btn-ic").addClass("spin");
    })

    $(".resume-btn").hover(function() {
        $("#resume-btn-ic").removeClass("hidden")
    })

    $(".resume-btn").mouseleave(function() {
        $("#resume-btn-ic").addClass("hidden")
    })

    $(".location-btn").hover(function() {
        $("#location-btn-ic").removeClass("hidden")
    })

    $(".location-btn").mouseleave(function() {
        $("#location-btn-ic").addClass("hidden")
    })

    $("#portfolio-d3").hover(function() {
        $("#portfolio-d3-ic").removeClass("hidden")
    })

    $("#portfolio-d3").mouseleave(function() {
        $("#portfolio-d3-ic").addClass("hidden")
    })

    $("#portfolio-d3").click(function() {
        window.open(baseUrl + "/portfolio/d3/visualisation/index.html");
    })

    $(".location-btn").click(function() {
        window.open("https://www.google.com.my/maps/place/Bukit+Timah/@1.3283923,103.7732555,14z/data=!3m1!4b1!4m5!3m4!1s0x31da0fd41e996daf:0x3485ce3101def927!8m2!3d1.3294113!4d103.8020777");
    });

    $("#to-top-btn").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $(window).scroll(function() {
        var sticky = $('#header-row-sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.fadeIn(500);
        else sticky.fadeOut(500);
    });
});