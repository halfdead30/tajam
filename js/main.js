$(document).ready(function(){

	$('.js-header-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
  		infinite: true,
  		dots: true,
  		arrows: false,
 		slidesToShow: 1,
  		slidesToScroll: 1
	});

	$('.reviews-sl').slick({
	    asNavFor: '.reviews-sl-min',
	    autoplay: false,
	    autoplaySpeed: 7000,
	    fade: true,
	    arrows: false
	  });

	$('.reviews-sl-min').slick({
	    asNavFor: '.reviews-sl',
	    slidesToShow: 5,
	    arrows: false,
	    focusOnSelect: true
	});

	let btn = $('#up-btn-js');

	$(window).scroll(function() {
	    if ($(window).scrollTop() > 300) {
	        btn.addClass('show');
	    } else {
	        btn.removeClass('show');
	    }
	});

	if(btn.classList = 'show') {
		btn.removeClass('show');
	}

	btn.on('click', function(e) {
	    e.preventDefault();
	    $('html, body').animate({scrollTop:0}, '300');
	});

});