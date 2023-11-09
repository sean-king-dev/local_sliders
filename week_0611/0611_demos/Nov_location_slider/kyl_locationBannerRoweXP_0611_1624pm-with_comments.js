// Add an event listener for the 'DOMContentLoaded' event on the window object
// This ensures that the script runs after the entire page is loaded
window.addEventListener("DOMContentLoaded", function() {

    // Query the DOM and store references to the main and thumbnail slides, as well as the thumbnail slider button
    const mainSlide = document.querySelector(".main_slide_inner"); // selects the main slide container
    const thumbSlide = document.querySelector(".thumb_slide_inner"); // selects the thumbnail slide container
    const thumbSliderButton = document.querySelector(".thumb_slider_button"); // selects the slider button for thumbnails
    const thumbSlideItems = document.querySelectorAll(".thumb_slide_item"); // selects all individual thumbnail slide items
  
    // Initialize index variables to track the current slide position
    let currentSlideIndex = 0; // tracks the current slide index for the main carousel
    let currentIndex = 0; // also tracks the current slide index, possibly redundant and could be combined with currentSlideIndex
    let currentThumbIndex = 0; // tracks the current slide index for the thumbnail carousel
  
    // Query the DOM for carousel data attributes for main and thumbnail slides and log them for debugging
    const modxMainCarouselData = document.querySelector(".main_carouseldata"); // selects the main carousel data container
    console.log(modxMainCarouselData); // logs the main carousel data for debugging
  
    const modxThumbCarouselData = document.querySelector(".thumb_carouseldata"); // selects the thumbnail carousel data container
    console.log(modxThumbCarouselData); // logs the thumbnail carousel data for debugging
  
    const thumbMetaData = document.querySelectorAll(".main_fade_slide .hidden_thumb_slide"); // selects metadata elements within hidden thumbnail slides
    console.log(thumbMetaData); // logs the metadata for debugging
  
    // Iterate over 'locations' array to create and append main slide items dynamically
    // 'locations' must be an array defined elsewhere in the code
    locations.forEach((location, index) => {
      const mainSlideItem = document.createElement("div"); // create a new div element for each location
      mainSlideItem.classList.add("main_slide_item"); // add a class for styling the main slide item
  
      // Using a template literal to build the inner HTML of the mainSlideItem with dynamic data
      mainSlideItem.innerHTML = `
        <div class="location_item">
          <div class="main-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
          </div>
        </div>
      `;
  
      mainSlide.appendChild(mainSlideItem); // append the created item to the main slide container
    });
  
    // Repeat the process for the thumbnail slides
    locations.forEach((location, index) => {
      const thumbSlideItem = document.createElement("div"); // create a new div element for each thumbnail location
      thumbSlideItem.classList.add("thumb_slide_item"); // add a class for styling the thumbnail slide item
  
      // Using a template literal to build the inner HTML of the thumbSlideItem with dynamic data
      thumbSlideItem.innerHTML = `
        <div class="thumb_location_item">
          <div class="map_pin show-pin">&#9906;</div>
          <div class="thumb-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 thumb-location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
          </div>
        </div>
      `;
  
      thumbSlide.appendChild(thumbSlideItem); // append the created item to the thumbnail slide container
    });
  
    // Define a function to activate a main slide by its index
    function activateMainSlide(index) {
      const mainSlideItems = document.querySelectorAll(".main_slide_item"); // re-select all main slide items
      mainSlideItems.forEach((item) => item.classList.remove("active")); // remove the 'active' class from all items
      mainSlideItems[index].classList.add("active"); // add the 'active' class to the item at the specified index
    }
  
    // Define a function to activate a thumbnail slide and ensure it's visible in the scrollable area
    function activateThumbnailSlide(index) {
      const thumbSlideItems = document.querySelectorAll(".thumb_slide_item"); // re-select all thumbnail slide items
      thumbSlideItems.forEach((item) => item.classList.remove("active")); // remove the 'active' class from all items
      thumbSlideItems[index].classList.add("active"); // add the 'active' class to the item at the specified index
  
      // Calculation for scrolling the thumbnail carousel goes here...
      // [Similar to the above example, this section will include calculations for the scroll position based on the thumbnail width, the total width of the thumbSliderButton, and the index of the thumbnail. The scrollLeft property of thumbSlide will be set accordingly.]
    }
  
    // Define a function to activate both main and thumbnail slides by index
    function activateSlide(index) {
      activateMainSlide(index); // activate the main slide at the specified index
      activateThumbnailSlide(index); // activate the thumbnail slide at the specified index
    }
  
    // Define a function to advance to the next slide and loop back to the start if at the end
    function nextSlide() {
      currentIndex = (currentIndex + 1) % locations.length; // increment the index and loop back using modulo
      activateSlide(currentIndex); // activate the slide at the new index
    }
  
    // Set an interval to automatically advance slides every 2000 milliseconds
    let slideInterval = setInterval(nextSlide, 2000);
  
    // Add event listeners to pause and resume the slide interval on mouse enter/leave
    thumbSlide.addEventListener("mouseenter", function () {
      clearInterval(slideInterval); // clear the interval to pause automatic slide advancement
    });
  
    thumbSlide.addEventListener("mouseleave", function () {
      slideInterval = setInterval(nextSlide, 2000); // set a new interval to resume slide advancement
    });
  
    // Activate the slide at the initial index
    activateSlide(currentIndex);
  
    // Add additional code for navigation buttons
    const prevButton = document.getElementById("slide-arrow-prev"); // select the previous button
    const nextButton = document.getElementById("slide-arrow-next"); // select the next button
  
    // Add click event listeners to the prev and next buttons for manual slide navigation
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + locations.length) % locations.length; // decrement index and loop back if necessary
      activateSlide(currentIndex); // activate the slide at the new index
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % locations.length; // increment index and loop back if necessary
      activateSlide(currentIndex); // activate the slide at the new index
    });
    
  });
  