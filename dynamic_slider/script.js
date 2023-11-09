
const location = [
    {
       id: '1',
       title: 'Oxford',
       image: '../assets/img/image_one.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '2',
       title: 'Hove',
       image: '../assets/img/image_two.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '3',
       title: 'London',
       image: '../assets/img/image_three.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '4',
       title: 'Crouch End',
       image: '../assets/img/image_four.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '5',
       title: 'Battersea',
       image: '../assets/img/image_five.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '6',
       title: 'Hackney',
       image: '../assets/img/image_six.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '7',
       title: 'Hammersmith',
       image: '../assets/img/image_seven.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '8',
       title: 'Putney',
       image: '../assets/img/image_eight.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '9',
       title: 'Archway',
       image: '../assets/img/image_nine.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '10',
       title: 'Nunhead',
       image: '../assets/img/image_ten.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }
   
   ]

// import location from './location.js';

// async function getLocationData() {
//     const res = await fetch(location);
//     const locationData = await response.json();

//     console.log(locationData);
// }


// <div class="slider_wrapper"></div>
let main_slider = document.createDocumentFragment();


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

document.getElementsByClassName("main_slider").appendChild(main_slider);