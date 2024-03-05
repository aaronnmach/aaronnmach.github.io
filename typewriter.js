// Function to simulate typewriter effect without deletion and only typing once
function typeWriter(text, i, element) {
    if (i < text.length) {
        // Typing
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, element);
        }, 200); // Typing speed (adjust as needed)
    }
}


// Function to trigger the typewriter effect
function startTypewriterEffect() {
    var text = " Full-Stack Developer, Student"; // Text to be typed
    var i = 0;
    var element = document.getElementById("header-text"); // Get the header element
    typeWriter(text, i, element);
}

// Trigger the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', startTypewriterEffect);
