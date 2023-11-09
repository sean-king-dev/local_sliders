window.addEventListener("DOMContentLoaded", function(){
    // Select all the main_fade_slide elements
  var slides = document.querySelectorAll('.main_fade_slide');
  
  // Initialize an empty array to hold the JSON objects
  var jsonArray = [];
  
  // Loop through each slide and extract the relevant data
  slides.forEach(function(slide) {
      var jsonObj = {
          desktop: {
              link: slide.querySelector('.main_slide_item').getAttribute('data-link'),
              backgroundImage: slide.querySelector('.main_slide_item').style.backgroundImage.slice(4, -1).replace(/"/g, ""),
              image: slide.querySelector('.main_img_div').src,
              altText: slide.querySelector('.main_img_div').alt
          },
          mobile: {
              link: slide.querySelector('.mobile_slide_item').getAttribute('data-link'),
              backgroundImage: slide.querySelector('.mobile_slide_item').style.backgroundImage.slice(4, -1).replace(/"/g, ""),
              image: slide.querySelector('.mobile_img_div').src,
              altText: slide.querySelector('.mobile_img_div').alt
          },
          thumbnail: {
              link: slide.querySelector('.thumb_link').getAttribute('href'),
              image: slide.querySelector('.thumb img').src,
              altText: slide.querySelector('.thumb img').alt,
              title: slide.querySelector('.thumb img').title
          }
      };
      jsonArray.push(jsonObj);
  });
  
  
  //
  function createCarousels(slidesArray) {
    // Function to create a desktop carousel slide
    const createDesktopSlide = (slide) => `
      <div class="main_slide_item" style="background-image: url('${slide.desktop.backgroundImage}');">
        <img class="main_img_div" src="${slide.desktop.image}" alt="${slide.desktop.altText}">
        <a href="${slide.desktop.link}"></a>
      </div>
    `;
  
    // Function to create a thumbnail carousel slide
    const createThumbnailSlide = (slide) => `
      <div class="thumb_slide_item" style="background-image: url('${slide.thumbnail.image}');">
        <div class="title">
          <p class="h4">
            <img src="${slide.thumbnail.image}" alt="${slide.thumbnail.altText}" title="${slide.thumbnail.title}">
          </p>
        </div>
        <a class="thumb_link" href="${slide.thumbnail.link}">Go</a>
      </div>
    `;
  
    // Start the carousels HTML with the opening div tags
    let desktopCarouselHTML = '<div class="desktop_carousel">';
    let thumbnailCarouselHTML = '<div class="thumbnail_carousel">';
  
    // Loop through each slide object and concatenate the HTML strings
    slidesArray.forEach((slide) => {
      desktopCarouselHTML += createDesktopSlide(slide);
      thumbnailCarouselHTML += createThumbnailSlide(slide);
    });
  
    // Close the div tags for each carousel
    desktopCarouselHTML += '</div>';
    thumbnailCarouselHTML += '</div>';
  
    // Return an object containing both carousel HTML strings
    return {
      desktopCarouselHTML,
      thumbnailCarouselHTML
    };
  }
  
  // Example usage:
  // Assuming slidesArray is an array of objects structured like the JSON described earlier
  const carouselsHTML = createCarousels(slidesArray);
  document.getElementById('desktopCarouselContainer').innerHTML = carouselsHTML.desktopCarouselHTML;
  document.getElementById('thumbnailCarouselContainer').innerHTML = carouselsHTML.thumbnailCarouselHTML;
  });
  
  


  function setupButtonEvents(carouselContainer, slideSelector) {
    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');
    var slides = carouselContainer.querySelectorAll(slideSelector);
    let currentActiveIndex = 0;

    nextButton.addEventListener('click', function() {
      currentActiveIndex = (currentActiveIndex + 1) % slides.length;
      updateActiveSlide(currentActiveIndex, slides);
    });

    prevButton.addEventListener('click', function() {
      currentActiveIndex = (currentActiveIndex - 1 + slides.length) % slides.length;
      updateActiveSlide(currentActiveIndex, slides);
    });

    function updateActiveSlide(index, slides) {
      // Remove active class from all slides
      slides.forEach(slide => slide.classList.remove('active'));
      // Add active class to the current slide
      slides[index].classList.add('active');
      scrollToThumbnail(slides, index, carouselContainer);
    }
  }


  // function setupButtonEvents(carouselContainer, slideSelector) {
//     var nextButton = document.getElementById('nextButton');
//     var prevButton = document.getElementById('prevButton');
//     var slides = carouselContainer.querySelectorAll(slideSelector);
//     let currentActiveIndex = 0;

//     nextButton.addEventListener('click', function() {
//       currentActiveIndex = (currentActiveIndex + 1) % slides.length;
//       updateActiveSlide(currentActiveIndex, slides);
//     });

//     prevButton.addEventListener('click', function() {
//       currentActiveIndex = (currentActiveIndex - 1 + slides.length) % slides.length;
//       updateActiveSlide(currentActiveIndex, slides);
//     });

//     function updateActiveSlide(index, slides) {
//       // Remove active class from all slides
//       slides.forEach(slide => slide.classList.remove('active'));
//       // Add active class to the current slide
//       slides[index].classList.add('active');
//       scrollToThumbnail(slides, index, carouselContainer);
//     }
//   }



















// window.addEventListener("DOMContentLoaded", function() {
//   // Select all the main_fade_slide elements
//   var slides = document.querySelectorAll('.main_fade_slide');
//   console.log('Number of slides found:', slides.length); // Check how many slides were found$()

//   // Initialize an empty array to hold the JSON objects
//   var jsonArray = [];

//   // Loop through each slide and extract the relevant data
//   slides.forEach(function(slide, index) {
//     // Added error handling for null elements
//     var mainSlideItem = slide.querySelector('.main_slide_item');
//     var mainImgDiv = slide.querySelector('.main_img_div');
//     var mobileSlideItem = slide.querySelector('.mobile_slide_item');
//     var mobileImgDiv = slide.querySelector('.mobile_img_div');
//     var thumbLink = slide.querySelector('.thumb_link');
//     var thumbImg = slide.querySelector('.thumb img');

//     if (!mainSlideItem || !mainImgDiv || !mobileSlideItem || !mobileImgDiv || !thumbLink || !thumbImg) {
//       console.error('Missing elements in slide number', index);
//       return; // Skip this iteration if elements are missing
//     }

//     var jsonObj = {
//       desktop: {
//         link: mainSlideItem.getAttribute('data-link'),
//         backgroundImage: mainSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
//         image: mainImgDiv.src,
//         altText: mainImgDiv.alt
//       },
//       mobile: {
//         link: mobileSlideItem.getAttribute('data-link'),
//         backgroundImage: mobileSlideItem.style.backgroundImage.slice(5, -2).replace(/"/g, ""),
//         image: mobileImgDiv.src,
//         altText: mobileImgDiv.alt
//       },
//       thumbnail: {
//         link: thumbLink.getAttribute('href'),
//         image: thumbImg.src,
//         altText: thumbImg.alt,
//         title: thumbImg.title
//       }
//     };
//     jsonArray.push(jsonObj);
//   });

//   if(jsonArray.length === 0) {
//     console.error('No slides were added to the array. Check the class names and HTML structure.');
//     return; // Stop execution if no slides were added
//   }

//   // The createCarousels function
//   function createCarousels(slidesArray) {
//     // Function to create a desktop carousel slide
//     const createDesktopSlide = (slide) => `
//       <div class="main_slide_item" style="background-image: url('${slide.desktop.backgroundImage}');">
//         <img class="main_img_div" src="${slide.desktop.image}" alt="${slide.desktop.altText}">
//         <a href="${slide.desktop.link}"></a>
//       </div>
//     `;

//     // Function to create a thumbnail carousel slide
//     const createThumbnailSlide = (slide) => `
//       <div class="thumb_slide_item">
//         <div class="thumb_item_location_wrapper">
//         <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
//         <p class="h5 location_title">${slide.thumbnail.title}</p>
//         <img src="${slide.thumbnail.image}" alt="${slide.thumbnail.altText}" title="${slide.thumbnail.title}">
      
//         <a href="${slide.thumbnail.link}" class="thumb_link thumb-cta-link-dynamic show-go">
//             <span class="go-button">Go</span>
//             <span class="go-arrow">&#8702;</span>
//           </a>
//           </div>
//       </div>
//     `;

//     // Start the carousels HTML with the opening div tags
//     let desktopCarouselHTML = '<div class="desktop_carousel">';
//     let thumbnailCarouselHTML = '<div class="thumbnail_carousel">';

//     // Loop through each slide object and concatenate the HTML strings
//     slidesArray.forEach((slide) => {
//       desktopCarouselHTML += createDesktopSlide(slide);
//       thumbnailCarouselHTML += createThumbnailSlide(slide);
//     });

//     // Close the div tags for each carousel
//     desktopCarouselHTML += '</div>';
//     thumbnailCarouselHTML += '</div>';

//     // Return an object containing both carousel HTML strings
//     return {
//       desktopCarouselHTML,
//       thumbnailCarouselHTML
//     };

//       // After generating the carousels
//   var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
//   var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');

//   if (desktopCarouselContainer && thumbnailCarouselContainer) {
//     desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
//     thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;

//     console.log('Carousels populated and navigation set up successfully.');
//   } else {
//     console.error('Carousel containers not found.');
//   }
//   }

//   // Call the createCarousels function with jsonArray
//   const carouselsHTML = createCarousels(jsonArray);

//   // Check if the container elements exist before trying to set their innerHTML
//   var desktopCarouselContainer = document.getElementById('desktopCarouselContainer');
//   var thumbnailCarouselContainer = document.getElementById('thumbnailCarouselContainer');

//   if (desktopCarouselContainer && thumbnailCarouselContainer) {
//     desktopCarouselContainer.innerHTML = carouselsHTML.desktopCarouselHTML;
//     thumbnailCarouselContainer.innerHTML = carouselsHTML.thumbnailCarouselHTML;

//  // Setup the interval to change the active class
//  setupCarouselInterval(desktopCarouselContainer, '.main_slide_item', 4000);
//     setupCarouselInterval(thumbnailCarouselContainer, '.thumb_slide_item', 4000, true);


//     console.log('Carousels populated successfully.');
//   } else {
//     console.error('Carousel containers not found.');
//   }

//   function setupCarouselInterval(carouselContainer, slideSelector, interval, isThumbnail = false) {
//   let currentActiveIndex = 0;
//   let slides = carouselContainer.querySelectorAll(slideSelector);

//   // Function to update the active slide
//   function updateActiveSlide() {
//     // Remove active class from all slides
//     slides.forEach(slide => slide.classList.remove('active'));
    
//     // Add active class to the current slide
//     slides[currentActiveIndex].classList.add('active');

//     // Scroll the thumbnail into view if it's a thumbnail carousel
//     if (isThumbnail) {
//         scrollToThumbnail(slides, currentActiveIndex, carouselContainer);
//       }
    
//     // Update the index for the next slide
//     currentActiveIndex = (currentActiveIndex + 1) % slides.length;

// function scrollToThumbnail(slides, index, container) {
//   // Calculate the width of a single thumbnail item
//   const thumbSlideItemWidth = slides[0].getBoundingClientRect().width;
  
//   // Calculate the width of the visible area of thumbnails (8 thumbnails in your case)
//   const visibleThumbsWidth = thumbSlideItemWidth * 8;
  
//   // Calculate the scroll position needed to ensure the active thumbnail is fully visible
//   // along with the next 7 thumbnails
//   let scrollPosition = thumbSlideItemWidth * index;
  
//   // Adjust the scroll position if the active thumbnail is beyond the 8th position
//   if (index >= 8) {
//     scrollPosition -= visibleThumbsWidth - thumbSlideItemWidth;
//   }

//   // Make sure the scrollPosition stays within bounds
//   const maxScrollPosition = container.scrollWidth - container.offsetWidth;
//   scrollPosition = Math.max(0, Math.min(maxScrollPosition, scrollPosition));

//   // Scroll smoothly to the calculated position
//   container.scrollTo({
//     left: scrollPosition,
//     behavior: 'smooth'
//   });
// }

//   }

//   // Initial call to set the first slide as active
//   updateActiveSlide();

//   // Set interval to periodically update the active slide
//   setInterval(updateActiveSlide, interval);
// }



// });