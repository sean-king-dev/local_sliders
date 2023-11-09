window.addEventListener("DOMContentLoaded", function () {

    // Get main slide wrapper
    let mainSlideContainer = document.querySelector(".main_fade_slide");

    // Create main slide div
    let mainImage = document.createElement("div");
    mainImage.setAttribute("class", "main_slide_item");
    mainSlideContainer.appendChild(mainImage);

    // Get thumbnail carousel wrapper
    let thumbSlideContainer = document.querySelector(".test-slides-container");

    // Create thumb slide inner carousel container div
    let thumbImageInner = document.createElement("div");
    thumbImageInner.setAttribute("class", "thumb-slide-inner");
    thumbSlideContainer.appendChild(thumbImageInner);

    // Loop through elements with class "hidden_thumb_slide"
    let hiddenThumbSlides = document.querySelectorAll(".hidden_thumb_slide");
    hiddenThumbSlides.forEach(function (hiddenThumbSlide, index) {

        // Get source data for thumb image, title, and link
        let thumbImage = hiddenThumbSlide.querySelector(".thumb img").getAttribute("src");
        let thumbTitle = hiddenThumbSlide.querySelector(".title p.h4 img").getAttribute("title");
        let thumbLink = hiddenThumbSlide.querySelector(".thumb_link").getAttribute('data-link');

        // Create thumb item HTML component
        let showMainSlide = `
            <div class="test-slide" data-slideindex=${index}>
                <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
                <div class="image-bg-div" style="background:url(${thumbImage});">
                    <p class="h4 main_title">${thumbTitle}</p>
                    <a href="${thumbLink}" class="ctalink go-button thumbnail_show_button" href="${thumbLink}"><span>Go</span><i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
        `;

        // Append dynamic HTML components to the inner slider carousel container
        thumbImageInner.innerHTML += showMainSlide;
    });

    let mainSlideItems = document.querySelectorAll(".main_slide_item");
    let thumbSlideItems = document.querySelectorAll(".test-slide");

    let mainSlideItemIndex = 0;
    let thumbSlideItemIndex = 0;

    function updateActiveClass() {
        mainSlideItems.forEach(item => item.classList.remove("active"));
        thumbSlideItems.forEach(item => item.classList.remove("active"));

        mainSlideItems[mainSlideItemIndex].classList.add("active");
        thumbSlideItems[thumbSlideItemIndex].classList.add("active");

        mainSlideItemIndex = (mainSlideItemIndex + 1) % mainSlideItems.length;
        thumbSlideItemIndex = (thumbSlideItemIndex + 1) % thumbSlideItems.length;

        // Check if the indexes have reached the end, and if so, set them to -1
        if (mainSlideItemIndex === 0 && thumbSlideItemIndex === 0) {
            mainSlideItemIndex = -1;
            thumbSlideItemIndex = -1;
        }
    }

    updateActiveClass();

    // Set interval for updating active class
    const interval = setInterval(updateActiveClass, 3000);

    // Clear the interval after a certain number of iterations (to stop at -1)
    const maxIterations = mainSlideItems.length + 1; // Adjust as needed
    let currentIteration = 0;

    function checkIterations() {
        currentIteration++;
        if (currentIteration >= maxIterations) {
            clearInterval(interval);
        }
    }

    // Initial call to interval
    checkIterations();
});
