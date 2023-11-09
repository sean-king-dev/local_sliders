const locations = [
    {
        id: '1',
        title: 'Oxford',
        //image: '../assets/img/img_one.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        //image: '../assets/img/img_two.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        //image: '../assets/img/img_three.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=three',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        //image: '../assets/img/img_four.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=four',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        //image: '../assets/img/img_five.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=five',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        //image: '../assets/img/img_six.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=six',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        //image: '../assets/img/img_seven.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=seven',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        //image: '../assets/img/img_eight.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=eight',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        //image: '../assets/img/img_nine.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=nine',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        //image: '../assets/img/img_ten.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=ten',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }

];


const slideInner = document.querySelector(".slider_inner");

const main_slide = document.createElement("div");
main_slide.setAttribute('class', 'slide');

slideInner.appendChild(main_slide);

const mainSlide = document.querySelector(".slide");

window.addEventListener("DOMContentLoaded", function () {

    const showMainSlide = locations.map((location, index) => {
        return `
                <div class="main_slide_wrapper" key=${location.id}>
                <div class="main_slide_item">
                    <div class="slide-body-image" style="background: url(${location.image});">
                        <h5 class="card-title">${location.title}</h5>
                        <a class="ctalink" href=${location.ctaLink}><span>Go</span><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                </div>`
    });

    mainSlide.innerHTML = showMainSlide;

    document.getElementsByClassName('main_slide_wrapper')[0].classList.add('active');

    // fadeCarousel();
    // function fadeCarousel() {

    //     let slide_images = document.querySelectorAll('.main_slider_wrapper');
    //     let speed = 1000;
    //     let slideIndex = 0;

    //     // document.getElementsByClassName('main_slide_wrapper')[0].classList.add('active');

    //     startCarousel();
    //     function startCarousel() {
    //         setInterval(() => {
    //             slideIndex++;
    //             updateCarousel();
    //         }, speed);
    //     };


    //     updateCarousel();
    //     function updateCarousel() {
    //         slide_images.forEach(item => item.classList.remove('active'));
    //         slide_images[slideIndex].classList.add('active');
    //     }

    // };

    // chatgpt rewerite
//     fadeCarousel();

// function fadeCarousel() {
//     let slide_images = document.querySelectorAll('.main_slider_wrapper');
//     let speed = 1000;
//     let slideIndex = 0;

//     startCarousel();

//     function startCarousel() {
//         setInterval(() => {
//             slideIndex++;
//             if (slideIndex >= slide_images.length) {
//                 slideIndex = 0; // Reset to the first slide when it reaches the end
//             }
//             updateCarousel();
//         }, speed);
//     }

//     updateCarousel();

//     function updateCarousel() {
//         slide_images.forEach(item => item.classList.remove('active'));
//         if (slide_images[slideIndex]) {
//             slide_images[slideIndex].classList.add('active');
//         }
//     }
// }


// chta gpt v2

// Fetch all elements with the class ".slide"
const slides = document.querySelectorAll('.main_slide_wrapper');
let currentIndex = 0;

// Function to hide all slides and show the current one
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Initial display
showSlide(currentIndex);

// Function to change to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Set an interval to change the slide every 5 seconds
const interval = setInterval(nextSlide, 5000);


});