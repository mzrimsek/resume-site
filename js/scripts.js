$(document).ready(function() {
  determineNavToShow();

  //update nav bar styles to highlight selected section
  $('.nav a').on('click', function() {
    $('.nav').find('.active').removeClass('active');
    var $currentNav = $(this).parent();
    $currentNav.addClass('active');
  });

  //when the hash changes in the URL, disply that section of the site
  $(window).on('hashchange', function() {
    determineNavToShow();
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

  //toggle whether submit button is enabled based on text input
  $('.weather-query input').on('input', function() {
    if (isValidZip($(this).val())) {
      $('.weather-query button').prop('disabled', false);
    } else {
      $('.weather-query button').prop('disabled', true);
    }
  });

  //reset text and disable submit button after it has been clicked
  $('.weather-query button').on('click', function() {
    var $weatherInput = $('.weather-query input');
    $weatherInput.val('');
    $(this).prop('disabled', true);
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
/**
 * Determines which section to show based on hash in URL, and then updates
 * front end nav to
 */
function determineNavToShow() {
  var hash = window.location.hash.substring(1);
  //if no hash in the URL, set it to the resume section
  if (!hash) {
    hash = 'resume';
    window.location.href = window.location.href + '#' + hash;
  }
  //hide all main sections and show only the selected one
  $('.main').hide();
  $('#' + hash).show();
  //update nav styling based on selected nav
  //needed because when navigating by URL instead of nav buttons, the styling doesn't change correctly
  $('.nav').find('.active').removeClass('active');
  var $currentNav = $('.nav').children('#' + hash + 'Nav');
  $currentNav.addClass('active');
}

/**
 * Tests if input is a valid US zipcode
 * @param  {[type]}  zip Zipcode to test
 * @return {Boolean}      Return true if valid zipcode
 */
function isValidZip(zip) {
  return (/^\d{5}(-\d{4})?$/).test(zip);
}
