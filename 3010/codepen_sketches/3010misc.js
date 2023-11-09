const sk_slidesContainer = document.getElementById("sk_slides-container");
        const sk_slide = document.querySelectorAll(".sk_slide");
        const sk_prevButton = document.getElementById("sk_slide-arrow-prev");
        const sk_nextButton = document.getElementById("sk_slide-arrow-next");

        let currentSlide = 0;
        const slideCount = sk_slide.length;
        let interval;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            goToSlide(currentSlide);
        }

        function goToSlide(slideIndex) {
            const slideWidth = sk_slide[0].clientWidth;
            sk_slidesContainer.scrollLeft = slideIndex * slideWidth;
        }

        sk_nextButton.addEventListener("click", () => {
            nextSlide();
        });

        sk_prevButton.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            goToSlide(currentSlide);
        });

        function startAutoPlay() {
            interval = setInterval(() => {
                nextSlide();
            }, 3000);
        }

        function stopAutoPlay() {
            clearInterval(interval);
        }

        // Start auto play when the page loads
        startAutoPlay();

        // Stop auto play when the user interacts with the carousel
        sk_slidesContainer.addEventListener("mouseover", stopAutoPlay);
        sk_slidesContainer.addEventListener("mouseout", startAutoPlay);


        // 3110 misc

                // let slideInner = document.querySelector(".test-slides-container");
       
        // $(".hidden_thumb_slide").each(function (index) {
        //     thumb_image = $(this).find(".thumb img").attr("src");
        //     thumb_title = $(this).find(".title p.h4 img").attr("title");
        //     thumb_link = $(this).find(".thumb_link").attr('data-link');
            
        //     let showThumbSlide = `
        //         <div class="sk_slide" data-slideindex=${index}>
        //             <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
        //             <div class="image-bg-div" style="background:url(${thumb_image});">
        //                 <p class="h4 main_title" onclick="currentSlide(${index})">${thumb_title}</p>
        //                 <a class="ctalink go-button thumbnail_show_button" href="${thumb_link}">Go</a>
        //             </div>
        //         </div>
        //     `;
        
        //     slideContainerID.innerHTML += showThumbSlide;

        //       });



        // add autoplay one at a time
        // ... (previous code)

let sk_activeSlide = 0;

function updateActiveSlide() {
  // Remove the "active" class from all slides
  sk_slide.forEach((slide, index) => {
    if (index === sk_activeSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

// Call the updateActiveSlide function to set the initial active slide
updateActiveSlide();

sk_nextButton.addEventListener("click", () => {
  sk_nextSlide();
  sk_activeSlide = (sk_activeSlide + 1) % sk_slideCount;
  updateActiveSlide();
});

sk_prevButton.addEventListener("click", () => {
  sk_currentSlide = (sk_currentSlide - 1 + sk_slideCount) % sk_slideCount;
  sk_goToSlide(sk_currentSlide);
  sk_activeSlide = sk_currentSlide;
  updateActiveSlide();
});

// ... (rest of your code)


// 3110 1549pm
let slideInner = document.querySelector(".test-slides-container");
        // let slideInner = document.querySelector(".slider-inner");

        $(".hidden_thumb_slide").each(function (index) {
            thumb_image = $(this).find(".thumb img").attr("src");
            thumb_title = $(this).find(".title p.h4 img").attr("title");
            thumb_link = $(this).find(".thumb_link").attr('data-link');

            let showMainSlide = `
                <div class="test-slide" data-slideindex=${index}>
                    <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
                    <div class="image-bg-div" style="background:url(${thumb_image});">
                        <p class="h4 main_title">${thumb_title}</p>
                        <a href="${thumb_link}" class="ctalink go-button thumbnail_show_button" href="${thumb_link}"><span>Go</span><i class="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            `;

            slideInner.innerHTML += showMainSlide;

            // thumbnail slider
            const thumbImages = document.querySelectorAll('.test-slide');
            let currentThumbImageIndex = 0;

            function showNextThumbImage() {
                thumbImages[currentThumbImageIndex].classList.remove('active');
                currentThumbImageIndex = (currentThumbImageIndex + 1) % thumbImages.length;
                // console.log(currentThumbImageIndex);
                thumbImages[currentThumbImageIndex].classList.add('active');
            }

            thumbImages[currentThumbImageIndex].classList.add('active');

            setInterval(showNextThumbImage, 3000);

            // console.log(currentThumbImageIndex);

        });


