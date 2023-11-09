const mainSlide = document.querySelector(".main_slide_inner"); // Selects the main slide container element
const thumbSlide = document.querySelector(".thumb_slide_inner"); // Selects the thumbnail slide container element
const thumbSliderButton = document.querySelector(".thumb_slider_button"); // Selects the button used to slide the thumbnails
const thumbSlideItems = document.querySelectorAll(".thumb_slide_item"); // Selects all the individual thumbnail items

let currentSlideIndex = 0; // Tracks the current index of the main slide
let currentIndex = 0; // Tracks the current index of the slideshow
let currentThumbIndex = 0; // Tracks the current index of the thumbnails

// The code below generates the main and thumbnail slides based on some data in the 'locations' array.
locations.forEach((location, index) => {
    // Create a new main slide item element
    const mainSlideItem = document.createElement("div");
    mainSlideItem.classList.add("main_slide_item");

    // Create a new thumbnail slide item element
    const thumbSlideItem = document.createElement("div");
    thumbSlideItem.classList.add("thumb_slide_item");

    // Set the inner HTML of the main slide item with data from the 'locations' array
    mainSlideItem.innerHTML = `
        <div class="location_item">
            <div class="main-image-slide" style="background-image: url('${location.image}')">
                <p class="h5 location-title">${location.title}</p>
                <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
            </div>
        </div>
    `;

    // Append the main slide item to the main slide container
    mainSlide.appendChild(mainSlideItem);

    // Set the inner HTML of the thumbnail slide item with data from the 'locations' array
    thumbSlideItem.innerHTML = `
        <div class="thumb_location_item">
            <div class="map_pin show-pin">&#9906;</div>
            <div class="thumb-image-slide" style="background-image: url('${location.image}')">
                <p class="h5 thumb-location-title">${location.title}</p>
                <a href="${location.ctaLink}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
            </div>
        </div>
    `;

    // Append the thumbnail slide item to the thumbnail slide container
    thumbSlide.appendChild(thumbSlideItem);
});

// The 'activateMainSlide' function adds and removes the 'active' class for the main slide items to control which one is displayed.
function activateMainSlide(index) {
    const mainSlideItems = document.querySelectorAll(".main_slide_item");
    mainSlideItems.forEach((item) => item.classList.remove("active"));
    mainSlideItems[index].classList.add("active");
}

// The 'activateThumbnailSlide' function adds and removes the 'active' class for the thumbnail slide items and ensures the selected item is fully visible.
function activateThumbnailSlide(index) {
    // ... (code that activates thumbnail slide items and ensures visibility)
}

// The 'activateSlide' function is a higher-level function that activates both main and thumbnail slides based on the given index.
function activateSlide(index) {
    activateMainSlide(index); // Apply active class to main slides
    activateThumbnailSlide(index); // Apply active class to thumbnail slides
}

// The 'nextSlide' function increments the index and activates the next slide. It's used for auto-advancing the slideshow.
function nextSlide() {
    currentIndex = (currentIndex + 1) % locations.length;
    activateSlide(currentIndex);
}

// Set up an interval to automatically advance the slides every 2000 milliseconds (2 seconds)
let slideInterval = setInterval(nextSlide, 2000);

// When the mouse enters the thumbnail slide, clear the interval to stop auto-advancing the slides
thumbSlide.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
});

// When the mouse leaves the thumbnail slide, restart the auto-advancing interval
thumbSlide.addEventListener("mouseleave", function () {
    slideInterval = setInterval(nextSlide, 2000);
});

// Activate the initial slide
activateSlide(currentIndex);

// The code below adds event listeners to previous and next buttons for manual slide control.
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + locations.length) % locations.length;
    activateSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % locations.length;
    activateSlide(currentIndex);
});