$( document ).ready(function() {

    $(".connect-mic").click(function() {
        $(".step1").fadeOut(function() {
            $(".step2").fadeIn();
        });
    });
    
    $(".connect-camera").click(function() {
        $(".step1").fadeOut(function() {
            $(".step2").fadeIn();
        });
    });

    var video = document.querySelector("#videoElement");
    var video2 = document.querySelector("#videoElement2");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        video2.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        });
    }

    $(".interview-start").click(function() {
        $(".step3").fadeOut(function() {
            $(".step4").fadeIn();
            $(".interview-dot").addClass("animation-blinker");
            $(".logo-label").text("Запись идет...")
        });
    });

    $(".interview-style").click(function() {
        $(".step2").fadeOut(function() {
            $(".step3").fadeIn()
        });
    });

    $('body').keyup(function(e){
        if(e.keyCode == 32){
            $(".interview-dot").removeClass("animation-blinker");
            $(".logo-label").text("В чем сила?")
            $(".step4").fadeOut(function() {
                $(".step5").fadeIn()
            });
        }
     });

});


