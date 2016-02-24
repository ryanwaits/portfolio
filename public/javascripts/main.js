$(function(){

	// $('#btn-submit').on('click', function() {
	// 	$('.alert').show();
	// });

	// moves the menu up and displays projects page
	$('p.contact-tab').on('click', function() {
		$('.container').addClass('div-up');
		$('.cli').hide();
		$(this).css('text-decoration', 'underline');
		$('p.home-tab').css('text-decoration', 'none');
		$('p.projects-tab').css('text-decoration', 'none');
		$('p.social-tab').css('text-decoration', 'none');

		$('.experience').hide();
		$('.code').hide();
		$('.projects').hide();
		$('.history').hide();
		$('.social').hide()

		// @todo show projects
		setTimeout(function() {
			$('.contact').fadeIn('slow');
		}, 1000);
	});		

	// moves the menu up and displays projects page
	$('p.social-tab').on('click', function() {
		$('.container').addClass('div-up');
		$('.cli').hide();
		$(this).css('text-decoration', 'underline');
		$('p.home-tab').css('text-decoration', 'none');
		$('p.projects-tab').css('text-decoration', 'none');
		$('p.contact-tab').css('text-decoration', 'none');

		$('.experience').hide();
		$('.code').hide();
		$('.projects').hide();
		$('.history').hide();
		$('.contact').hide()

		// @todo show projects
		setTimeout(function() {
			$('.social').fadeIn('slow');
		}, 1000);
	});	

	// moves the menu up and displays projects page
	$('p.projects-tab').on('click', function() {
		$('.container').addClass('div-up');
		$('.cli').hide();
		$(this).css('text-decoration', 'underline');
		$('p.home-tab').css('text-decoration', 'none');
		$('p.social-tab').css('text-decoration', 'none');
		$('p.contact-tab').css('text-decoration', 'none');

		$('.experience').hide();
		$('.code').hide();
		$('.history').hide();
		$('.social').hide()
		$('.contact').hide()

		// @todo show projects
		setTimeout(function() {
			$('.projects').fadeIn('slow');
		}, 1000);
	});

	// moves the main menu back to its original state
	$('p.home-tab').on('click', function() {
		$('.container').removeClass('div-up');
		$('.container').addClass('div-back');
		$(this).css('text-decoration', 'underline');
		$('p.projects-tab').css('text-decoration', 'none');
		$('p.social-tab').css('text-decoration', 'none');
		$('p.contact-tab').css('text-decoration', 'none');

		$('.experience').hide();
		$('.code').hide();
		$('.history').hide();
		$('.projects').hide();
		$('.social').hide();
		$('.contact').hide();

		setTimeout(function() {
			$('.cli').fadeIn('slow');
		}, 1000);
	});

	// experience
	$('a.cli:nth-child(1)').on('click', function() {
		// move the header container to the top left corner of the page and hide the list elements
		$('.container').addClass('div-up');
		$('.cli').hide();

		// @todo show work experience content
		setTimeout(function() {
			$('.experience').fadeIn('slow');
		}, 1000);
	});

	// code
	$('a.cli:nth-child(2)').on('click', function() {
		// move the header container to the top left corner of the page and hide the list elements
		$('.container').addClass('div-up');
		$('.cli').hide();
		$('.tidy').css('color', 'rgb(34, 34, 34)');
		$('.tasty').css('color', 'rgba(34, 34, 34, 0.8)');

		// show code sample content
		setTimeout(function() {
			$('.code').fadeIn('slow');
		}, 1000);
		// show the first example
		setTimeout(function() {
			$('.tidy-list-container').fadeIn('slow');
		}, 1250);
		$('.tasty-list-container').hide();
	});

	// when user clicks on tasty code sample
	$('.tidy').on('click', function() {
		$('.tidy').css('color', 'rgb(34, 34, 34)');
		$('.tasty').css('color', 'rgba(34, 34, 34, 0.8)');
		$('.tasty-list-container').hide();
		setTimeout(function() {
			$('.tidy-list-container').fadeIn('slow');
		}, 500);
	});
	$('.tasty').on('click', function() {
		$('.tasty').css('color', 'rgb(34, 34, 34)');
		$('.tidy').css('color', 'rgba(34, 34, 34, 0.8)');
		$('.tidy-list-container').hide();
		setTimeout(function() {
			$('.tasty-list-container').fadeIn('slow');
		}, 500);
	});

	$('a.cli:nth-child(3)').on('click', function() {
		// move the header container to the top left corner of the page and hide the list elements
		$('.container').addClass('div-up');
		$('.cli').hide();

		// @todo if code sample is selected, show history content
		setTimeout(function() {
			$('.history').fadeIn('slow');
		}, 1000);
	});

	$('a.cli:nth-child(4)').on('click', function() {
		// move the header container to the top left corner of the page and hide the list elements
		$('.container').addClass('div-up');
		$('.cli').hide();

		// @todo show current status content
		setTimeout(function() {
			$('.current-status').fadeIn('slow');
		}, 1000);
	});
		
});