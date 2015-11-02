$(document).ready(function() {
  $('#resume').show(); //resume page shown by default
  $('#todo').hide();

  //nav bar functionality
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

  //initially set all elements to faded out
  $('#resume .section').each(function() {
    $(this).css('opacity', '0');
  });

  //show element if visible on screen
  fadeIn('#resume .section');

  //fade in elements when they're visible on screen
  $(window).scroll(function() {
    fadeIn('#resume .section');
  });
});

//return if element is visible on screen
function isVisible(element) {
  var objectBottom = $(element).offset().top + $(element).outerHeight()/2;
  var windowBottom = $(window).scrollTop() + $(window).innerHeight();

  return (objectBottom < windowBottom);
}

//fade all selected elements in
function fadeIn(selector) {
  $(selector).each(function() {
    if (isVisible($(this)) && $(this).css('opacity') == '0') {
      $(this).animate({
        'opacity': '1'
      }, 500);
    }
  });
}
