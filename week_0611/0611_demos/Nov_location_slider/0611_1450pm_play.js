const mainSlide = document.querySelector(".main_slide_inner");
const thumbSlide = document.querySelector(".thumb_slide_inner");
const thumbSliderButton = document.querySelector(".thumb_slider_button");
const thumbSlideItems = document.querySelectorAll(".thumb_slide_item");

let currentSlideIndex = 0;
let currentIndex = 0;
let currentThumbIndex = 0;


const modxMainCarouselData = document.querySelector(".main_fade_slide");

const modxThumbCarouselData = document.querySelector(".hidden_thumb_slide");

// main fade slider
// locations.forEach((location, index) => {
    $(".main_fade_slide").each(function () {
    const mainSlideItem = document.createElement("div");
    mainSlideItem.classList.add("main_slide_item");

    mainSlideItem.innerHTML = `
    <div class="location_item">
      <div class="main-image-slide" style="background-image: url('${location.image}')">
        <p class="h5 location-title">${location.title}</p>
        <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
      </div>
      </div>
    `;

    mainSlide.appendChild(mainSlideItem);
    
    
  });

  // thumbnail carousel
//   locations.forEach((location, index) => {
    $(".hidden_thumb_slide").each(function(index){

        // get source miodx data to put into slide
        thumb_image = $(this).find(".thumb img").attr("src");
        thumb_title = $(this).find(".title p.h4 img").attr("title");
        thumb_link = $(this).find(".thumb_link").attr('data-link');
    
    const thumbSlideItem = document.createElement("div");
    thumbSlideItem.classList.add("thumb_slide_item");
    
    thumbSlideItem.innerHTML = `
    <div class="thumb_location_item">
    <div class="map_pin show-pin">&#9906;</div>
      <div class="thumb-image-slide" style="background-image: url('${thumb_image}')">
        <p class="h5 thumb-location-title">${thumb_title}</p>
        <a href="${thumb_link}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
      </div>
      </div>
    `;
 
    thumbSlide.appendChild(thumbSlideItem);
    
  });