document.write(`
<header>
    <div>
        <img src="images/aaronnmach1.png" alt="Image Description" class="circular-border">
    </div>
    <div>
        <h1>Aaronn Mach</h1>
    </div>
    <div class="container">
        <h3 id="header-text" style="color: #A29592"></h3>
    </div>
    <div class="social-icons">
        <div class="image-wrapper" onmouseover="makeBigger(this)" onmouseout="makeNormal(this)">
            <a href="https://www.linkedin.com/in/aaronn312487/" target="_blank">
                <img src="images/linkedin.png" alt="LinkedIn Image">
            </a>
            <div class="overlay"></div>
        </div>
        <div class="image-wrapper" onmouseover="makeBigger(this)" onmouseout="makeNormal(this)">
            <a href="https://github.com/amach8" target="_blank">
                <img src="images/github.png" alt="Github Image">
            </a>
            <div class="overlay"></div>
        </div>
    </div>
</header>
`);

function makeBigger(element) {
    element.querySelector('img').style.transform = 'scale(1.2)';
    // Increase the scale of the image to 1.2 when hovered
}

function makeNormal(element) {
    element.querySelector('img').style.transform = 'scale(1)';
    // Reset the scale of the image to 1 when not hovered
}
