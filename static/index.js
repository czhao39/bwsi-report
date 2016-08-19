$document = $(document);

$document.ready(function() {
    console.log(window.innerHeight);
    $("#overview").css("height", window.innerHeight);
    $("#racecar-parallax").css("margin-top", window.innerHeight - 65);
    
    Materialize.showStaggeredList("#slide-out");

    Materialize.fadeInImage("#overview");
    $(".button-collapse").sideNav({closeOnClick: false, menuWidth: 250});

    $(".parallax").parallax();

    $(".scrollspy").scrollSpy({scrollOffset: 0});
    var sr = ScrollReveal();
    sr.reveal(".report-img, .report-img-float, video", {duration: 1000});
});
