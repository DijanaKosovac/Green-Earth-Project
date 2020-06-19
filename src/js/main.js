const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});




// slideshow



let arrowLeft = document.querySelector("#prev"),
    arrowRight = document.querySelector("#next"),
    slider = document.getElementById('slider'),
    current = 0;


// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        return;
    }
    current--;
    if (current === 1) {
        slider.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('images/b.png') `;
    } else {
        slider.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('images/a.png') `;
    }
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === 2) {
        slider.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('images/c.png') `;
        return;
    }
    current++;
    if (current === 1) {
        slider.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('images/b.png') `;
    } else {
        slider.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0,0.4)),url('images/c.png') `;
    }
});





