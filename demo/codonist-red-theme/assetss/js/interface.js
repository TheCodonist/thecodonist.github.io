( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/

	$(document).ready(function() {
		$(window).scroll(function() {
				  if ($(document).scrollTop() > 700) {
		  $(".image").addClass("show");
		} else {
		  $(".image").removeClass("show");
		}
	  });
	  $(window).scroll(function() {
		if ($(document).scrollTop() > 700) {
		  $(".container").addClass("running");
		} else {
		  $(".container").removeClass("running");
		}
	  });
		
	});


	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/

	
	var instance = new TypeIt('#codeit', {
		speed: 150,
		startDelay: 900,
		loop: true,
		// afterComplete: (instance) => {
		//     //-- Will fire after the entire instance has completed typing.
		//     //-- NOTE: If "loop" is enabled, this will never fire.

		//         $('.loader').fadeOut();

		// },
	})
	.type('<em class="c-braces" style="margin-right: 15px;">{{</em><em class="c-braces">}}</em>')
	.pause(500)
	.delete(2)
	.pause(300)
	.type('<em>CODE</em>')
	.pause(750)
	.delete(1)
	.pause(750)
	.type('<em>ONIST</em><em class="c-braces">}}</em>')
	.pause(1500)
	.go();

document.onreadystatechange = function () {
	var state = document.readyState 
	if (state == 'complete') {
		setTimeout(function () {
			$('.loader').fadeOut();
			instance.destroy();
		}, 3000);
	}
}



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll, .navbar-nav li a[href^="#"]').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbarAffixHeight + 1)
            }, 1000);
            return false;
        }
    });



    /*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: navbarAffixHeight
	  }
	});

	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	$('.navbar-collapse').collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar.addClass('affix');
	});

	$('.navbar-collapse').on('hidden.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
		}
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  navbarAffixHeight + 1
	});

	
	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	if(!mobileDevice){
		$(window).stellar({
		  	responsive: true,
		  	horizontalScrolling: false,
		  	hideDistantElements: false,
		  	horizontalOffset: 0,
		  	verticalOffset: 0
		});
	}


	/*-------------------------------------------------------------------------------
	  Popup Gallery
	-------------------------------------------------------------------------------*/



	$('.js-gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a:not(.link)',
		    type: 'image',
		    removalDelay: 300,
		    tLoading: 'Loading image #%curr%...',
		    gallery: {
		       enabled: true,
		       navigateByImgClick: true,
		       preload:[0,1]
		    },
		    image: {
		       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		       titleSrc: function(item) {
		          return item.el.attr('title') + '<small></small>';
		       }
		    }

		});
	});


	/*-------------------------------------------------------------------------------
	  Progress bar
	-------------------------------------------------------------------------------*/


	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}
			
		});
	}

	$(window).scroll(function() {
		progress_bars();
	});



	/*-------------------------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------------------*/



    $('.isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.isotope-item'
				}	
			});	
		});
    }); 



    /*-------------------------------------------------------------------------------
	  Isotope Filter
	-------------------------------------------------------------------------------*/



	$('.filter li a').on('click', function() {
		$('.filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Video pop-up
	-------------------------------------------------------------------------------*/



	$('.js-play').magnificPopup({
	    type: 'iframe',
	    removalDelay: 300
    });



	/*-------------------------------------------------------------------------------
	  Reviews carousel
	-------------------------------------------------------------------------------*/



	$(".review-carousel").owlCarousel({
		singleItem:true,
	 	autoHeight : true
	});



	/*-------------------------------------------------------------------------------
	  Reviews carousel
	-------------------------------------------------------------------------------*/



	$(".partners-carousel").owlCarousel({
		itemsMobile:[479,1],
		itemsTablet:[768,2],
		itemsDesktopSmall:[979,3],
		items:4,
	 	autoHeight : true,
	 	pagination:false
	});


	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			                $('.modal').modal('hide');
		                	$('#success').modal('show');
		                },

		                error: function(){
			            	$('.modal').modal('hide');
			                $('#error').modal('show');
			            }
			        });
			    }
			});
		});
	}
})(jQuery);

