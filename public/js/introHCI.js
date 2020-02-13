'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

$(".project").click(function(e){
	e.preventDefault();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */

function callBackFn(result){
 	console.log(result);
 	var projectHTML = '<img src="' + result["image"] + '" class="detailsImage" >' + "<h5>" + result["title"] + 
	"</h5> <h6>" + result["date"] + "</h6> <p>" + result["summary"] + "</p>";
 	$("#project" + result["id"] + " .details").html(projectHTML);
 }

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/" + idNumber, callBackFn);
}
