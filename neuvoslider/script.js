import location from './location.js'

// thumbimage = $(this).find(".thumb img").attr("src");
// thumbimageTitle = $(this).find(".thumb img").attr("title");
// Destlink = $(this).find(".location_banner").attr('data-link');

location_id = location.id;
location_title = location.title;
location_img = location.img;
location_link = location.ctaLink;


// <div class="slider_wrapper"></div>

let main_slider = document.createDocumentFragment();

// create slide div which will be a parent div for  title, img and cta child nodes
let slide = document.createElement("div");
slide.setAttribute("class", "slide");

// child nodes to attach to 'slide'
let slide_title = document.createElement("div");
slide_title.textContent = location_title;
slide_title.setAttribute("class", "thumbnail_title");

let slide_img = document.createElement("img");
slide_img.setAttribute("class", "thumbnail_img");

let slide_cta = document.createElement("div");
slide_cta.innerHTML = "<a href='" + location_link + "'><span>Go</span></a>";
slide_cta.setAttribute("class", "thumbnail_cta");



// attach new html elements to slide
slide.appendChild(slide_title);
slide.appendChild(slide_img);
slide.appendChild(slide_cta);

// attach slide to main_slider wrapper
main_slider.appendChild(slide);

document.getElementById("slider_wrapper").appendChild(main_slider);

function createCarouselSlide(location) {

    

}