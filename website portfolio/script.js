// script.js

// Function to change the background color of the header when clicked
function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.backgroundColor = 'lightblue';
}

// Function to add a border to the main content sections
function addBorderToSections() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.border = '2px solid darkblue';
    });
}

// Function to toggle the visibility of the footer
function toggleFooterVisibility() {
    var footer = document.querySelector('footer');
    footer.style.display = (footer.style.display === 'none') ? 'block' : 'none';
}
