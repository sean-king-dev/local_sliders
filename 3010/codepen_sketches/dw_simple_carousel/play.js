const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let autoPlayInterval;
let currentSlide = 0;
const slideCount = document.querySelectorAll('.slide').length;

nextButton.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;

  if (currentSlide < 0) {
    currentSlide = slideCount - 1;
  } else if (currentSlide >= slideCount) {
    currentSlide = 0;
  }

  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft = currentSlide * slideWidth;
}

// Start auto play when the page loads
startAutoPlay();

// Stop auto play when the user interacts with the carousel
slidesContainer.addEventListener("mouseover", stopAutoPlay);
slidesContainer.addEventListener("mouseout", startAutoPlay);