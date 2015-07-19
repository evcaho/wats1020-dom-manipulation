//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'	
    };
	 //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
	$("#login").click(function() {
    $("#login-form").hide();
			//      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)
	$('.user-fullname').html(userInfo.firstName + ' ' + userInfo.lastName);
	$('.user-info').show();
	});
		
});

    //      1. When user clicks a "view details" button, find the parent of that element.
$('.view-details').on('click', function(event){
	console.log(event);
	var targetElement = event.target;
	var container = targetElement.parentElement.parentElement;
	    //      2. Within that parent, find all the elements that have the class `details`.
	$(container).find ('.details').each (function(index, el){
		//      3. Toggle visibility of all the elements within that parent with the class `details`.
		if($ (el).is(':visible')) {
			$ (el).fadeOut();
			    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
			targetElement.innerText = "View Details";
		} else {
			$(el).fadeIn();
			targetElement.innerText = "Hide Details";
		}
	});
		}
	
	);
	
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	//This line sets up an event listener on the 'vote' class
$('.vote').on('click', function(event){
	console.log(event);
	//When a button is clicked, we can determine whether the user clicked 'great' or 'greatest'
	console.log($(this).attr('data-vote'));
	// this line adds the votes to great or greatest and changes 'voteCounts' accordingly
	console.log(voteCounts[$(this).attr('data-vote')]++);
	voteCounts.total = voteCounts.total + 1;
	// this modifies the width attribute on the progress bar to set the updated percentage for progress bars
	$(".great-progress").width((voteCounts.great)/(voteCounts.total)*100 +'%');
	    console.log((voteCounts.great)/(voteCounts.total)*100 +'%');
	$(".greatest-progress").width((voteCounts.greatest)/(voteCounts.total)*100 + '%');
	    console.log((voteCounts.greatest)/(voteCounts.total)*100 +'%');
});
   
