$(function() {
	$('a').click(function(event) {
		event.preventDefault();

		$('body, html').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 200);
	});
	// $('body').scrollTo('#second-screen');
});