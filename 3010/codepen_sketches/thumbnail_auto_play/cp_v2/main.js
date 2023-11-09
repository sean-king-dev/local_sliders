// // v1 basic handles
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// v2 autoplay
const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");

        let autoPlayInterval;

        nextButton.addEventListener("click", () => {
          nextSlide();
        });

        prevButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft -= slideWidth;
        });

        function nextSlide() {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft += slideWidth;
        }

        function startAutoPlay() {
          autoPlayInterval = setInterval(() => {
            nextSlide();
          }, 3000);
        }

        function stopAutoPlay() {
          clearInterval(autoPlayInterval);
        }

        // Start auto play when the page loads
        startAutoPlay();

        // Stop auto play when the user interacts with the carousel
        slidesContainer.addEventListener("mouseover", stopAutoPlay);
        slidesContainer.addEventListener("mouseout", startAutoPlay);

