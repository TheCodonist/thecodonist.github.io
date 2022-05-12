jQuery(document).ready(function($){

    // jQuery('.f-p-carousel').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: true,
    //     dots: false,
    //     navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });
    $('.owl-carousel-hero').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $('.owl-brand').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        items:4,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.cars__colors').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });






    $(function() {
        $('.nav-tabs .nav-link').click(function() {
            $('#carouselSection').hide();
            $(".tab-content").removeClass("tabs__show");
        });                        
    });
    
  
});// End of document ready function
