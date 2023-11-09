window.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slideInterval = 3000; // Set the interval in milliseconds

    // Function to add the 'active-slide' class to the current slide
    function activateNextSlide() {
        const slides = document.querySelectorAll('.test-slide');

        // Remove the 'active-slide' class from all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active-slide');
        }

        // Add the 'active-slide' class to the next slide
        slides[slideIndex].classList.add('active-slide');

        // Increment the slide index and loop back to the first slide if needed
        slideIndex = (slideIndex + 1) % slides.length;
    }

    // Activate the next slide at the specified interval
    setInterval(activateNextSlide, slideInterval);
});
