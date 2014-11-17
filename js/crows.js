'use strict';

var crows = crows || {}

crows.jollyroger = {

    init: function() {

      this.$crowform = $('.crowform');
      this.$planks = [];
      this.$captainsLog = [];
      this.$plank_time = new Object();
      this.gatherPlanks();
      this.updateTestArea();
      this.setupTestInputs();
      this.$timeStart = Date.now();
      this.timeCapsule();
      this.setupPlanks();
    },

    timeCapsule: function() {
      var
        $timeStart = crows.jollyroger.$timeStart;
        // console.log($timeStart);
        // $time = Date.now();

        // // the event to time goes here:
        // doSomethingForALongTime();
        // var end = Date.now();
        // var elapsed = end - start; // elapsed time in milliseconds
    },

    gatherPlanks: function() {

      var
        $planks = crows.jollyroger.$planks,
        plank = new Object();

        while ($planks.length > 0){$planks.pop();} //empty the array
        // var result = $.grep(myArray, function(e){ return e.id == id; });
        // result[0].foo to get the value
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

    setupPlanks: function() {
      crows.jollyroger.gatherPlanks();
      var $planks = crows.jollyroger.$planks;

      for (var i = 0; i < $planks.length; i++) {

        $planks[i].field.change(function(event){
          var plank = $(event.target);
          crows.jollyroger.captainsLog(event, plank, 'change');
        });

        $planks[i].field.focus(function(event){
          var plank = $(event.target);
          crows.jollyroger.captainsLog(event, plank, 'focus');
        });

        $planks[i].field.blur(function(event){
          var plank = $(event.target);
          crows.jollyroger.captainsLog(event, plank, 'blur');
        });

      }
    },

    captainsLog: function(event, plank, action){
      // Keep ye eyes peeled, the seas are trecherous and without
      // all in ship-shape we'll surely be sleepin' the belly of the sea.

      crows.jollyroger.gatherPlanks();
      var
        $planks = crows.jollyroger.$planks,
        $plank_time = crows.jollyroger.$plank_time,
        $captainsLog = crows.jollyroger.$captainsLog;
      var
        plank_elapsed;

      if (action == 'focus'){
        $plank_time.start = new Date();

        // console.log(plank_start);

      }
      if (action == 'blur'){
        $plank_time.end = new Date();
        // console.log($plank_time.end);
        plank_elapsed = ($plank_time.end - $plank_time.start);
        console.log(plank_elapsed);
      }

      // LOG INPUTS

      // focus
      // 	LOG
      // 		action = focus;
      // 		time-start
      // blur
      // 	LOG
      // 		action = blur;
      // 		input = value;
      // 		$sequence('sea_current')
      // 			i ++;
      // 		$plank_time.end;
      // 		$plank_time.elapsed;

      // 	STORE
      // 		all logs in $captainsLog.$planks.plank['log'];

      // 			$captainsLog.$planks.plank['log'][0] // each interaction get it's own iteration object and logged attributes.
      // 			{
      // 				'action'   : 'blur',
      // 				'inputID'  : 'phone_number',
      // 				'sequence' : '1',
      // 				'start'    : 11111,
      // 				'end'      : 11119,
      // 				'elapsed'  : 8
      // 			}

      // 	CLEAR
      // 		$plank_time object


      // console.log(event.target);
      // console.log(plank);
      // Log time form started
      // Log time focused
      // Log time blurred
        // Log time elapsed
      // Log time last input blurred
      // Log input focus order
      // Log validation errors qty and error message (js and php validation errors)
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


crows.swabTheDeck = {}
crows.shoveOff = {}
crows.walkThePlank = {}

/////// How will time logging be quantified? How will it benefit the end user?
// Log time when entering input for the first time.
// Log time between first contact with an input and
// the first contact with another input.