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

function toggleSectionVisibility(sectionId) {
    var sections = document.querySelectorAll('section'); // Get all sections
    sections.forEach(function (section) {
        if (section.id === sectionId) { // Show the clicked section
            section.style.display = 'block';
        } else { // Hide other sections
            section.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Hide all sections except the Home section when the page loads
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        if (section.id !== 'home-section') {
            section.style.display = 'none';
        }
    });
});

