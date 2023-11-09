const thumblocations = document.querySelectorAll(".hidden_thumb_slide");
console.log(thumblocations);

const thumbSlideInner = document.querySelector(".thumb_slide_inner");

thumblocations.forEach((thumblocation_elements, index) => {
    console.log(thumblocations);
  let thumbImage = thumblocation_elements.querySelector(".thumb img")?.getAttribute("src");
  let thumbTitle = thumblocation_elements.querySelector(".title p.h4 img")?.getAttribute("title");
  let thumbLink = thumblocation_elements.querySelector(".thumb_link")?.getAttribute('data-link');

  if (thumbImage && thumbTitle && thumbLink) {
    
    
    thumbSlideItem.innerHTML = `
    <div class="thumb_slide_item">
      <div class="thumb_location_item" key="${index}">
        <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
        <div class="thumb-image-slide" style="background-image: url('${thumbImage}')">
          <p class="h5 thumb-location-title">${thumbTitle}</p>
          <a href="${thumbLink}" class="thumb-cta-link show-go">
            <span class="go-button">Go</span>
            <span class="go-arrow">&#8702;</span>
          </a>
        </div>
      </div>
      </div>
    `;
    
    // Assuming thumbSlide is the container element where you want to append the items
    // const thumbSlideInner = document.querySelector(".thumb_slide_inner"); // Replace with your actual container ID or class
    // thumbSlideItems.appendChild(thumbSlideItemData);
    thumbSlideInner.appendChild(thumbSlideItem);
  }
});