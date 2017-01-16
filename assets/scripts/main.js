/**
 * Do stuff once the page has loaded!
 */
$(document).ready(function() {
  // Nav Button Toggle
  $('.nav-icon').click(function(event) {
    $(this).parent().toggleClass('open');
  });

  // FitVids.js
  $('.project-video').fitVids();
});
