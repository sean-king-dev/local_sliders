document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;
    let intervalId;

    // Function to display the current slide and highlight the corresponding thumbnail
    function showSlide(index) {
        slides.forEach((slide) => slide.style.display = "none");
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));

        // display the current slide
        slides[index].style.display = "block";
        thumbnails[index].classList.add("active");

        // //show/ hide the 6 number
        // thumbnails.forEach((thumbnail, i) => {
        //     if( i >= index && i < index +6) {
        //         thumbnail.style.display = "block";
        //     } else {
        //         thumbnail.style.display = "none";
        //     }
        // })

        // Show/hide the 6 thumbnails based on the current index
        thumbnails.forEach((thumbnail, i) => {
            let thumbnailIndex = (index + i) % thumbnails.length;
            thumbnail.style.display = "block";
            thumbnail.addEventListener("click", () => {
                currentIndex = thumbnailIndex;
                showSlide(currentIndex);
            });
        });
    }

    // Function to handle the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Function to handle the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Add event listeners to prev and next buttons
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Add event listeners to thumbnails to navigate to corresponding slide
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Function to start autoplay
    function startAutoplay() {
        intervalId = setInterval(nextSlide, 1500); // Change slide every 3 seconds
    }

    // Function to stop autoplay
    function stopAutoplay() {
        clearInterval(intervalId);
    }

    // Start autoplay when the page loads
    startAutoplay();

    // Pause autoplay when the user hovers over the carousel
    document.querySelector(".carousel-container").addEventListener("mouseover", stopAutoplay);

    // Resume autoplay when the user leaves the carousel
    document.querySelector(".carousel-container").addEventListener("mouseout", startAutoplay);

    // Show the initial slide
    showSlide(currentIndex);
});
