//NavBar

jQuery(document).ready(function ($) {

	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 10) {
			$('.ds-header').addClass('ds-fixed-header');
		}
		else {
			$('.ds-header').removeClass('ds-fixed-header');
		}
	}).scroll();

});

//Key Function Disable

document.onkeydown = function (e) {
	if (event.keyCode == 123) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == 's'.charCodeAt(0)) {
		return false;
	}

}

$(window).load(function () {
	$('.preloader').fadeOut('slow');
});