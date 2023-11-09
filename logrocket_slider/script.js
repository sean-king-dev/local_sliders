import location from './location.js'

//slide.forEach((slide, index) => {
    $(".custom_Slides").each(function () {

        // location_image = $(this).find(".thumb img").attr("src");
        location_image = location.image;
        // location_title = $(this).find(".thumb img").attr("title");
        location_title = location.title;
        // location_link = $(this).find(".location_banner").attr('data-link');
        location_link = location.link;

// <div class="slider_wrapper"></div>

let main_slider = document.createDocumentFragment();

// create slide div which will be a parent div for  title, img and cta child nodes
let slide = document.createElement("div");
slide.setAttribute("class", "slide");

// child nodes to attach to 'slide'
let slide_title = document.createElement("div");
slide_title.setAttribute("class", "location_title");

let slide_img = document.createElement("img");
slide_img.setAttribute("class", "location_image");

let slide_cta = document.createElement("div");
slide_cta.setAttribute("class", "location_link");

// attach new html elements to slide
slide.appendChild(slide_title);
slide.appendChild(slide_img);
slide.appendChild(slide_cta);

// attach slide to main_slider wrapper
main_slider.appendChild(slide);

document.getElementById("slider_wrapper").appendChild(main_slider);
    });

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
