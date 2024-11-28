
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


function clearForm() {
	// Set a timeout for 3 seconds (3000 milliseconds)
	setTimeout(function() {
		// Get the form element by its ID
		var form = document.getElementById("myForm");
		// Reset the form fields
		form.reset();
	}, 2000); // Delay of 3 seconds
}