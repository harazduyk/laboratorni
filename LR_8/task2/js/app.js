$(document).ready(function (e) {
// burger
    $('.burger').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('burger-active');
		$('.navigation').toggleClass('show');
		$('body').toggleClass('lock');
	});	

	$('.navigation li a').on('click', function(e) {
		e.preventDefault();
		$('.navigation').removeClass('show');
		$('.burger').removeClass('burger-active');
	});
// scroll to id
	$(".nav a").mPageScroll2id({
 	 offset: 50
	});
	$(".under-footer nav a").mPageScroll2id();
	$(".up").mPageScroll2id();

// sliders
	$('.intro-slider').slick({
		fade:true,
		speed:500,
		dots:true,
		appendDots:$('.slider-content'),
		appendArrows:$('.slider-content'),
		prevArrow: $('.prev-arrow'),
	    nextArrow: $('.next-arrow'),
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

	$('.col-8.main').slick ({
		draggable:false,
		dots:true,
	});

	$('.intro-slider').each(function() {
        $(this).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            dots: true,
            appendDots:$(this).siblings('.slider-content')
        });
    });

	$('.intro-slider').each(function() {
        $(this).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            dots: true,
            appendDots:$(this).siblings('.slider-content1')
        });
    });

});

// fixed header
$(function () {
	let header = $(".header-nav");
	let intro = $(".intro");
	let introH = intro.innerHeight() + 311;
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll load resize", function () {
		let introH = intro.innerHeight() + 311;
		let scrollPos = $(window).scrollTop();
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
	 	if(scrollPos > introH ) {
	 		header.addClass("header-fixed");
	 	} else {
	 		header.removeClass("header-fixed");
	 	}
	 }
});

$(function () {
	let header = $(".header-nav .row");
	let intro = $(".intro");
	let introH = intro.innerHeight() + 311;
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll load resize", function () {
		let introH = intro.innerHeight() + 311;
		let scrollPos = $(window).scrollTop();
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
	 	if(scrollPos > introH ) {
	 		header.addClass("header-fixed");
	 	} else {
	 		header.removeClass("header-fixed");
	 	}
	 }
});