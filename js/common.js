$(function(){
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'fx-menu-slide', "fx-listitems-slide", "pagedim-black", "position-right"],
		navbar: {
			title: '<img src="img/logo.png" alt="Lekas">'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	$('.services-items').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		navText: ['<span><img src="img/arrow-prev.svg"></span>', '<span><img src="img/arrow-next.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			660: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

	$('.portfolio-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<span><img src="img/arrow-prev.svg"></span>', '<span><img src="img/arrow-next.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});
	
	$('.team-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		navText: ['<span><img src="img/arrow-prev.svg"></span>', '<span><img src="img/arrow-next.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
	
	$('.feedback-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: true,
		nav: true,
		navText: ['<span><img src="img/arrow-prev.svg"></span>', '<span><img src="img/arrow-next.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});
	
	$(".popup").magnificPopup();
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	
    // $('body').fadeOut();
});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});