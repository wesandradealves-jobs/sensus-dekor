function mobileNavigation(){
    $(".tcon").toggleClass("tcon-transform")
    if($(".tcon").is(".tcon-transform")){
        $(".navigation.-mobile").addClass("-active");
    } else {
        $(".navigation.-mobile").removeClass("-active");
    }
} 
$(document).ready(function () {
    $('.owl-carousel.owl-slideshow').owlCarousel({
        items: 1,
        nav: true,
        center: false,
        loop: false,
        dots: true,
        margin: 0,
        navText:["<i class='owl-prev-arrow fas fa-angle-left'></i>","<i class='owl-next-arrow fas fa-angle-right'></i>"]
    });
    $( ".owl-carousel.owl-slideshow .owl-nav,.owl-carousel.owl-slideshow .owl-dots" ).wrapAll( "<div class='owl-controls' />");
    $( ".owl-carousel.owl-slideshow .owl-nav .owl-prev, .owl-carousel.owl-slideshow .owl-nav .owl-next" ).unwrap();
});
      
      