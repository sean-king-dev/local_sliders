// ... (Your existing code)
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

// Function to create the main slider
function createMainSlider(slidesArray) {
    const createMainSlide = (slide) => `
      <div class="main_slide_item" style="background-image: url('${slide.desktop.backgroundImage}');">
        <img class="main_img_div" src="${slide.desktop.image}" alt="${slide.desktop.altText}">
        <a href="${slide.desktop.link}"></a>
      </div>
    `;
  
    let mainSliderHTML = '<div class="main_slider">';
  
    slidesArray.forEach((slide) => {
      mainSliderHTML += createMainSlide(slide);
    });
  
    mainSliderHTML += '</div>';
  
    return mainSliderHTML;
  }
  
  // Function to create the thumbnail carousel
  function createThumbnailCarousel(slidesArray) {
    const createThumbnailSlide = (slide) => `
      <div class="thumb_slide_item">
        <div class="thumb_item_location_wrapper">
          <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
          <p class="h5 location_title">${slide.thumbnail.title}</p>
          <img src="${slide.thumbnail.image}" alt="${slide.thumbnail.altText}" title="${slide.thumbnail.title}">
  
          <a href="${slide.thumbnail.link}" class="thumb_link thumb-cta-link-dynamic show-go">
            <span class="go-button">Go</span>
            <i class="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  
    let thumbnailCarouselHTML = '<div class="thumbnail_carousel">';
    let currentThumbnailIndex = 0;
  
    while (currentThumbnailIndex < slidesArray.length) {
      thumbnailCarouselHTML += '<div class="thumbnail_slide">';
      for (let i = 0; i < 8 && currentThumbnailIndex < slidesArray.length; i++) {
        thumbnailCarouselHTML += createThumbnailSlide(slidesArray[currentThumbnailIndex]);
        currentThumbnailIndex++;
      }
      thumbnailCarouselHTML += '</div>';
    }
  
    thumbnailCarouselHTML += '</div>';
  
    return thumbnailCarouselHTML;
  }
  
  const mainSliderHTML = createMainSlider(jsonArray);
  const thumbnailCarouselHTML = createThumbnailCarousel(jsonArray);
  
  // Insert the HTML into your document wherever you want the carousels to appear
  // For example, if you have elements with class 'main_slider_container' and 'thumbnail_slider_container':
  document.querySelector('.main_slider_container').innerHTML = mainSliderHTML;
  document.querySelector('.thumbnail_slider_container').innerHTML = thumbnailCarouselHTML;
  
  // ... (Rest of your existing code)
  