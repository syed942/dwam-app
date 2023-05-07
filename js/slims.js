$(document).ready(function() {
  // Selects all link elements in the page
  var links = $('.navbar-nav li.nav-item a.nav-link');
  
  // Loops through each link and checks if its href matches the current page URL
  links.each(function() {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active'); // Adds the 'active' class to the link
    }
  });
});
