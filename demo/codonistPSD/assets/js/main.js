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
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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
    })

});// End of document ready function
