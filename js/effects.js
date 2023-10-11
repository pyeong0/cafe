$(document).ready(function(){

// Scroll Elements Menu
	var About = $('#about').offset().top,
		menu = $('#platelets').offset().top,
		gallery = $('#gallery').offset().top,
		location = $('#location').offset().top;

// Bottoms up About
	$('#btn-about').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 40
		});
	});

	$('#btn-gallery').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: gallery - 40
		});
	});

	$('#btn-location').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: location - 40
		});
	});

// Effect Menu
	$('.menu a').each(function(index, element){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 + (index * 500));
	});


// Effect Header
	if ($(window).width() > 800){
		$('header .texts').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texts').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);
	}

});