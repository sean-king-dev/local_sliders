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

];

// const c_inner = document.querySelector('.carousel-inner')
// const carouselContainer = document.querySelector('.carousel-container');
// const prevButton = document.getElementById('prevButton');
// const nextButton = document.getElementById('nextButton');

// let currentIndex = 0;

// let results = location.map()

// function createCarouselSlide(location) {
//     const slide = document.createElement('div');
//     slide.classList.add('carousel-slide');

//     const image = document.createElement('img');
//     image.classList.add('carousel-image');
//     image.src = location.image;
//     image.alt = location.title;

//     const title = document.createElement('h2');
//     title.textContent = location.title;

//     const ctaLink = document.createElement('a');
//     ctaLink.href = location.ctaLink;
//     ctaLink.textContent = 'Learn More';

//     slide.appendChild(image);
//     slide.appendChild(title);
//     slide.appendChild(ctaLink);


// //    carouselContainer.appendChild(slide); 

//     return slide;
// }

// const slide = document.createElement('div');
//     slide.classList.add('carousel-slide');

//     const image = document.createElement('img');
//     image.classList.add('carousel-image');
//     image.src = location.image;
//     image.alt = location.title;

//     const title = document.createElement('h2');
//     title.textContent = location.title;

//     const ctaLink = document.createElement('a');
//     ctaLink.href = location.ctaLink;
//     ctaLink.textContent = 'Learn More';

//     slide.appendChild(image);
//     slide.appendChild(title);
//     slide.appendChild(ctaLink);


//    carouselContainer.appendChild(slide); 

//    c_inner.appendChild(slide);



// function updateCarousel() {
//     carouselContainer.innerHTML = '';
//     const location = locations[currentIndex];
//     const slide = createCarouselSlide(location);
//     carouselContainer.appendChild(slide);
// }

// function showPreviousSlide() {
//     currentIndex = (currentIndex - 1 + locations.length) % locations.length;
//     updateCarousel();
// }

// function showNextSlide() {
//     currentIndex = (currentIndex + 1) % locations.length;
//     updateCarousel();
// }

// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// // Initialize the carousel
// updateCarousel();

// // Automatic carousel slide change (you can customize this)
// setInterval(showNextSlide, 5000); // Change slide every 5 seconds


// // add slider-wrapper



// <div id="main"></div>
var tree = document.createDocumentFragment();

var link = document.createElement("a");
link.setAttribute("id", "id1");
link.setAttribute("href", "http://site.com");
link.appendChild(document.createTextNode("linkText"));

var div = document.createElement("div");
div.setAttribute("id", "id2");
div.appendChild(document.createTextNode("divText"));

tree.appendChild(link);
tree.appendChild(div);
document.getElementById("main").appendChild(tree);