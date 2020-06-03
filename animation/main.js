//Animate fade out
$('#box').fadeOut();

//Animate fadeIn
$('#box').fadeIn();

//Slide and remove element
$('#box').slideUp('slow');

// Custom effects with .animate()
$( "#box" ).animate(

  //properties to animate
  {opacity: 0.25},

    // Duration
    300,

    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
);
