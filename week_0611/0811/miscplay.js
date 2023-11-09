window.addEventListener("DOMContentLoaded", function(){

    const mainSlide = document.querySelector(".main_slide_inner");
    const thumbSlide = document.querySelector(".thumb_slide_inner");
    const thumbSliderButton = document.querySelector(".thumb_slider_button");
    const thumbSlideItems = document.querySelectorAll(".thumb_slide_item");
    
        
    let currentSlideIndex = 0;
    let currentIndex = 0;
    let currentThumbIndex = 0;
    
      locations.forEach((location, index) => {
        const mainSlideItem = document.createElement("div");
        mainSlideItem.classList.add("main_slide_item");
        
        const thumbSlideItem = document.createElement("div");
        thumbSlideItem.classList.add("thumb_slide_item");
    
        mainSlideItem.innerHTML = `
        <div class="location_item">
          <div class="main-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
          </div>
          </div>
        `;
    
        mainSlide.appendChild(mainSlideItem);
        
        thumbSlideItem.innerHTML = `
        <div class="thumb_location_item">
        <div class="map_pin show-pin">&#9906;</div>
          <div class="thumb-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 thumb-location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
          </div>
          </div>
        `;
     
        thumbSlide.appendChild(thumbSlideItem);
        
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
    
    });




    ///////////////////////////////////////////////////////////////////////////////////
    function setupButtonEvents() {
        var nextButton = document.getElementById('slide-arrow-next');
        var prevButton = document.getElementById('slide-arrow-prev');
        let currentActiveIndex = 0;
      
        function updateActiveSlide(index) {
          // Update main carousel
          let mainSlides = document.querySelectorAll('.main_slide_item');
          mainSlides.forEach(slide => slide.classList.remove('active'));
          mainSlides[index].classList.add('active');
      
          // Update thumbnail carousel
          let thumbSlides = document.querySelectorAll('.thumb_slide_item');
          thumbSlides.forEach(slide => slide.classList.remove('active'));
          thumbSlides[index].classList.add('active');
      
          scrollToThumbnail(index);
        }
      
        function scrollToThumbnail(index) {
          // Assuming you have a container for the thumbnails which can scroll
          let thumbCarouselContainer = document.getElementById('thumbnailCarouselContainer');
          const thumbSlideItemWidth = thumbCarouselContainer.querySelector('.thumb_slide_item').getBoundingClientRect().width;
          let scrollPosition = thumbSlideItemWidth * index;
      
          thumbCarouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      
        nextButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex + 1) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        prevButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex - 1 + document.querySelectorAll('.main_slide_item').length) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        updateActiveSlide(currentActiveIndex); // Initialize carousels in sync
      }
      
      // Call this function at the end of your DOMContentLoaded event handler
      setupButtonEvents();
      


      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      function setupButtonEvents() {
        var nextButton = document.getElementById('slide-arrow-next');
        var prevButton = document.getElementById('slide-arrow-prev');
        let currentActiveIndex = 0;
      
        // Function to update both main and thumbnail slides
        function updateActiveSlide(index) {
          let mainSlides = document.querySelectorAll('.main_slide_item');
          let thumbSlides = document.querySelectorAll('.thumb_slide_item');
      
          if (mainSlides.length !== thumbSlides.length) {
            console.error('The number of main slides and thumbnail slides does not match.');
            return;
          }
      
          // Remove 'active' class from all slides and then add it to the current slide
          mainSlides.forEach(slide => slide.classList.remove('active'));
          thumbSlides.forEach(slide => slide.classList.remove('active'));
      
          mainSlides[index].classList.add('active');
          thumbSlides[index].classList.add('active');
      
          // Scroll to the active thumbnail if needed
          scrollToThumbnail(index);
        }
      
        // Function to scroll the thumbnail container to the current active slide
        function scrollToThumbnail(index) {
          let thumbCarouselContainer = document.getElementById('thumbnailCarouselContainer');
          const thumbSlideItemWidth = thumbCarouselContainer.querySelector('.thumb_slide_item').getBoundingClientRect().width;
          let scrollPosition = thumbSlideItemWidth * index - thumbCarouselContainer.offsetWidth / 2 + thumbSlideItemWidth / 2;
      
          thumbCarouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      
        // Event listener for the 'next' button
        nextButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex + 1) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        // Event listener for the 'previous' button
        prevButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex - 1 + document.querySelectorAll('.main_slide_item').length) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        // Initialize the first slide as active
        updateActiveSlide(currentActiveIndex);
      }
      
      // Call the function to set up the event listeners after the DOM has fully loaded.
      document.addEventListener('DOMContentLoaded', function () {
        // ... (other initialization code)
      
        // Call this function at the end of your DOMContentLoaded event handler
        setupButtonEvents();
      });
      

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      function setupButtonEvents() {
        var nextButton = document.getElementById('slide-arrow-next');
        var prevButton = document.getElementById('slide-arrow-prev');
        let currentActiveIndex = 0;
      
        // function updateActiveSlide(index) {
        //   // Update main carousel
        //   let mainSlides = document.querySelectorAll('.main_slide_item');
        //   mainSlides.forEach(slide => slide.classList.remove('active'));
        //   mainSlides[index].classList.add('active');
      
        //   // Update thumbnail carousel
        //   let thumbSlides = document.querySelectorAll('.thumb_slide_item');
        //   thumbSlides.forEach(slide => slide.classList.remove('active'));
        //   thumbSlides[index].classList.add('active');
      
        //   scrollToThumbnail(index);
        // }

        function updateActiveSlide(index) {
          let mainSlides = document.querySelectorAll('.main_slide_item');
          let thumbSlides = document.querySelectorAll('.thumb_slide_item');

          if (mainSlides.length !== thumbSlides.length) {
            console.error('The number of main slides and thumbnail slides does not match.');
            return;
          }

          // Remove 'active' class from all slides and then add it to the current slide
          mainSlides.forEach(slide => slide.classList.remove('active'));
          thumbSlides.forEach(slide => slide.classList.remove('active'));

          mainSlides[index].classList.add('active');
          thumbSlides[index].classList.add('active');

          // Scroll to the active thumbnail if needed
          scrollToThumbnail(index);
        }
      
        function scrollToThumbnail(index) {
          // Assuming you have a container for the thumbnails which can scroll
          let thumbCarouselContainer = document.getElementById('thumbnailCarouselContainer');
          const thumbSlideItemWidth = thumbCarouselContainer.querySelector('.thumb_slide_item').getBoundingClientRect().width;
          // let scrollPosition = thumbSlideItemWidth * index;
          let scrollPosition = thumbSlideItemWidth * index - thumbCarouselContainer.offsetWidth / 2 + thumbSlideItemWidth / 2;
      
          thumbCarouselContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      
        nextButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex + 1) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        prevButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex - 1 + document.querySelectorAll('.main_slide_item').length) % document.querySelectorAll('.main_slide_item').length;
          updateActiveSlide(currentActiveIndex);
        });
      
        // updateActiveSlide(0); // initialise [0] index array/ item with active class
        updateActiveSlide(currentActiveIndex); // Initialize carousels in sync
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const locations = [
        {
            id: '1',
            title: 'One',
            image: 'https://placehold.co/1920x1080?text=One',
            ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
        },
        {
            id: '2',
            title: 'Two',
            image: 'https://placehold.co/1920x1080?text=Two',
            ctaLink: 'https://en.wikipedia.org/wiki/Hove'
        },
        {
            id: '3',
            title: 'Three',
            image: 'https://placehold.co/1920x1080?text=Three',
            ctaLink: 'https://en.wikipedia.org/wiki/London'
        },
        {
            id: '4',
            title: 'Four',
            image: 'https://placehold.co/1920x1080?text=Four',
            ctaLink: 'https://en.wikipedia.org/wiki/Crouch_End'
        },
        {
            id: '5',
            title: 'Five',
            image: 'https://placehold.co/1920x1080?text=Five',
            ctaLink: 'https://en.wikipedia.org/wiki/Battersea'
        },
        {
            id: '6',
            title: 'Six',
            image: 'https://placehold.co/1920x1080?text=Six',
            ctaLink: 'https://en.wikipedia.org/wiki/Hackney'
        },
        {
            id: '7',
            title: 'Seven',
            image: 'https://placehold.co/1920x1080?text=Seven',
            ctaLink: 'https://en.wikipedia.org/wiki/Hammersmith'
        },
        {
            id: '8',
            title: 'Eight',
            image: 'https://placehold.co/1920x1080?text=Eight',
            ctaLink: 'https://en.wikipedia.org/wiki/Putney'
        },
        {
            id: '9',
            title: 'Nine',
            image: 'https://placehold.co/1920x1080?text=Nine',
            ctaLink: 'https://en.wikipedia.org/wiki/Archway'
        },
        {
            id: '10',
            title: 'Ten',
            image: 'https://placehold.co/1920x1080?text=Ten',
            ctaLink: 'https://en.wikipedia.org/wiki/Nunhead'
        },
          {
            id: '11',
            title: 'Eleven',
            image: 'https://placehold.co/1920x1080?text=Eleven',
            ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
        },
        {
            id: '12',
            title: 'Twelve',
            image: 'https://placehold.co/1920x1080?text=Twelve',
            ctaLink: 'https://en.wikipedia.org/wiki/Hove'
        },
        {
            id: '13',
            title: 'Thirteen',
            image: 'https://placehold.co/1920x1080?text=Thirteen',
            ctaLink: 'https://en.wikipedia.org/wiki/London'
        },
        {
            id: '14',
            title: 'Fourteen',
            image: 'https://placehold.co/1920x1080?text=Fourteen',
            ctaLink: 'https://en.wikipedia.org/wiki/Crouch_End'
        },
        {
            id: '15',
            title: 'Fifteen',
            image: 'https://placehold.co/1920x1080?text=Fifteen',
            ctaLink: 'https://en.wikipedia.org/wiki/Battersea'
        },
    ];
    
    window.addEventListener("DOMContentLoaded", function(){
    
    const mainSlide = document.querySelector(".main_slide_inner");
    const thumbSlide = document.querySelector(".thumb_slide_inner");
    const thumbSliderButton = document.querySelector(".thumb_slider_button");
    const thumbSlideItems = document.querySelectorAll(".thumb_slide_item");
    
        
    let currentSlideIndex = 0;
    let currentIndex = 0;
    let currentThumbIndex = 0;
    
      locations.forEach((location, index) => {
        const mainSlideItem = document.createElement("div");
        mainSlideItem.classList.add("main_slide_item");
        
        const thumbSlideItem = document.createElement("div");
        thumbSlideItem.classList.add("thumb_slide_item");
    
        mainSlideItem.innerHTML = `
        <div class="location_item">
          <div class="main-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
          </div>
          </div>
        `;
    
        mainSlide.appendChild(mainSlideItem);
        
        thumbSlideItem.innerHTML = `
        <div class="thumb_location_item">
        <div class="map_pin show-pin">&#9906;</div>
          <div class="thumb-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 thumb-location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
          </div>
          </div>
        `;
     
        thumbSlide.appendChild(thumbSlideItem);
        
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
    
    });





    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    window.addEventListener("DOMContentLoaded", function(){
    
    const mainSlide = document.querySelector(".main_slide_inner");
    const thumbSlide = document.querySelector(".thumb_slide_inner");
    const thumbSliderButton = document.querySelector(".thumb_slider_button");
    const thumbSlideItems = document.querySelectorAll(".thumb_slide_item");
    
        
    let currentSlideIndex = 0;
    let currentIndex = 0;
    let currentThumbIndex = 0;
    
      locations.forEach((location, index) => {
        const mainSlideItem = document.createElement("div");
        mainSlideItem.classList.add("main_slide_item");
        
        const thumbSlideItem = document.createElement("div");
        thumbSlideItem.classList.add("thumb_slide_item");
    
        mainSlideItem.innerHTML = `
        <div class="location_item">
          <div class="main-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="cta-link"><span>Go</span></a>
          </div>
          </div>
        `;
    
        mainSlide.appendChild(mainSlideItem);
        
        thumbSlideItem.innerHTML = `
        <div class="thumb_location_item">
        <div class="map_pin show-pin">&#9906;</div>
          <div class="thumb-image-slide" style="background-image: url('${location.image}')">
            <p class="h5 thumb-location-title">${location.title}</p>
            <a href="${location.ctaLink}" class="thumb-cta-link show-go"><span class="go-button">Go</span><span class="go-arrow">&#8702;</span></a>
          </div>
          </div>
        `;
     
        thumbSlide.appendChild(thumbSlideItem);
        
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
    
    });