jQuery(document).ready( function ($) {
	let i=1;
	let p=1;
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
    var a;

	function start(){
		a = setInterval(function() {
		
			if( i>6){i=1;}
			$('.itemDot').removeClass('active');
			$('[data-tab="'+i+'"]').addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+i).addClass('active');
	
			$('.dotCircle').css({
				"transform":"rotate("+((p+.7)*60)+"deg)",
				"transition":"1s"
			});
			p++;
			i++;
			
		}, 1000);

	}

	$( ".dotCircle" ).mouseenter(function() {
		clearInterval(a);
		console.log('enter')
});

$( ".dotCircle" ).mouseleave(function() {
	start();
	console.log('leave');
});

start();
  });