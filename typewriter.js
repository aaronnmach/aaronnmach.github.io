// Function to simulate typewriter effect with deletion
function typeWriter(text, i, element) {
    if (i < text.length) {
        // Typing
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, element);
        }, 200); // Typing speed (adjust as needed)
    } else {
        // Deleting
        setTimeout(function () {
            var currentText = element.textContent;
            if (currentText.length > 0) {
                // Delete one character at a time
                element.textContent = currentText.substring(0, currentText.length - 1);
                setTimeout(function () {
                    typeWriter(text, i, element);
                }, 50); // Deletion speed (adjust as needed)
            } else {
                // Start typing again after deletion
                i = 0;
                setTimeout(function () {
                    typeWriter(text, i, element);
                }, 1000); // Delay before typing again (adjust as needed)
            }
        }, 100); // Delay before deletion (adjust as needed)
    }
}

// Function to trigger the typewriter effect
function startTypewriterEffect() {
    var text = "Software Engineer"; // Text to be typed
    var i = 0;
    var element = document.getElementById("header-text"); // Get the header element
    typeWriter(text, i, element);
}

// Trigger the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', startTypewriterEffect);
