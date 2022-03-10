/*
Template Main JavaScript File
This file is mainly used for initialization of plugins and adding event listeners
*/
$(document).ready(function(){
	// Initiate Custom Cursor
	const cursor = new CustomCursor({
		color: '#fff',
		blending: 'difference',
	});

	// Home Page Top Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: false,
		onTranslated: activeTitle,
	});

	// Home Page Testimonial Carousel Initialization
	$(".owl-carousel-testimonial").owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		margin: 30,
		dots: false,
		responsive : {
		    0 : {
		        items: 1,
		    },
		    480 : {
		        items: 4,
		    },
		    768 : {
		        items: 6,
		    }
		}
	});
	var owl = $('.owl-carousel-testimonial');
	owl.owlCarousel();
	// Go to the next item
	$('.gv').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.gg').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	})
	function activeTitle(e) {
		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
			index -= count;
			}
			if (index <= 0) {
			index += count;
			}
			$('.carousel-navigation').find('.line').removeClass('active');
			$('.carousel-navigation').children('div').eq(index-1).find('.line').addClass('active');
		}
	}

	// Initiate Aos
	AOS.init();
});