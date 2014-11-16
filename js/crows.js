'use strict';

var crows = crows || {}
crows.jollyroger = {

    init: function() {

      this.$crowform = $('.crowform');
      this.$planks = [];
      this.gatherPlanks();
      this.updateTestArea();
      this.setupTestInputs();
    },

    gatherPlanks: function() {

      var
        $planks = crows.jollyroger.$planks,
        plank = new Object();

        while ($planks.length > 0){$planks.pop();} //empty the array

      $('input, textarea, select').each(function(){
        plank = new Object();
        plank.field = $(this);
        plank.name = plank.field.attr('name');
        plank.type = plank.field.attr('type');
        if (plank.type == 'checkbox'){
          plank.value = plank.field.is(':checked');
        } else if (plank.type == 'radio') {
          plank.value = plank.field.is(':checked') ? plank.field.val() : false ;
        } else {
          plank.value = plank.field.val();
        }
        $planks.push(plank);

      });
    },

    updateTestArea: function(){
      crows.jollyroger.gatherPlanks();
      var $planks = crows.jollyroger.$planks;
      $( "#testArea" ).empty();                                                 //Resets the contents of test area to empty
      $( "#testArea" ).append( "<p>Test area <br> field name & value </p>" );   //Adds text for stevey-poo
      jQuery.each( $planks, function( i, plank ) {
        //Function to output serialized field information
        $( "#testArea" ).append( plank.name + " " + plank.value + " <br>" );
      });
    },

    setupTestInputs: function(){
      // $( ":checkbox, :radio" ).click( crows.jollyroger.updateTestArea() );                               //Updates value of input fields on click/change
      $( ":input, :checkbox, :radio, select" ).change( function(){crows.jollyroger.updateTestArea()});
    },
}

crows.jollyroger.init();


/////// How will time logging be quantified? How will it benefit the end user?
// Log time when entering input for the first time.
// Log time between first contact with an input and
// the first contact with another input.