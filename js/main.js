$(document).ready(function(){
    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });
    $('.small-image img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);
    });
    $('.gallery .btn').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);
        }
        $(this).addClass('button-active').siblings().removeClass('button-active');
    });
});