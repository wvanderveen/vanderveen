/**
 * Do stuff once the page has loaded!
 */
$(document).ready(function() {
  $('.nav-icon').click(function(event) {
    $(this).parent().toggleClass('open');
  });
});
