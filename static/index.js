$document = $(document);

$document.ready(function() {
    $parallax = $("#racecar-parallax");
    $overview = $("#overview");
    var height = window.innerHeight;
    $overview.css("height", height);
    $(window).resize(function() {
        $parallax.css("margin-top", height-65);
        if (window.innerWidth <= 375)
            $parallax.css("height", height*.2);
        else if (window.innerWidth <= 640)
            $parallax.css("height", height*.3);
        else if (window.innerWidth <= 992)
            $parallax.css("height", height*.4);
        else
            $parallax.css("height", height*.6);
    });
    $(window).resize();

    Materialize.showStaggeredList("#slide-out");

    Materialize.fadeInImage("#overview");
    $(".button-collapse").sideNav({closeOnClick: false, menuWidth: 250});

    $(".parallax").parallax();

    $(".scrollspy").scrollSpy({scrollOffset: 0});
    var sr = ScrollReveal();
    sr.reveal(".report-img, .report-img-float, video", {duration: 1000});
});
