$(document).ready(function() {
  $('#resume').show();
  $('#todo').hide();

  $('.nav a').on('click', function() {
    $('.nav').find('.active').removeClass('active');
    var $currentNav = $(this).parent();
    $currentNav.addClass('active');
    var $currentId = $currentNav.attr('id');
    if ($currentId === 'homeNav') {
      $('#resume').show();
      $('#todo').hide();
    } else if ($currentId === 'todoNav') {
      $('#resume').hide();
      $('#todo').show();
    }
  });
});
