// Crow's Nest - Form Analytics
/*------------------------------------------------------------------------------
What it will do:
Keeps tabs on
  > which fields were touched
  > in what order fields were touched

  > which fields had the most errors during
    - 1. filling it out and
    - 2. submission

> creates visual maps that you can follow incrementally
  - 1. individual results
  - 2. incrementally you see all routes each route has a color associated with
       it the more results that are the same the dark red it is
> statistical information
  - 1. creates pie chart to show what's the major point of abandonment
------------------------------------------------------------------------------*/

// Get a list of all the inputs

// Crow Cart - Analytics
/*------------------------------------------------------------------------------
What it will do:
Keeps track of search queries,
items added to cart,
items added to cart after searches
------------------------------------------------------------------------------*/


/*
Break the project into parts:
  --focus:
  > Front-end form analytics

  ---later:
    ~~Front-end form validation
    ~~Back-end form validation
*/


// Initialize loggin functions:



/* Throwing error
window.onload = function() {
  timeKeeper('start');
};
*/



/* Throwing errors
function timeKeeper(action) {
    var time = [];

    if (action === 'start') { time.start = new.Date();  }
    if (action == 'end') { time.end = new.Date();  }
    if (action == '') {}
}
*/


// Save form actions:


// Set event handlers:


// Get a list of all the inputs in the form in an array.

var formInputs = function() {
    var fields = $( ":input" ).serializeArray();                              //Pulls input fields ****Isn't pulling bottom half of page for some reason
    $( ".testArea" ).empty();                                                 //Resets the contents of test area to empty
    $( ".testArea" ).append( "<p>Test area <br> field name & value </p>" );   //Adds text for stevey-poo

    jQuery.each( fields, function( i, field ) {                               //Function to output serialized field information

      $( ".testArea" ).append( field.name + " " + field.value + " <br>" );
    });
  };
 
  $( ":checkbox, :radio" ).click( formInputs );                               //Updates value of input fields on click/change
  $( ":input" ).change( formInputs );
  formInputs();


// Set a attribute to link them to.


/////// How will time logging be quantified? How will it benefit the end user?
// Log time when entering input for the first time.
// Log time between first contact with an input and
// the first contact with another input.



/* Throwing errors
var i = 1;
input.each($(this).attr('plank', i), function(){i++;});
*/









// What is this? Delete?
//  