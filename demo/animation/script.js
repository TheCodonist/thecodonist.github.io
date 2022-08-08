jQuery(document).ready( function ($) {

	// For Home Page
	let i=1;
	var radius = 200;
	var fields = $('.itemDot');
	var container = $('.dotCircle');
	var width = container.width();
	radius = width/4;
	 
	var height = container.height();
	var angle = -360, step = (2*Math.PI) / fields.length;
	fields.each(function() {
		var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
	 	var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);

		$(this).css({
		    left: x + 'px',
		    top: y + 'px'
		 });
	 	angle -= step;
	});
    setInterval(function() {
		var dataTab= $('.itemDot.active');
		if(dataTab>6||i>6){
			dataTab=1;
			i=1;
		}
		$('.itemDot').removeClass('active');
		$('[data-tab="'+i+'"]').addClass('active');
		$('.CirItem').removeClass('active');
		$( '.CirItem'+i).addClass('active');
		i++;

		$('.dotCircle').css({
			"transform":"rotate("+((i+5.8)*60)+"deg)",
			"transition":"1s"
		});
		$('.itemDot').css({
			"transform":"rotate("-((i+5.8)*60)+"deg)",
			"transition":"1s"
		});
	}, 5000); 
  });