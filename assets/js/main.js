import '../scss/styles.scss';

// carousel header of features section
$('.section__slidebox--header').slick({
	slidesToShow: 1,
	arrows: true,
	draggable: false,
	autoplaySpeed: 2000,
	asNavFor: '.section__slidebox--features',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerPadding: '0px',
				slidesToShow: 1
			}
		}
	]
});

// carousel images of features section

$('.section__slidebox--features').slick({
	centerMode: true,
	arrows: false,
	centerPadding: '0px',
	slidesToShow: 5,
	autoplay: false,
	autoplaySpeed: 2000,
	asNavFor: '.section__slidebox--header',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1048,
			settings: {
				arrows: false,
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 1
			}
		}
	]
});

// slide for user image

$('.section__slidebox--users-header').slick({
	centerMode: true,
	arrows: true,
	autoplay: false,
	draggable: false,
	centerPadding: '0px',
	slidesToShow: 5,
	autoplaySpeed: 2000,
	asNavFor: '.section__slidebox--users',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1048,
			settings: {
				centerPadding: '0px',
				centerMode: true,
				arrow: false
			}
		},
		{
			breakpoint: 800,
			settings: {
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerPadding: '0px',
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			}
		}
	]
});

// slide for user review
$('.section__slidebox--users').slick({
	centerMode: true,
	arrows: false,
	draggable: false,
	centerPadding: '0px',
	slidesToShow: 1,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerPadding: '0px',
				centerMode: true,
				slidesToShow: 1
			}
		}
	]
});

// add active class to user image whenever the slide is changed

$('.section__slidebox--users-header').on('afterChange', function(
	event,
	slick,
	currentSlide,
	nextSlide
) {
	$('.section__slide--users')
		.find('.user__img')
		.removeClass('user__img--active');

	$('.section__slide--users.slick-current')
		.find('.user__img')
		.addClass('user__img--active');
});
