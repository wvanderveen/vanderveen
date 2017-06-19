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
    if ( $(window).width() > 499) {
        $('body, html').animate({scrollLeft: 0}, 600);
    } else {
        $('body, html').animate({scrollTop: 0}, 600);
    }
  });

  var visited = sessionStorage.getItem('visited');
  if (!visited) {
    var $overlay = $('#overlay');
    $overlay.css("display", "flex");
    $overlay.mousemove(function () {
      setTimeout(hideOverlay, 500);
    });

    function hideOverlay() {
      $overlay.fadeOut();
    }
    sessionStorage.setItem('visited', true);
  }

});
