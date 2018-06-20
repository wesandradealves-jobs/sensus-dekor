var url = document.URL, 
    getProdCat = (url.indexOf("cat=") > -1) ? url.split("cat=").pop() : null,
    catID,
    title,
    description,
    prodCategories = [
        {
            ID: 0,
            Title: 'Persianas',
            Slug: 'persianas',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae.'
        },
        {
            ID: 1,
            Title: 'Cortinas',
            Slug: 'cortinas',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            ID: 2,
            Title: 'Toldos',
            Slug: 'toldos',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae. Adipisicing elit. Earum, beatae.'
        }                             
    ];    

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
    el.next().addClass("-toggle");
}
function fullCarousel(){
    if($(window).width() <= 736){
        $(".pg-booking .owl-dots").css('width', $("#booking").outerWidth() + 15);
    }    
}
function chooseImage(e){
    var el = $(e);
    el.closest(".gallery").children("div").not(el.closest(".gallery").children("div").eq(el.parent().index())).hide();
    el.closest(".gallery").children("div").eq(el.parent().index()).show();

    el.closest("ul").prev().attr("data-counter", el.parent().index());
}
function navigateImages(e){
    var el = $(e),
        index = el.parent().index(),
        counter = parseInt(el.closest("ul").attr("data-counter"));
        max = el.closest("ul").next().children().length - 1;    
        
        if(index > 0){
            if(counter < max){
                el.closest("ul").attr("data-counter", (parseInt(el.closest("ul").attr("data-counter")) + 1))
            }
        } else {
            if(counter > 0){
                el.closest("ul").attr("data-counter", (parseInt(el.closest("ul").attr("data-counter")) - 1))
            }
        }

        el.closest(".gallery").children("div").not(el.closest(".gallery").children("div").eq(counter)).hide();
        el.closest(".gallery").children("div").eq(counter).show();

        /* inserir data-counter="0" no elemento pai do botão que usa o navigateImages */
}
function openSimblings(e){
    var el = $(e),
        index = el.parent().index();

        if(index > 0){
            el.closest(".product").next().find(".modal").addClass("-toggle");
        } else {
            el.closest(".product").prev().find(".modal").addClass("-toggle");
        }
}
function defineAttrs(){
    for (var i = 0, l = prodCategories.length; i < l; i++) {
        (getProdCat == prodCategories[i].Slug) ? title = prodCategories[i].Title : null;
        (getProdCat == prodCategories[i].Slug) ? description = prodCategories[i].Description : null;
        (getProdCat == prodCategories[i].Slug) ? catID = prodCategories[i].ID : null;
    }      
    document.getElementById("category.Title").innerHTML = title; 
    document.getElementById("category.Description").innerHTML = description; 
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
    $( ".products" ).hover(function() {
        $(this).find(".degrade-bg").fadeOut()
    }, function() {
        $(this).find(".degrade-bg").fadeIn()
    });    
    $( ".navigation > ul" ).children().each(function() {
        var e = $(this);
        e.hover(function() {
            if(e.children("ul").length){
                e.click(function() {
                    e.toggleClass("-toggle")
                });  
            }
        });
    });    
    $(document).mouseup(function (e){
        var container = $(".-toggle");
        if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
        {
            $(".-toggle").removeClass("-toggle")
        }
    });     
    if($("body").is(".pg-products")){
        var ps = new PerfectScrollbar('.products-list-holder');
        defineAttrs(); 
        if(!getProdCat){
            window.location.href = './';
            return false;
        }
        $.getJSON("products.json").done(function( data ) {
            var product = '';
            $.each(data.categories, function(key, val){
                $.each(val.Products, function(key, val){
                    var Category = val.Category.toUpperCase(),
                        Title = val.Title;
                    product += '<li class="product catId-'+val.CatID+' '+((val.CatID == catID) ? '-shown' : '-hidden')+'">';
                        product += '<div onclick="showDetails(this)">';
                            product += '<div class="thumbnail" style="background-image:url(assets/imgs/products/'+Category+'/'+Title.toUpperCase().split(' ').join('%20')+'/600X700/'+val.FeaturedImage+')"></div>';
                                product += '<h3 class="title">'+Title+'</h3>';
                                product += '<p>'+val.Description+'</p>';
                                product += '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
                            product += '</div>';
                            product += '<div class="modal -product">';
                                product += '<button onclick="closeModal()" type="button" class="close tcon tcon-transform tcon-menu--xcross" aria-label="toggle menu">';
                                    product += '<span class="tcon-menu__lines" aria-hidden="true"></span>';
                                    product += '<span class="tcon-visuallyhidden">toggle menu</span>';
                                product += '</button>';          
                                product += '<div class="modal-content">';
                                    product += '<ul class="products-navigation">';
                                    product += '<li><button onclick="closeModal(), openSimblings(this)"><</button></li><li><button onclick="closeModal(), openSimblings(this)">></button></li>';
                                    product += '</ul>';
                                    product += '<p>';
                                        product += '<small>Já pensou o seu espaço desse jeito?</small>';
                                        product += '<a class="btn -default -check" tabindex="5" href="agende.html" title="Agendar visita grátis agora!"><i class="fas fa-check"></i><span>Agendar visita grátis agora!</span></a>';
                                    product += '</p>';
                                    product += '<div class="content product-info">';
                                        product += '<div class="gallery">';
                                            product += '<ul class="gallery-thumbnails">';
                                                $.each(val.Gallery, function(key, val){
                                                    product += '<li><div onclick="chooseImage(this)" style="background-image:url(assets/imgs/products/'+ Category +'/'+ Title.toUpperCase().split(' ').join('%20') +'/600X700/'+ val.Image +')"></div></li>';  
                                                });                                        
                                            product += '</ul>';
                                        $.each(val.Gallery, function(key, val){
                                            product += '<div style="background-image:url(assets/imgs/products/'+ Category +'/'+ Title.toUpperCase().split(' ').join('%20') +'/600X700/'+ val.Image +')"></div>';  
                                        });
                                        product += '</div>';
                                        product += '<div>';
                                            product += '<h3 class="title">'+val.Title+'</h3>';
                                            product += '<p>'+val.Description+'</p>';
                                            product += '<p>'+val.Text+'</p>';   
                                        product += '</div>';
                                    product += '</div>';
                            product += '</div>';             
                        product += '</li>';
                });
            });
            document.querySelector(".products-list").innerHTML += product;
        });                
    }  
});
      
      