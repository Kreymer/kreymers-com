$( document ).ready(function() {

    //$(".scene-section").animate({opacity: 1}, 2000);
    $(".navigation").animate({opacity: 1}, 1000);
    $(".step0").animate({opacity: 1}, 1500);
    $("#know_more").click(function(){
        $('html, body').animate({scrollTop: '+=450px'}, 400);
    })
    $( window ).scroll(function() {
        var scrollTop = $(window).scrollTop() ;

        if (scrollTop > 300) {
            $('.step1').animate({opacity: 1}, 1000);
            $('.step1').addClass("animate-zoom");
        }
        if (scrollTop > 1300) {
            $('.step2').animate({opacity: 1}, 1000);
            $('.step2').addClass("animate-zoom");
        }
        if (scrollTop > 2200) {
            $('.step3').animate({opacity: 1}, 1000);
            $('.step3').addClass("animate-zoom");
        }
        if (scrollTop > 3100) {
            $('.step4').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 4000) {
            $('.step5').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 4900) {
            $('.step6').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 5800) {
            $('.step7').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 6700) {
            $('.step8').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 7600) {
            $('.step9').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 8500) {
            $('.step10').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 9500) {
            $('.step11').animate({opacity: 1}, 1000);
        }
        if (scrollTop > 10300) {
            $('.step12').animate({opacity: 1}, 1000);
        }
      });

});


