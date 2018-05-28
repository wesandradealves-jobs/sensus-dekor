$(document).ready(function () {
    $(window).scroll(function(event){
        var st = $(this).scrollTop();

        $( '.products-list' ).children().each(function() {
            if($(this).offset().top >= st){
                $(this).addClass("-show")              
            } else {
                $(this).removeClass("-show")
            }
        });

        if(st + 200 >= $( '.products-list' ).children().last().offset().top){
            $( '.products-list' ).addClass("-bottom")
        } else {
            $( '.products-list' ).removeClass("-bottom")
        }
    }); 
});