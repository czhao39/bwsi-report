$document = $(document);

$document.ready(function() {
    Materialize.showStaggeredList("#slide-out");

    Materialize.fadeInImage("#overview");
    $(".button-collapse").sideNav({closeOnClick: false, menuWidth: 250});

    $(".parallax").parallax();

    $(".scrollspy").scrollSpy({scrollOffset: 0});
    var sr = ScrollReveal();
    sr.reveal(".report-img, .report-img-float", {duration: 1000});
});
