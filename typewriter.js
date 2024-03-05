// Function to simulate typewriter effect with deletion and typing again
function typeWriter(text, i, element) {
    if (i < text.length) {
        // Typing
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, element);
        }, 100); // Typing speed (adjust as needed)
    } else {
        // Deletion and typing again (once)
        if (!element.deletionOccurred) {
            element.deletionOccurred = true; // Set deletion occurred to true
            setTimeout(function () {
                deleteText(text, i, element);
            }, 1000); // Delay before starting deletion
        }
    }
}

// Function to delete the text
function deleteText(text, i, element) {
    if (i > 0) {
        // Deleting
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(function () {
            deleteText(text, i, element);
        }, 50); // Deletion speed (adjust as needed)
    } else {
        // Typing again
        setTimeout(function () {
            typeWriter("Full-Stack Developer, Student", 0, element);
        }, 500); // Delay before typing again
    }
}

// Function to trigger the typewriter effect
function startTypewriterEffect() {
    var text = "cout << jobTitle;"; // Text to be typed
    var i = 0;
    var element = document.getElementById("header-text"); // Get the header element
    typeWriter(text, i, element);
}

// Trigger the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', startTypewriterEffect);
