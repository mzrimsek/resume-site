$(document).ready(function() {
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
 * Fades all not visible elements in when they become visible on the screen.
 * Elements need to have 'opacity: 0' for any change to be seen.
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
