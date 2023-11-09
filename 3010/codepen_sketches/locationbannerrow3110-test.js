
    // var $Li = 1;
       
        window.addEventListener("load", function(){

        // main slider
        $(".main_fade_slide").each( function(){

            const images = document.querySelectorAll('.main_slide_item');
            let currentImageIndex = 0;

            function showNextImage(){
                images[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].classList.add('active');
            }

            images[currentImageIndex].classList.add('active');

            setInterval(showNextImage, 3000);
        })
        
        // thumbnail slider
        let slideInner = document.querySelector(".test-slides-container");
       
        $(".hidden_thumb_slide").each(function (index) {
            thumb_image = $(this).find(".thumb img").attr("src");
            thumb_title = $(this).find(".title p.h4 img").attr("title");
            thumb_link = $(this).find(".thumb_link").attr('data-link');
            
            let showMainSlide = `
                <div class="test-slide" data-slideindex=${index}>
                    <div class="ThumbImgTop_Pointer thumbnail_show_pin"></div>
                    <div class="image-bg-div" style="background:url(${thumb_image});">
                        <p class="h4 main_title" onclick="currentSlide(${index})">${thumb_title}</p>
                        <a class="ctalink go-button thumbnail_show_button" href="${thumb_link}">Go</a>
                    </div>
                </div>
            `;
        
            slideInner.innerHTML += showMainSlide;

            // thumbnail slider
            const thumbImages = document.querySelectorAll('.test-slide');
            let currentThumbImageIndex = 0;

            function showNextThumbImage(){
                thumbImages[currentThumbImageIndex].classList.remove('active');
                currentThumbImageIndex = (currentThumbImageIndex + 1) % thumbImages.length;
                thumbImages[currentThumbImageIndex].classList.add('active');
            }

            thumbImages[currentThumbImageIndex].classList.add('active');

            setInterval(showNextThumbImage, 3000);

        });

        // attach location to button
        const slidesContainer = document.getElementById("test-slides-container");
        const slide = document.querySelector(".test-slide");
        // const slideActive = document.querySelector(".test-slide.active");
        const prevButton = document.getElementById("test-slide-arrow-prev");
        const nextButton = document.getElementById("test-slide-arrow-next");
        
        let autoPlayInterval;
        let autoCurrentSlide = 0;
        const slideCount = document.querySelectorAll('.test-slide').length;
        
        // manual buttons
        nextButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft += slideWidth;
        });
        
        prevButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft -= slideWidth;
        });

        // auto buttons
        nextButton.addEventListener("click", () => {
        goToSlide(autoCurrentSlide + 1);
        });

        prevButton.addEventListener("click", () => {
        goToSlide(autoCurrentSlide - 1);
        });

        function nextSlide() {
        goToSlide(autoCurrentSlide + 1);
        }

        function goToSlide(slideIndex) {
        autoCurrentSlide = slideIndex;

        if (autoCurrentSlide < 0) {
            autoCurrentSlide = slideCount - 1;
        } else if (autoCurrentSlide >= slideCount) {
            autoCurrentSlide = 0;
        }

        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft = autoCurrentSlide * slideWidth;
        }

        // Start auto play when the page loads
        startAutoPlay();

        function startAutoPlay(e) {
          e.preventDefault();
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 3000);
        }

        function stopAutoPlay() {
        clearInterval(autoPlayInterval);
        }


        // Stop auto play when the user interacts with the carousel
        slidesContainer.addEventListener("mouseover", stopAutoPlay);
        slidesContainer.addEventListener("mouseout", startAutoPlay);

    
      });
   