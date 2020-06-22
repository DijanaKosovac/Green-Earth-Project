const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
let arrowLeft = document.querySelector("#prev"),
    arrowRight = document.querySelector("#next"),
    slider = document.getElementById('slider'),
    current = 0;

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});

function backgroundImageWithGradient(imageName) {
    return `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('./src/images/carousel-${imageName}.png') `;
}


arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        return;
    }
    current--;
    if (current === 1) {
        slider.style.backgroundImage = backgroundImageWithGradient('img2');
    } else {
        slider.style.backgroundImage = backgroundImageWithGradient('img1');
    }
});

arrowRight.addEventListener("click", function () {
    if (current === 2) {
        slider.style.backgroundImage = backgroundImageWithGradient('img3');
        return;
    }
    current++;
    if (current === 1) {
        slider.style.backgroundImage = backgroundImageWithGradient('img2');
    } else {
        slider.style.backgroundImage = backgroundImageWithGradient('img3');
    }
});
