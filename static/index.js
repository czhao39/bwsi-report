$document = $(document);

$document.ready(function() {

    $(".overview-content").velocity({top: 90, opacity: 1}, {duration: 1000}, {queue: false});
    
    $(".button-collapse").sideNav({closeOnClick: false, menuWidth: 250});
    
    $(".scrollspy").scrollSpy();
    var sr = ScrollReveal();
    sr.reveal(".section", {duration: 1000});
    sr.reveal("#skills tr", {duration: 1000});
    sr.reveal(".card", {duration: 1000});
});
