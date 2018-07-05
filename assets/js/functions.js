var url = document.URL, 
    getProdCat = (url.indexOf("cat=") > -1) ? url.split("cat=").pop() : null,
    catID,
    title,
    description,
    submit = false,
    prodCategories = [
        {
            ID: 0,
            Title: 'Persianas',
            Slug: 'persianas',
            Description: ''
        },
        {
            ID: 1,
            Title: 'Cortinas',
            Slug: 'cortinas',
            Description: ''
        },
        {
            ID: 2,
            Title: 'Toldos',
            Slug: 'toldos',
            Description: ''
        }                             
    ],
    owl = $('.owl-carousel.owl-forms'),
    owlSlide = $('.owl-carousel.owl-slideshow'),
    owlParagraphs = $('.owl-carousel.owl-paragraphs'),
    owlSlideOptions = {
        loop:false,
        center:false,
        autoWidth:false,
        autoplay:true,
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
function openSimblings(e){
    var el = $(e),
        index = el.parent().index();

        if($(window).width() > 736){
            closeModal();
            if(index > 0){
                el.closest(".product").next().find(".modal").addClass("-toggle");
            } else {
                el.closest(".product").prev().find(".modal").addClass("-toggle");
            }
        } else {
            var gal = el.closest(".products-navigation").closest("div").children("div").find(".gallery"),
                index = el.parent().index(),
                imgs = gal.children("div"),
                max = gal.children("div").length - 1,
                counter = parseInt(gal.attr("data-counter"));

            if(index == 1){
                if(counter < max){
                    gal.attr("data-counter", (parseInt(gal.attr("data-counter")) + 1));
                }
            } else {
                if(counter > 0){
                   gal.attr("data-counter", (parseInt(gal.attr("data-counter")) - 1));
                }
            }

            imgs.not(imgs.eq(counter)).hide();
            imgs.eq(counter).show();             
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

    $( ".categories" ).children().each(function() {
        ($(this).find("a").text().toLowerCase() == title.toLowerCase()) ? $(this).addClass("-active") : ''
    });    
}   
function sendWPP(e){   
    var e = $(e);
    var telefone = "5521997983711";
    var saudacao = "Olá! Meu nome é";
    var name = document.getElementById("user_nome").value;
    var email = document.getElementById("user_email").value;
    var msg = document.getElementById("user_msg").value;		
    var saudacaoencode = encodeURI(saudacao);		
    var url_base = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + saudacaoencode + "%20" + encodeURI(name) + "%20e%20" + encodeURI(msg);
    window.open(url_base)
}   
$(document).ready(function () {
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
        onSelect: function(dateText) {
            $("#user_visit_datepicker").val(dateText);
        },        
        dateFormat: 'dd/mm/yy',
        yearSuffix: '',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        dayNamesMin: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
    $("form").submit(function(e) {
        if(!submit)
            e.preventDefault();           
        submit = true;
        $("body").find(".modal").toggleClass("-toggle");
        setTimeout(function(){
            closeModal();
            $("form").submit();          
        }, 1000);           
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
    $(document).mouseup(function (e){
        var container = $(".-toggle");
        if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
        {
            $(".-toggle").removeClass("-toggle")
        }
    });     
    if($("body").is(".pg-products")){
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
                        Description = val.Description,
                        Text = val.Text.substr(Description.length),
                        Title = val.Title;

                    product += '<li class="product catId-'+val.CatID+' '+((val.CatID == catID) ? '-shown' : '-hidden')+'">';
                        product += '<div onclick="showDetails(this)">';
                            product += '<div class="thumbnail" style="background-image:url(assets/imgs/products/'+Category+'/'+Title.toUpperCase().split(' ').join('-')+'/600x700/'+val.FeaturedImage+')"></div>';
                                product += '<h3 class="title">'+Title+'</h3>';
                                product += '<p>'+Description+'</p>';
                                product += '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
                            product += '</div>';
                            product += '<div class="modal -product">';
                                product += '<button onclick="closeModal()" type="button" class="close tcon tcon-transform tcon-menu--xcross" aria-label="toggle menu">';
                                    product += '<span class="tcon-menu__lines" aria-hidden="true"></span>';
                                    product += '<span class="tcon-visuallyhidden">toggle menu</span>';
                                product += '</button>';          
                                product += '<div class="modal-content">';
                                    product += '<ul class="products-navigation">';
                                    product += '<li><button onclick="openSimblings(this)"><</button></li><li><button onclick="openSimblings(this)">></button></li>';
                                    product += '</ul>';
                                    product += '<p>';
                                        product += '<small>Já pensou o seu espaço desse jeito?</small>';
                                        product += '<a class="btn -default -check" tabindex="5" href="agende.html" title="Agendar visita grátis agora!"><i class="fas fa-check"></i><span>Agendar visita grátis agora!</span></a>';
                                    product += '</p>';
                                    product += '<div class="content product-info">';
                                        product += '<div data-counter="0" class="gallery">';
                                            product += '<ul class="gallery-thumbnails">';
                                                $.each(val.Gallery, function(key, val){
                                                    product += '<li><div onclick="chooseImage(this)" style="background-image:url(assets/imgs/products/'+ Category +'/'+ Title.toUpperCase().split(' ').join('-') +'/600x700/'+ val.Image +')"></div></li>';  
                                                });                                        
                                            product += '</ul>';
                                        $.each(val.Gallery, function(key, val){
                                            product += '<div style="background-image:url(assets/imgs/products/'+ Category +'/'+ Title.toUpperCase().split(' ').join('-') +'/600x700/'+ val.Image +')"></div>';  
                                        });
                                        product += '</div>';
                                        product += '<div>';
                                            product += '<h3 class="title">'+val.Title+'</h3>';
                                            product += '<p>'+Description+'</p>';
                                            product += '<p>'+Text+'</p>';   
                                        product += '</div>';
                                    product += '</div>';
                            product += '</div>';             
                        product += '</li>';
                });
            });
            document.querySelector(".products-list").innerHTML += product;
        });  
        $( "body" ).swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                $( ".product" ).each(function() {
                    var el = $(this).children(".modal");
                    if(el.is(".-toggle")){
                        var gal = el.find(".gallery"),
                            imgs = gal.children("div"),
                            max = gal.children("div").length - 1,
                            counter = parseInt(gal.attr("data-counter"));

                            if(direction == 'left'){
                                if(counter < max){
                                   gal.attr("data-counter", (parseInt(gal.attr("data-counter")) + 1))
                                }
                            } else {
                                if(counter > 0){
                                   gal.attr("data-counter", (parseInt(gal.attr("data-counter")) - 1))
                                }
                            }

                            imgs.not(imgs.eq(counter)).hide();
                            imgs.eq(counter).show();                        
                    }
                });                 
            }
        });                         
    }   
});
      
      