function mobileNavigation(){
    $(".tcon").toggleClass("tcon-transform")
    if($(".tcon").is(".tcon-transform")){
        $(".navigation.-mobile").addClass("-active");
    } else {
        $(".navigation.-mobile").removeClass("-active");
    }
} 
function closeModal(){
    $(".modal").fadeOut()
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
    $( "[divided]" ).each(function() {
        var firstSlice = $(this).text().substring(0, $(this).html().length/2),
            exceededSlice = $(this).text().substring($(this).html().length/2);
        $(this).html('<span class="slice">'+firstSlice+'</span><span class="slice">'+exceededSlice+'</span>')
    });
    $(".phone").mask("(999) 9999-9999");
    $( ".datepicker" ).datepicker({
        prevText: "<",
        nextText: ">",
        shortYearCutoff: 50,
        changeYear: false,
        dayNamesMin: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
    });
});
      
      