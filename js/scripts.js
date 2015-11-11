$(document).ready(function() {
  $('#resume').show(); //resume page shown by default
  $('#todo').hide();
  $('#weather').hide();

  //nav bar functionality
  $('.nav a').on('click', function() {
    $('.nav').find('.active').removeClass('active');
    var $currentNav = $(this).parent();
    $currentNav.addClass('active');
    var $currentId = $currentNav.attr('id');
    if ($currentId === 'homeNav') {
      showSelectedNav('resume');
    } else if ($currentId === 'todoNav') {
      showSelectedNav('todo');
    } else if ($currentId === 'weatherNav') {
      showSelectedNav('weather');
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

  //emulate button click on enter key press when input group input has focus
  $('.input-group input').on('keyup', function(e) {
    if (e.keyCode === 13) {
      $('.input-group button').click();
    }
  });

  //click on todo-item to toggle item state
  $(document).on('click', '.todo-item', function() {
    $(this).children('.todo-checked').click();
  });
});

/**
 * Determine if an element is visible on the screen or not.
 * @param  {Element}  element The element to check.
 * @return {Boolean}         True if element is visible.
 */
function isVisible(element) {
  var objectBottom = $(element).offset().top + $(element).outerHeight() / 3;
  var windowBottom = $(window).scrollTop() + $(window).innerHeight();

  return (objectBottom < windowBottom);
}

/**
 * Fades all not visible elements in when they become visible on the screen.  Elements need to have 'opacity: 0' for any change to be seen.
 * @param  {String} elements Selector for all elements to be checked to be faded in.
 */
function fadeIn(elements) {
  $(elements).each(function() {
    if (isVisible($(this)) && $(this).css('opacity') == '0') {
      $(this).animate({
        'opacity': '1',
      }, 300);
    }
  });
}

/**
 * Simple function to show only selected main element and hide rest
 * @param  {String} navId Id of element to show - do not include # in parameter
 */
function showSelectedNav(navId) {
  $('.main').hide();
  $('#' + navId).show();
}
