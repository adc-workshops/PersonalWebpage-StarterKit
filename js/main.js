$(window).scroll(function(){
  if($(window).scrollTop() > 500) {
    $('.navbar-default').fadeIn(300);
  } else {
    $('.navbar-default').fadeOut(300);
  }
});

$(document).ready(function() {

  // Init the grid for side-projects.
  Grid.init();

  /* This click listener allows the user to scroll to different parts of the page
   * using the navbar by attaching ids to anchors throughout the page.
   */
  $("a.scroll[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 60
    }, 1000, function(){
      window.location.hash = hash;
    });
  });
});