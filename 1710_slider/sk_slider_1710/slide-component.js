window.addEventListener("load", function() {
    
    thumb_image = $(this).find(".thumb img").attr("src");
    thumb_title = $(this).find(".thumb img").attr("title");
    thumb_link = $(this).find(".location_banner").attr('data-link');

const slideInner = document.querySelector(".slide_inner");

const thumb_slide = document.createElement("div");
thumb_slide.setAttribute('class', 'thumb-slide');

slideInner.appendChild(thumb_slide);


    const showMainSlide = (() => {
    return `
        <div class="dynamic_slide_item">
          <div class="image-bg-div" style="background:url(${thumb_image});">
            <p class="h4 main_title" color="#333">${thumb_title}</p>
            <a class="ctalink go-button" href=${thumb_link}>Go</a>
          </div>
        </div>
    `;
    });

    slideInner.innerHTML = showMainSlide;


});