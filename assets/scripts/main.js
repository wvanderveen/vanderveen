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
    if ( $(window).width() > 719) {
        $('body, html').animate({scrollLeft: 0}, 700);
    } else {
        $('body, html').animate({scrollTop: 0}, 700);
    }
  });

  if ( $(window).width() > 719) {
    var visited = sessionStorage.getItem('visited');
    if (!visited) {
      var $overlay = $('#overlay');
      $overlay.css("display", "flex");
      $overlay.on("mousemove click touchmove", function () {
        setTimeout(hideOverlay, 1000);
      });

      function hideOverlay() {
        $overlay.fadeOut();
      }
      sessionStorage.setItem('visited', true);
    }
  }

});
