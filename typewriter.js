
function typeWriter(text, i, element) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, element);
        }, 100);
    } else {
        if (!element.deletionOccurred) {
            element.deletionOccurred = true;
            setTimeout(function () {
                deleteText(text, i, element);
            }, 1000);
        }
    }
}

function deleteText(text, i, element) {
    if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(function () {
            deleteText(text, i, element);
        }, 50);
    } else {
        setTimeout(function () {
            typeWriter("Full-Stack Developer", 0, element);
        }, 500);
    }
}


function startTypewriterEffect() {
    var text = "Computer Science Student";
    var i = 0;
    var element = document.getElementById("header-text");
    typeWriter(text, i, element);
}

document.addEventListener('DOMContentLoaded', startTypewriterEffect);
