

// prev code
function activateMainSlide(index) {
    const mainSlideItems = document.querySelectorAll(".main_slide_item");
    mainSlideItems.forEach((item) => item.classList.remove("active"));
    mainSlideItems[index].classList.add("active");
  }
  
  function activateThumbnailSlide(index) {
    const thumbSlideItems = document.querySelectorAll(".thumb_slide_item");
    thumbSlideItems.forEach((item) => item.classList.remove("active"));
    thumbSlideItems[index].classList.add("active");

    // maximum scroll position to ensure the last items are fully visible
    const thumbSlideItemWidth = thumbSlideItems[0].offsetWidth;
    const thumbSliderButtonWidth = thumbSliderButton.offsetWidth;
    const totalWidth = thumbSlideItemWidth * locations.length;
    const maxScrollPosition = totalWidth - thumbSliderButtonWidth;

    // scroll position for the current item
    let scrollPosition = thumbSlideItemWidth * index;
    const centerOffset = thumbSliderButtonWidth / 1.15;

    // Adjust scrollPosition if the current item is one of the last few items
    if (index >= locations.length - 1) {
      scrollPosition = maxScrollPosition;
    } else if (index > 0) {
      scrollPosition -= centerOffset;
    }

    // make sure the scrollPosition stays within bounds
    scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition));

    thumbSlide.scrollLeft = scrollPosition;
  }

  function activateSlide(index) {
    activateMainSlide(index); // Apply active class to main slides
    activateThumbnailSlide(index); // Apply active class to thumbnail slides
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % locations.length;
    activateSlide(currentIndex);
  }

  let slideInterval = setInterval(nextSlide, 4000);

  thumbSlide.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
  });

  thumbSlide.addEventListener("mouseleave", function () {
    slideInterval = setInterval(nextSlide, 4000);
  });

  activateSlide(currentIndex);

  // Add these variables to your existing code
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  // Add event listeners to the previous and next buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + locations.length) % locations.length;
    activateSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % locations.length;
    activateSlide(currentIndex);
  });
