$( document ).ready(function() {
  
	$(".owl-carousel").owlCarousel({
		items: 1,
		margin: 0,
	    nav:false,
	    autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
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
	
	$('.sandwich').click(function(){
		if($(this).hasClass('close')){
			$(this).removeClass('close');
				$('.main-menu').hide().animate({
				    opacity: 0
					}, 200 );
		}
		else {
			$(this).addClass('close');

			$('.main-menu').show().animate({
			    opacity: 1
				}, 200);
		}	

	});
	$(document).scroll(function(){
		$('.sandwich').removeClass('close');
		$('.main-menu').hide();
	});

});