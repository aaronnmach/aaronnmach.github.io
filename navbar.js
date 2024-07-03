
// Function to handle scroll events
function handleScroll() {
    var navbar = document.getElementById('navbar');
    var homeSection = document.getElementById('home-section');

    // Check if homeSection is in viewport or if scrolled to top of page
    if (isElementInViewport(homeSection) || window.scrollY === 0) {
        navbar.style.top = '0'; // Show navbar
    } else {
        navbar.style.top = '-100px'; // Hide navbar
    }
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', function () {
    handleScroll();
});
