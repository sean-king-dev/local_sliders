// 1. location content for carousel
const location = [
    {
      id: 1,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 2,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 3,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 4,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 5,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 6,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 7,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 8,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 9,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 10,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 11,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    },
    {
      id: 12,
      title: 'location name',
      img: 'https://picsum.photos/200/300',
      cta: 'https://google.com'
    }
    
  ]
  
  
  // create carousel slide structure
  // <div id="slider_wrapper"></div>
// let main_slider = document.createDocumentFragment();

// create slide div which will be a parent div for  title, img and cta child nodes
let slide = document.createElement("div");
slide.setAttribute("class", "slide");

// child nodes to attach to 'slide'
let slide_title = document.createElement("div");
slide_title.setAttribute("class", "thumbnail_title");

let slide_img = document.createElement("img");
slide_img.setAttribute("class", "thumbnail_img");

let slide_cta = document.createElement("div");
slide_cta.setAttribute("class", "thumbnail_cta");

// attach new html elements to slide
slide.appendChild(slide_title);
slide.appendChild(slide_img);
slide.appendChild(slide_cta);

// attach slide to main_slider wrapper
main_slider.appendChild(slide);

document.getElementById("slider_wrapper").appendChild(main_slider);
  // add location js content to slide structure
  