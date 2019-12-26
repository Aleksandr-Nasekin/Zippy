$(document).ready(function(){
// ================ Sliders ======================

	$('.header__slider').slick({
		speed: 800,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: true,
		arrows: false
	});
	$('.video__slider').slick({
		slidesToShow: 1,
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		dots: false,
		arrows: false,
		infinite: true,
		variableWidth: true,
		centerMode: true,
		cssEase: 'linear'
	});
	$('.life__photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.life__preview'
		});
	$('.life__preview').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.life__photo',
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 565,
				settings: {
					slidesToShow: 4
				},
				breakpoint: 370,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$("#navToggle").on("click", function(event) {
		event.preventDefault();
		$("nav").toggleClass("show");
		$(this).toggleClass("active");
	});

// ====== Smooth scroll===============
	$(".menu_link").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).attr("href");
		let elementOffset = $(elementId).offset().top;

		$("nav a").removeClass("active");
		$(this).addClass("active");

		$("nav").toggleClass("show");
		$("#navToggle").toggleClass("active");

		$("html, body").animate({
			scrollTop: elementOffset - 42
		}, 700);		
	}); 

// ====== Fixed Header ===============
	let headerTop = $(".header__top");
	let header = $("header");
	let headerH = header.height();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, headerH)

	$(window).on("scroll resize", function () {
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, headerH)
	});

	function checkScroll(scrollPos, headerH) {
		if( scrollPos >= headerH ) {
			headerTop.addClass("fixed");
		}  else {
			headerTop.removeClass("fixed");
		}
	}

// ====== Validation ===============

	function valideForms(form) {
		$('.newsletter-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
	    		email: {
	  				required: "Please enter your email"
	    		}
	  		}
		}),	
		$('#contact form').validate({
			errorPlacement: function(error) {
		    $('.error_label').html(error);
			},
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true,
					minlength: 3
				},
				message: {
					required: true,
					minlength: 3
				}
			}
		});
	};
	valideForms();
});	