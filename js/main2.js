function askQuestions() {

	var faveColour = prompt('What is your favourite colour').toLowerCase();
	console.log(faveColour)
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'yellow' ||
		faveColour === 'green') {
		// Change the heading to this colour
		$('h1').css({
			'color': faveColour,
		});
		$('.r1').text("Yeah!! I really like " + faveColour);
	} else {
			$('.r1').text("Sorry, I don't like " + faveColour);
	}
}

// When the page is loaded
$(function () {

	// Hide all the content
	$('h3').next().hide();

	// When the user clicks the image, ask questions
	$('img').on('click', askQuestions)


	// When the user clicks a heading
	$('h3').on('click', function () {


		// Toggle the next element
		$(this).next().slideToggle();

	});



});