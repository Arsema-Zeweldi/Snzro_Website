let lastClickedElement = null;

function clicked(element) {

  if (lastClickedElement) {
    lastClickedElement.style.color = 'black';
  }
  element.style.color = 'purple';
  lastClickedElement = element;

  switch (element.className) {
    case 'home':
        window.location.href = 'home.html';
        break;
    case 'shop':
        window.location.href = 'shopNow.html';
        break;
    case 'about':
        window.location.href = 'aboutUs.html';
        break;
    case 'contact':
        window.location.href = 'contact.html';
        break;
    case 'en':
        window.location.href = 'en.html';
        break;
    default:
        break;
    }
}

window.onload = function() {
    // Get the current page URL path (e.g., "/home.html")
    var currentPage = window.location.pathname;

    // Select all the header divs
    var menuItems = document.querySelectorAll('.header div');

    // Loop through each menu item to check which one matches the current page
    menuItems.forEach(function(item) {
        // Check if the text of the item corresponds to the current page
        if ((currentPage.includes('home') && item.classList.contains('home')) ||
            (currentPage.includes('shop') && item.classList.contains('shop')) ||
            (currentPage.includes('about') && item.classList.contains('about')) ||
            (currentPage.includes('contact') && item.classList.contains('contact')) ||
            (currentPage.includes('en') && item.classList.contains('en'))) {
            // Add the active class to the matching item
            item.classList.add('active');
        }
    });
};
