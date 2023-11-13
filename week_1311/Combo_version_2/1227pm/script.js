document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Access the HTML content
    const section = document.querySelector('.purecontent');
    const mainSlides = section.querySelectorAll('.main_fade_slide');
  
    // Step 2: Create the main slide and thumbnail carousel using template literals
    let mainCarouselHTML = '';
    let thumbnailCarouselHTML = '';
  
    mainSlides.forEach((mainSlide, index) => {
      const mainSlideItem = mainSlide.querySelector('.main_slide_item');
      const thumbSlide = mainSlide.querySelector('.hidden_thumb_slide');
      const bannerImg = mainSlideItem.querySelector('.main_img_div'); 
  
      const mainImageURL = mainSlideItem.style.backgroundImage
        .replace('url(', '')
        .replace(')', '')
        .replace(/\"/gi, '');

      const bannerImageURL = bannerImg.src; 
      const mainLink = mainSlideItem.getAttribute('data-link');
      const thumbImageURL = thumbSlide.querySelector('img').src;
      const thumbLink = thumbSlide.querySelector('.thumb_link').getAttribute('data-link');
      const thumbTitle = thumbSlide.querySelector('img').getAttribute('title');
  
      mainCarouselHTML += `
        <div class="main_slide_item" data-link="${mainLink}" style="background-image:url(${mainImageURL});">
          <img class="main_img_div" src="${bannerImageURL}" alt="Location banner">
          <a href="${mainLink}"></a>
        </div>
      `;
  
      thumbnailCarouselHTML += `
        <div class="thumb_slide_item">
        <div class="map_pin show-pin">&#9906;</div>
          <p class="h4 location_title">${thumbTitle} </p>
          <img src="${thumbImageURL}" alt="Location Thumbnail" title="Thumbnail">
          <a class="thumb_link" href="${thumbLink}" data-link="${thumbLink}"><span>Go</span><span class="go-arrow-right">&xrarr;</span></a>
        </div>
      `;

    // Combine main carousel slide and thumbnail carousel slide HTML
    const mainCarouselInner = document.querySelector('.main_carousel_inner');
    const thumbnailCarouselInner = document.querySelector('.thumb_carousel_inner');
  
    mainCarouselInner.innerHTML = mainCarouselHTML;
    thumbnailCarouselInner.innerHTML = thumbnailCarouselHTML;
  });

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

  let slideInterval = setInterval(nextSlide, 2000);

  thumbSlide.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
  });

  thumbSlide.addEventListener("mouseleave", function () {
    slideInterval = setInterval(nextSlide, 2000);
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

//   
      });
  