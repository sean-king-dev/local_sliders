window.addEventListener("DOMContentLoaded", function () {
    // main slider
    $(".main_fade_slide").each(function () {
        const images = document.querySelectorAll('.main_slide_item');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        images[currentImageIndex].classList.add('active');

        setInterval(showNextImage, 3000);
    })

    // thumbnail slider
    let slideInner = document.querySelector(".owl-two");
    const thumbImages = document.querySelectorAll('.test-slide'); // Select all thumbnail items
    const thumbnailContainer = document.querySelector('.owl-two'); // Select the container for thumbnail carousel

    function showNextThumbImage() {
        // Remove 'active' class from the current thumbnail
        thumbImages.forEach((thumb, index) => {
            thumb.classList.remove('active');
        });

        // Add 'active' class to the next thumbnail
        thumbImages[currentImageIndex].classList.add('active');

        currentImageIndex = (currentImageIndex + 1) % thumbImages.length;
    }

    let currentImageIndex = 0;
    thumbImages[currentImageIndex].classList.add('active');

    setInterval(showNextThumbImage, 3000);

    // Function to change the class of the thumbnail container
    function changeCarouselClass() {
        const carouselClasses = ['class1', 'class2', 'class3']; // Define your class names
        const currentClassIndex = carouselClasses.indexOf(thumbnailContainer.className);

        // Remove the current class
        thumbnailContainer.classList.remove(carouselClasses[currentClassIndex]);

        // Calculate the next class index
        const nextClassIndex = (currentClassIndex + 1) % carouselClasses.length;

        // Add the next class
        thumbnailContainer.classList.add(carouselClasses[nextClassIndex]);
    }

    // Set an interval to change the class of the thumbnail container every 3000ms
    setInterval(changeCarouselClass, 3000);

    // Function to change the class of the thumbnail slides
    function changeSlideClass() {
        const slideClasses = ['new-slide', 'old-slide']; // Define your slide class names
        const currentSlideClassIndex = slideClasses.indexOf(thumbImages[currentImageIndex].className);

        // Remove the current slide class
        thumbImages[currentImageIndex].classList.remove(slideClasses[currentSlideClassIndex]);

        // Calculate the next slide class index
        const nextSlideClassIndex = (currentSlideClassIndex + 1) % slideClasses.length;

        // Add the next slide class
        thumbImages[currentImageIndex].classList.add(slideClasses[nextSlideClassIndex]);
    }

    // Set an interval to change the class of the thumbnail slides every 3000ms
    setInterval(changeSlideClass, 3000);

    $('.owl-two').owlCarousel({
        lazyload: true,
        items: 1,
        rtl: false,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 10
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $('.play').on('click', function () {
        $('.owl-two').trigger('play.owl.autoplay', [1000]);
    });

    $('.stop').on('click', function () {
        $('.owl-two').trigger('stop.owl.autoplay');
    });
});
