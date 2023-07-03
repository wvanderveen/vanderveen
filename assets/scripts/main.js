/**
 * Do stuff once the page has loaded!
 */
jQuery(document).ready(function($){
  // Nav Button Toggle
  $('.nav-icon').click(function() {
    $(this).parent().toggleClass('open');
  });

  // FitVids.js
  $('.project-video').fitVids();

  // Back Button Click
  $('.back').click(function(event) {
    event.preventDefault();
    if ( $(window).width() > 719) {
        $('body, html').animate({scrollLeft: 0}, 700);
    } else {
        $('body, html').animate({scrollTop: 0}, 700);
    }
  });

  if ($(window).width() > 719) {
    var visited = sessionStorage.getItem('visited');
    if (!visited) {
      var $overlay = $('#overlay');
      $overlay.css("display", "flex");
    
      $('#dismiss-button').on("click", function () {
        $overlay.fadeOut();
      });
    
      sessionStorage.setItem('visited', true);
    }
  }
  
  // Randomize the label that gets overlaid to suggest horizontal scrolling
    // Array of labels
    var labels = ["Bring it around town (horizontal scrolling)", "To the right now, y'all (horizontal scrolling)", "Who, scrolling? He went that-a-way (horizontal)", "Hup two! Left, right, left, right (horizontal scrolling)"];
    // Get a random index from the labels array
    var randomIndex = Math.floor(Math.random() * labels.length);
    // Display the random label
    var labelElement = document.getElementById("label");
    labelElement.textContent = labels[randomIndex];
});
