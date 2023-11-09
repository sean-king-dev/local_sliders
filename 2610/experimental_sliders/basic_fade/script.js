const locations = [
    {
        id: '1',
        title: 'Oxford',
        image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    // Add more location data here
];

const slideshowContainer = document.getElementById('slideshow-container');
let currentSlideIndex = 0;

// Create and append the slides
locations.forEach((location, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (index === 0) {
        slide.classList.add('active');
    }
    
    const img = document.createElement('img');
    img.src = location.image;
    slide.appendChild(img);

    slideshowContainer.appendChild(slide);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % locations.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + locations.length) % locations.length;
    showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);

// Set an interval to change the slide every 5 seconds
setInterval(nextSlide, 5000);
