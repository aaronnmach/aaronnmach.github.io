document.write(`
<header>
    <div>
        <img src="images/headshot1.jpg" alt="Image Description" class="square-border">
    </div>
    <div>
        <h1>Aaronn Mach</h1>
    </div>
    <div class="container">
        <h3 id="header-text" style="color: #A29592"></h3>
    </div>
    <div class="social-icons">
        <div class="image-wrapper" onmouseover="makeBigger(this)" onmouseout="makeNormal(this)">
            <a href="https://www.linkedin.com/in/aaronnmach/" target="_blank">
                <img src="images/linkedin.png" alt="LinkedIn Image">
            </a>
            <div class="overlay"></div>
        </div>
        <div class="image-wrapper" onmouseover="makeBigger(this)" onmouseout="makeNormal(this)">
            <a href="https://github.com/aaronnmach" target="_blank">
                <img src="images/github.png" alt="Github Image">
            </a>
            <div class="overlay"></div>
        </div>
    </div>
</header>
`);

function makeBigger(element) {
    element.querySelector('img').style.transform = 'scale(1.2)';
}

function makeNormal(element) {
    element.querySelector('img').style.transform = 'scale(1)';
}
