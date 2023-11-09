
    window.addEventListener("DOMContentLoaded", function () {
      
      var slides = document.querySelectorAll('.main_fade_slide');
      console.log('Number of slides found:', slides.length); 
  
      
      var jsonArray = [];
  
      
      slides.forEach(function (slide, index) {
        
        var mainSlideItem = slide.querySelector('.main_slide_item');
        var mainImgDiv = slide.querySelector('.main_img_div');
        var mobileSlideItem = slide.querySelector('.mobile_slide_item');
        var mobileImgDiv = slide.querySelector('.mobile_img_div');
        var thumbLink = slide.querySelector('.thumb_link');
        var thumbImg = slide.querySelector('.thumb img');
  
        if (!mainSlideItem || !mainImgDiv || !mobileSlideItem || !mobileImgDiv || !thumbLink || !thumbImg) {
          console.error('Missing elements in slide number', index);
          return; 
        }
  
        var jsonObj = {
          desktop: {
            link: mainSlideItem.getAttribute('data-link'),
            backgroundImage: mainSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
            image: mainImgDiv.src,
            altText: mainImgDiv.alt
          },
          mobile: {
            link: mobileSlideItem.getAttribute('data-link'),
            backgroundImage: mobileSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
            image: mobileImgDiv.src,
            altText: mobileImgDiv.alt
          },
          thumbnail: {
            link: thumbLink.getAttribute('href'),
            image: thumbImg.src,
            altText: thumbImg.alt,
            title: thumbImg.title
          }
        };
        jsonArray.push(jsonObj);
      });
  
      if (jsonArray.length === 0) {
        console.error('No slides were added to the array. Check the class names and HTML structure.');
        return; 
      }
  
      
      function createCarousels(slidesArray) {
        
        const createDesktopSlide = (slide) => `
        <div class="main_slide_item" style="background-image: url('${slide.desktop.backgroundImage}');">
          <img class="main_img_div" src="${slide.desktop.image}" alt="${slide.desktop.altText}">
          <a href="${slide.desktop.link}"></a>
        </div>
      `;
  
        
        const createThumbnailSlide = (slide) => `
        <div class="thumb_slide_item">
          <div class="thumb_item_location_wrapper">
          <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
          <p class="h5 location_title">${slide.thumbnail.title}</p>
          <img src="${slide.thumbnail.image}" alt="${slide.thumbnail.altText}" title="${slide.thumbnail.title}">
        
          <a href="${slide.thumbnail.link}" class="thumb_link thumb-cta-link-dynamic show-go">
              <span class="go-button">Go</span>
              <span class="go-arrow">&#8702;</span>
            </a>
            </div>
        </div>
      `;
  
        
        let desktopCarouselHTML = '<div class="desktop_carousel">';
        let thumbnailCarouselHTML = '<div class="thumbnail_carousel">';
  
        
        slidesArray.forEach((slide) => {
          desktopCarouselHTML += createDesktopSlide(slide);
          thumbnailCarouselHTML += createThumbnailSlide(slide);
        });
  
        
        desktopCarouselHTML += '</div>';
        thumbnailCarouselHTML += '</div>';
  
        
        return {
          desktopCarouselHTML,
          thumbnailCarouselHTML
        };
  
        
        var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
        var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');
  
        if (desktopCarouselContainer && thumbnailCarouselContainer) {
          desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
          thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;
  
          console.log('Carousels populated and navigation set up successfully.');
        } else {
          console.error('Carousel containers not found.');
        }
      }
  
      
      const carouselsHTML = createCarousels(jsonArray);
  
      
      var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
      var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');
  
      if (desktopCarouselContainer && thumbnailCarouselContainer) {
        desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
        thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;
      } else {
        console.error('Carousel containers not found.');
        return;
      }
  
      
      setupCarouselInterval(desktopCarouselContainer, '.main_slide_item', 4000);
      setupCarouselInterval(thumbnailCarouselContainer, '.thumb_slide_item', 4000, true);
  
      
      setupButtonEvents(thumbnailCarouselContainer, '.thumb_slide_item');
  
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
            
            const thumbSlideItemWidth = slides[0].getBoundingClientRect().width;
  
            
            const visibleThumbsWidth = thumbSlideItemWidth * 8;
  
            
            
            let scrollPosition = thumbSlideItemWidth * index;
  
            
            if (index >= 8) {
              scrollPosition -= visibleThumbsWidth - thumbSlideItemWidth;
            }
  
            
            const maxScrollPosition = container.scrollWidth - container.offsetWidth;
            scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition));
  
            
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
  
        }
  
        
        updateActiveSlide();
  
        
        setInterval(updateActiveSlide, interval);
      }
  
      
      function setupButtonEvents(carouselContainer, slideSelector) {
        var nextButton = document.getElementById('slide-arrow-next');
        var prevButton = document.getElementById('slide-arrow-prev');
        var slides = carouselContainer.querySelectorAll(slideSelector);
        let currentActiveIndex = 0;
  
        
        function updateActiveSlide(index) {
          
          slides.forEach(slide => slide.classList.remove('active'));
          
          slides[index].classList.add('active');
          
  
          if (isThumbnail) {
            scrollToThumbnail(slides, index, carouselContainer);
          }
        }
  
        nextButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex + 1) % slides.length;
          updateActiveSlide(currentActiveIndex);
        });
  
        prevButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex - 1 + slides.length) % slides.length;
          updateActiveSlide(currentActiveIndex);
        });
      }
  
  
      function scrollToThumbnail(slides, index, container) {
        
        const thumbSlideItemWidth = slides[0].getBoundingClientRect().width;
  
        
        const visibleThumbsWidth = thumbSlideItemWidth * 8;
  
        
        
        let scrollPosition = thumbSlideItemWidth * index;
  
        
        if (index >= 8) {
          scrollPosition -= visibleThumbsWidth - thumbSlideItemWidth;
        }
  
        
        const maxScrollPosition = container.scrollWidth - container.offsetWidth;
        scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition));
  
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
  
      
      updateActiveSlide(0);
    });
  
  window.addEventListener("DOMContentLoaded", function () {
      
      var slides = document.querySelectorAll('.main_fade_slide');
      console.log('Number of slides found:', slides.length); 
      
      var jsonArray = [];
  
      slides.forEach(function (slide, index) {
        
        var mainSlideItem = slide.querySelector('.main_slide_item');
        var mainImgDiv = slide.querySelector('.main_img_div');
        var mobileSlideItem = slide.querySelector('.mobile_slide_item');
        var mobileImgDiv = slide.querySelector('.mobile_img_div');
        var thumbLink = slide.querySelector('.thumb_link');
        var thumbImg = slide.querySelector('.thumb img');
  
        // error checking
        if (!mainSlideItem || !mainImgDiv || !mobileSlideItem || !mobileImgDiv || !thumbLink || !thumbImg) {
          console.error('Missing elements in slide number', index);
          return; 
        }
  
        var jsonObj = {
          desktop: {
            link: mainSlideItem.getAttribute('data-link'),
            backgroundImage: mainSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
            image: mainImgDiv.src,
            altText: mainImgDiv.alt
          },
          mobile: {
            link: mobileSlideItem.getAttribute('data-link'),
            backgroundImage: mobileSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
            image: mobileImgDiv.src,
            altText: mobileImgDiv.alt
          },
          thumbnail: {
            link: thumbLink.getAttribute('href'),
            image: thumbImg.src,
            altText: thumbImg.alt,
            title: thumbImg.title
          }
        };
        jsonArray.push(jsonObj);
      });
  
      if (jsonArray.length === 0) {
        console.error('No slides were added to the array. Check the class names and HTML structure.');
        return; 
      }
   
      function createCarousels(slidesArray) {
        
        const createDesktopSlide = (slide) => `
        <div class="main_slide_item" style="background-image: url('${slide.desktop.backgroundImage}');">
          <img class="main_img_div" src="${slide.desktop.image}" alt="${slide.desktop.altText}">
          <a href="${slide.desktop.link}"></a>
        </div>
      `;
        
        const createThumbnailSlide = (slide) => `
        <div class="thumb_slide_item">
          <div class="thumb_item_location_wrapper">
          <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
          <p class="h5 location_title">${slide.thumbnail.title}</p>
          <img src="${slide.thumbnail.image}" alt="${slide.thumbnail.altText}" title="${slide.thumbnail.title}">
        
          <a href="${slide.thumbnail.link}" class="thumb_link thumb-cta-link-dynamic show-go">
              <span class="go-button">Go</span>
              <span class="go-arrow">&#8702;</span>
            </a>
            </div>
        </div>
      `;
  
        
        let desktopCarouselHTML = '<div class="desktop_carousel">';
        let thumbnailCarouselHTML = '<div class="thumbnail_carousel">';
  
        
        slidesArray.forEach((slide) => {
          desktopCarouselHTML += createDesktopSlide(slide);
          thumbnailCarouselHTML += createThumbnailSlide(slide);
        });
       
        desktopCarouselHTML += '</div>';
        thumbnailCarouselHTML += '</div>';
       
        return {
          desktopCarouselHTML,
          thumbnailCarouselHTML
        };
  
        
        var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
        var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');
  
        if (desktopCarouselContainer && thumbnailCarouselContainer) {
          desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
          thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;
  
          console.log('Carousels populated and navigation set up successfully.');
        } else {
          console.error('Carousel containers not found.');
        }
      }
        
      const carouselsHTML = createCarousels(jsonArray);
   
      var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
      var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');
  
      if (desktopCarouselContainer && thumbnailCarouselContainer) {
        desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
        thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;
      } else {
        console.error('Carousel containers not found.');
        return;
      }
    
      setupCarouselInterval(desktopCarouselContainer, '.main_slide_item', 4000);
      setupCarouselInterval(thumbnailCarouselContainer, '.thumb_slide_item', 4000, true);
       
      setupButtonEvents(thumbnailCarouselContainer, '.thumb_slide_item');
  
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
            
            const thumbSlideItemWidth = slides[0].getBoundingClientRect().width;            
            const visibleThumbsWidth = thumbSlideItemWidth * 8;
            let scrollPosition = thumbSlideItemWidth * index;
  
            
            if (index >= 8) {
              scrollPosition -= visibleThumbsWidth - thumbSlideItemWidth;
            }
              
            const maxScrollPosition = container.scrollWidth - container.offsetWidth;
            scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition)); 
            
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
  
        }
        
        updateActiveSlide();
     
        setInterval(updateActiveSlide, interval);
      }
       
      function setupButtonEvents(carouselContainer, slideSelector) {
        var nextButton = document.getElementById('slide-arrow-next');
        var prevButton = document.getElementById('slide-arrow-prev');
        var slides = carouselContainer.querySelectorAll(slideSelector);
        let currentActiveIndex = 0;
  
        function updateActiveSlide(index) {
          
          slides.forEach(slide => slide.classList.remove('active'));
          
          slides[index].classList.add('active');     
  
          if (isThumbnail) {
            scrollToThumbnail(slides, index, carouselContainer);
          }
        }
  
        nextButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex + 1) % slides.length;
          updateActiveSlide(currentActiveIndex);
        });
  
        prevButton.addEventListener('click', function () {
          currentActiveIndex = (currentActiveIndex - 1 + slides.length) % slides.length;
          updateActiveSlide(currentActiveIndex);
        });
      }
      
      updateActiveSlide(0); // initialise [0] index array/ item with active class
    });