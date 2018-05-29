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
function showDetails(e){
    var el = $(e);
    $(e).parent().next().fadeIn()
}
function fullCarousel(){
    if($(window).width() <= 736){
        $(".pg-products .owl-carousel").css('max-width', '100%');
    }    
}
$(document).ready(function () {
    $(".pg-products .owl-carousel").css('max-width', '422px');
    $('.owl-carousel.owl-slideshow').owlCarousel({
        loop: !1,
        margin: 0,
        items: 1,
        itemsDesktop: !1,
        itemsDesktopSmall: !1,
        itemsTablet: !1,
        itemsMobile: !1,
        nav: !0,
        dots: !0,
        lazyLoad: !0,
        navText:["<i class='owl-prev-arrow fas fa-angle-left'></i>","<i class='owl-next-arrow fas fa-angle-right'></i>"]
    });
    $( ".owl-carousel.owl-slideshow .owl-nav,.owl-carousel.owl-slideshow .owl-dots" ).wrapAll( "<div class='owl-controls' />");
    $( ".owl-carousel.owl-slideshow .owl-nav .owl-prev, .owl-carousel.owl-slideshow .owl-nav .owl-next" ).unwrap();
    $( ".modal.-product .owl-carousel.owl-slideshow .owl-nav .owl-prev, .modal.-product .owl-carousel.owl-slideshow .owl-nav .owl-next, .modal.-product .owl-carousel.owl-slideshow .owl-dots" ).unwrap();
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
    fullCarousel();
    $(window).on("resize", function () {
        fullCarousel();
    });
});
      
      