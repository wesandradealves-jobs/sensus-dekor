function mobileNavigation(){
    $(".header .tcon").toggleClass("tcon-transform")
    if($(".header .tcon").is(".tcon-transform")){
        $(".navigation.-mobile").addClass("-active")
    } else {
        $(".navigation.-mobile").removeClass("-active")
    }
} 
function closeMenu(){
    $(".header .tcon").toggleClass("tcon-transform")
    if($(".header .tcon").is(".tcon-transform")){
        $(".navigation.-mobile").addClass("-active")
    } else {
        $(".navigation.-mobile").removeClass("-active")
    }    
}
function closeModal(){
    $(".modal:not(.navigation):not(.-product)").fadeOut(),
    $(".-toggle").removeClass("-toggle");
}
function showDetails(e){
    var el = $(e);
    $(e).parent().next().addClass("-toggle");
}
function fullCarousel(){
    if($(window).width() <= 736){
        $(".pg-booking .owl-dots").css('width', $("#booking").outerWidth() + 15);
    }    
}
$(document).ready(function () {
    var owl = $('.owl-carousel.owl-forms'),
        owlSlide = $('.owl-carousel.owl-slideshow'),
        owlParagraphs = $('.owl-carousel.owl-paragraphs'),
        owlSlideOptions = {
            loop:false,
            center:false,
            autoWidth:false,
            margin: 0,
            nav:true,
            dots:true,
            items: 1,
            URLhashListener:true,
            startPosition: '#two',
            navText:["<i class='owl-prev-arrow fas fa-angle-left'></i>","<i class='owl-next-arrow fas fa-angle-right'></i>"]
        },
        owlParagraphsOptions = {
            loop: false,
            items: 1,
            dots: true,
            nav: false,
            margin: 30         
        },        
        owlOptions = {
            loop: false,
            items: 1,
            dots: true,
            nav: false,
            margin: 15            
        };

    owlSlide.owlCarousel(owlSlideOptions);

    owlSlide.on('changed.owl.carousel', function(event) {
        location.hash = 'slide' + event.property.value;
    });        

    if ( $(window).width() <= 737 ) {
        var owlActive = owl.owlCarousel(owlOptions),
            owlParagraphsActive = owlParagraphs.owlCarousel(owlParagraphsOptions);
    } else {
        owl.addClass('off');
        owlParagraphs.addClass('off');
    }

    $( ".pg-products .owl-carousel.owl-slideshow .owl-nav,.pg-products .owl-carousel.owl-slideshow .owl-dots" ).each(function() {
        $(this).wrapAll( "<div class='owl-controls' />");
    });
    $( ".pg-products .owl-carousel.owl-slideshow .owl-nav .owl-prev, .pg-products .owl-carousel.owl-slideshow .owl-nav .owl-next" ).each(function() {
        $(this).unwrap();
    });
    $( "body:not(.pg-products):not(.pg-booking):not(.pg-about) .owl-carousel.owl-slideshow .owl-nav,body:not(.pg-products):not(.pg-booking):not(.pg-about) .owl-carousel.owl-slideshow .owl-dots" ).wrapAll( "<div class='owl-controls' />");
    $( "body:not(.pg-products):not(.pg-booking):not(.pg-about) .owl-carousel.owl-slideshow .owl-nav .owl-prev,body:not(.pg-products):not(.pg-booking):not(.pg-about)  .owl-carousel.owl-slideshow .owl-nav .owl-next" ).unwrap();    
    $( ".modal.-product .owl-carousel.owl-slideshow .owl-nav .owl-prev, .modal.-product .owl-carousel.owl-slideshow .owl-nav .owl-next, .modal.-product .owl-carousel.owl-slideshow .owl-dots" ).unwrap();
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
        if ( $(window).width() <= 737 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions),
                    owlParagraphsActive = owl.owlCarousel(owlParagraphsOptions);
                owl.removeClass('off');
                owlParagraphs.removeClass('off');
            }
            window.location.href = window.location.href;
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owlParagraphs.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                owlParagraphs.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }        
    });
    var ps = new PerfectScrollbar('.products-list-holder');
    $( ".products" ).hover(function() {
        $(this).find(".degrade-bg").fadeOut()
    }, function() {
        $(this).find(".degrade-bg").fadeIn()
    });    
});
      
      