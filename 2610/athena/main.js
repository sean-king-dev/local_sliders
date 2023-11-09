const slideContents = [
  {
    image: 'https://placehold.co/600x400?text=one',
  },
  {
    image: 'https://placehold.co/600x400?text=two',
  },
  {
    image: 'https://placehold.co/600x400?text=three',
  },
  {
    image: 'https://placehold.co/600x400?text=four',
  },
  {
    image: 'https://placehold.co/600x400?text=five',
  },
  {
    image: 'https://placehold.co/600x400?text=six',
  },
  {
    image: 'https://placehold.co/600x400?text=seven',
  },
  {
    image: 'https://placehold.co/600x400?text=eight',
  },
  {
    image: 'https://placehold.co/600x400?text=nine',
  },
  {
    image: 'https://placehold.co/600x400?text=ten',
  },
  {
    image: 'https://placehold.co/600x400?text=eleven',
  },
  {
    image: 'https://placehold.co/600x400?text=twelve',
  }
]



// set index and transition delay
let index = 0;
let transitionDelay = 2000;

// get div containing the slides
window.addEventListener("load", function(){

  let slideContainer = document.querySelector(".slideshow");

  let slide_item = document.createElement("div");
  slide_item.setAttribute("class", "slide_container");

  slideContainer.append(slide_item);

  const showSlide = slideContents.map((slide_item, index) => {
    return `
      <div class="slide">
        <div class="image_div">
          <img src="${slide_item.image}" alt="image" />
        </div>
      </div>
    `
  });

  slide_item.innerHTML += showSlide;



});



// get the slides
let slides = slideContainer.querySelectorAll(".slide");

// set transition delay for slides
for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

// show the first slide
showSlide(index);

// show a specific slide
function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  // next index
  index++;
  // go back to 0 if at the end of slides
  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval (() => showSlide(index), transitionDelay);