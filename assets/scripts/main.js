/**
 * Do stuff once the page has loaded!
 */
$(document).ready(function() {
  // Nav Button Toggle
  $('.nav-icon').click(function() {
    $(this).parent().toggleClass('open');
  });

  // FitVids.js
  $('.project-video').fitVids();

  // Back Button Click
  $('.back').click(function(event) {
    event.preventDefault();
    $('body, html').animate({scrollLeft: 0}, 600);
  });

  // Mouse Up and Down scrolls left and right
  $('body').mousewheel(function(event) {
    if (event.deltaY) {
      this.scrollLeft -= (event.deltaY);
      event.preventDefault();
    }
   });
});
