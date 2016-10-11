$(document).ready(function() {

	var gameTracker = 0;

	$('.box').click(function(event) {
		var theBox = event.target.id;

		if (gameTracker%2 === 0) {
			$(this).css('background-color', 'red');	
			gameTracker = gameTracker + 1;
		} else {
			$(this).css('background-color', 'black');	
			gameTracker = gameTracker + 1;
		}
	});

	$('#clear-board-button').click(function() {
		location.reload();
	});

	

	// $("#one").click(function() {
	// 	$(this).css('background-color', 'red');
	// });



});
