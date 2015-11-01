$(document).ready(function() {
  $('.main').show();
  $('.other').hide();

  $(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    var $currentNav = $(this).parent();
    $currentNav.addClass("active");
    var $currentId = $currentNav.attr('id');
    if ($currentId === 'homeNav') {
      $('.main').show();
      $('.other').hide();
    } else if ($currentId === 'otherNav') {
      $('.main').hide();
      $('.other').show();
    }
  });
});
