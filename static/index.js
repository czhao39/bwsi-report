$document = $(document);

$document.ready(function() {

    $(".overview-content").velocity({top: 90, opacity: 1}, {duration: 1000}, {queue: false});
   
    Materialize.showStaggeredList("#slide-out");

    Materialize.fadeInImage("#overview");
    $(".button-collapse").sideNav({closeOnClick: false, menuWidth: 250});
    
    $(".parallax").parallax();
    $(".scrollspy").scrollSpy();
    var sr = ScrollReveal();
    sr.reveal(".report-img, .report-img-float", {duration: 1000});
});
