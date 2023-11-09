const locations = [
    {
        id: '1',
        title: 'Oxford',
        image: 'https://placehold.co/1920x1080?text=Oxford',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        image: 'https://placehold.co/1920x1080?text=Hove',
        ctaLink: 'https://en.wikipedia.org/wiki/Hove'
    },
    {
        id: '3',
        title: 'London',
        image: 'https://placehold.co/1920x1080?text=London',
        ctaLink: 'https://en.wikipedia.org/wiki/London'
    },
    {
        id: '4',
        title: 'Crouch End',
        image: 'https://placehold.co/1920x1080?text=Crouch+End',
        ctaLink: 'https://en.wikipedia.org/wiki/Crouch_End'
    },
    {
        id: '5',
        title: 'Battersea',
        image: 'https://placehold.co/1920x1080?text=Battersea',
        ctaLink: 'https://en.wikipedia.org/wiki/Battersea'
    },
    {
        id: '6',
        title: 'Hackney',
        image: 'https://placehold.co/1920x1080?text=Hackney',
        ctaLink: 'https://en.wikipedia.org/wiki/Hackney'
    },
    {
        id: '7',
        title: 'Hammersmith',
        image: 'https://placehold.co/1920x1080?text=Hammersmith',
        ctaLink: 'https://en.wikipedia.org/wiki/Hammersmith'
    },
    {
        id: '8',
        title: 'Putney',
        image: 'https://placehold.co/1920x1080?text=Putney',
        ctaLink: 'https://en.wikipedia.org/wiki/Putney'
    },
    {
        id: '9',
        title: 'Archway',
        image: 'https://placehold.co/1920x1080?text=Archway',
        ctaLink: 'https://en.wikipedia.org/wiki/Archway'
    },
    {
        id: '10',
        title: 'Nunhead',
        image: 'https://placehold.co/1920x1080?text=Nunhead',
        ctaLink: 'https://en.wikipedia.org/wiki/Nunhead'
    }
];

const slideContainer = document.querySelector('.main_slide_items');
const thumbnailSlider = document.getElementById('thumbnail-slider');
const thumbnailSliderContainer = document.querySelector('.thumbnail_slider');
let currentSlideIndex = 0;
let currentThumbnailIndex = 0;

// Number of visible thumbnails at a time
const thumbnailsPerPage = 8;
const totalThumbnails = locations.length;
const totalSets = Math.ceil(totalThumbnails / thumbnailsPerPage);

// Function to create and append the main slides
function createMainSlide(location) {
    const slide = document.createElement('div');
    slide.className = 'main_slide_item';
    slide.innerHTML = `
        <img src="${location.image}" alt="${location.title}">
        <h3>${location.title}</h3>
        <a href="${location.ctaLink}" target="_blank">Learn More</a>
    `;
    slideContainer.appendChild(slide);
}

// Function to create and append the thumbnail slides
function createThumbnailSlide(location, index) {
    const thumbnailSlide = document.createElement('div');
    thumbnailSlide.className = 'thumbnail_slide';
    thumbnailSlide.innerHTML = `
        <img src="${location.image}" alt="${location.title}">
        <div class="thumbnail_buttons">
            <a href="${location.ctaLink}" target="_blank">Go</a>
            <button>Hi</button>
        </div>
    `;
    thumbnailSlide.addEventListener('click', () => showSlide(index));
    thumbnailSliderContainer.appendChild(thumbnailSlide);
}

// Create and append the main slides and thumbnail slides
locations.forEach((location, index) => {
    createMainSlide(location);
    createThumbnailSlide(location, index);

    if (index === 0) {
        const slide = slideContainer.children[index];
        slide.classList.add('active');
        const thumbnailSlide = thumbnailSliderContainer.children[index];
        thumbnailSlide.classList.add('active');
    }
});

// Function to show the specified main slide
function showSlide(index) {
    currentSlideIndex = index;
    const slides = document.querySelectorAll('.main_slide_item');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    const thumbnailSlides = document.querySelectorAll('.thumbnail_slide');
    thumbnailSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove ('active');
        }
    })
}

// Function to show the specified thumbnail slide
function showThumbnailSlide(index) {
    currentThumbnailIndex = index;
    const thumbnailSlides = document.querySelectorAll('.thumbnail_slide');
    thumbnailSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    })
}

// Function to navigate to the next main slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % locations.length;
    showSlide(currentSlideIndex);
}

// Function to navigate to the previous main slide
function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + locations.length) % locations.length;
    showSlide(currentSlideIndex);
}

// Function to navigate to the next thumbnail slide set
function nextThumbnailSet() {
    const nextSetStart = (currentThumbnailIndex + thumbnailsPerPage) % totalThumbnails;
    showThumbnailSet(nextSetStart);
}

// Function to navigate to the previous thumbnail slide set
function previousThumbnailSet() {
    const prevSetStart = (currentThumbnailIndex - thumbnailsPerPage + totalThumbnails) % totalThumbnails;
    showThumbnailSet(prevSetStart);
}

// Function to show a specific set of thumbnail slides
function showThumbnailSet(startIndex) {
    showThumbnailSlide(startIndex);
    // Update the transform property to display the correct set of thumbnails
    thumbnailSlider.style.transform = `translateX(-${startIndex * (100 / totalThumbnails)}%)`;
}

// Initial display
showSlide(currentSlideIndex);
showThumbnailSet(currentThumbnailIndex);

// Set an interval to change the slide every 3 seconds
const mainCarouselInterval = setInterval(nextSlide, 3000);
