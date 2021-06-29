function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	// Print the user's full name into the console
	console.log(fullName);
	$('h1').text(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	console.log(age);

	if (age >= 18) {
		console.log('User is an adult');
		$('.r1').text('You have ' + age + ' years old. You are an adult.');
	} else if (age >= 13) {
		console.log('User is a teenager');
		$('.r1').text('You have ' + age + ' years old. You are a teenager.');
	} else {
		console.log('User is a child');
		$('.r1').text('You have ' + age + ' years old. You are a child.');
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log('Hello General ' + lastName);
		$('.r2').text('Hello General ' + lastName);
	}


	var faveColour = prompt('What is your favourite colour').toLowerCase();
	console.log(faveColour)
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'yellow' ||
		faveColour === 'green') {
		// Change the heading to this colour
		$('h1').css{
			('color', faveColour),
			('text-size', '2.0em')
		};
	};
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