function setupCarouselInterval(carouselContainer, slideSelector, interval, isThumbnail = false) {
    let currentActiveIndex = 0;
    let slides = carouselContainer.querySelectorAll(slideSelector);
 
    function updateActiveSlide() {
      
      slides.forEach(slide => slide.classList.remove('active'));
      slides[currentActiveIndex].classList.add('active');

      
      if (isThumbnail) {
        scrollToThumbnail(slides, currentActiveIndex, carouselContainer);
      }
    
      currentActiveIndex = (currentActiveIndex + 1) % slides.length;

        function scrollToThumbnail(slides, index, container) {
          // Get the thumbnail item and its dimensions
          const thumbSlideItem = slides[index];
          const thumbSlideItemRect = thumbSlideItem.getBoundingClientRect();
          const thumbSlideItemWidth = thumbSlideItemRect.width;
          const containerRect = container.getBoundingClientRect();

          // Calculate the scroll position to center the thumbnail in the container
          const centerPosition = thumbSlideItemRect.left - containerRect.left + thumbSlideItemWidth / 3;
          const containerCenter = containerRect.width / 3;
          let scrollPosition = container.scrollLeft + centerPosition - containerCenter;

          // Adjust the scroll position so it's within the valid range
          const maxScrollPosition = container.scrollWidth - container.offsetWidth;
          scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition));

          // // Use scrollIntoView for smooth scrolling
          // thumbSlideItem.scrollIntoView({
          //   behavior: 'smooth',
          //   inline: 'end',
          //   block: 'center'
          // });

          // // Use scrollTo for smooth scrolling
          // thumbSlideItem.scrollTo({
          //   behavior: 'smooth',
          //   left: thumbSlideItem.offsetLeft,
          //   top: thumbSlideItem.offsetTop - (window.innerHeight - thumbSlideItem.clientHeight) / 2
          // });

          // const thumbnailSlideItem = document.querySelector(".thumb_slide_item");
          
          // thumbnailSlideItem.scrollTo({
          //   behavior: "smooth",
          //   left: thumbSlideItem.offsetLeft,
          //   top: thumbSlideItem.offsetTop -(window.innerHeight - thumbSlideItem.clientHeight)/ 2,
          // })
        
        }
    
////////////////////////////////////////////////////////
      // function scrollToThumbnail(slides, index, container) {
      //   const thumbSlideItem = slides[index];

      //   // Use scrollIntoView for smooth scrolling
      //   thumbSlideItem.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'nearest',
      //     inline: 'nearest',
      //     preventScroll: true
      //   });
      // }
//////////////////////////////////////////////////////////////////////////////////////
    }
    
    updateActiveSlide();
 
    setInterval(updateActiveSlide, interval);
  }




      // // Use scrollIntoView for smooth scrolling
              // thumbSlideItem.scrollIntoView({
              //   behavior: 'smooth',
              //   inline: 'nearest',
              //   block: 'center'
              // });

              // container.scrollLeft = scrollPosition;