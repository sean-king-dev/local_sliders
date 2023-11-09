
   
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



        // thumbnail carousel movement
        // when n+8 slides are active, make the carousel cycle backwards so the 8 visible slides are as follows
        // // 1- 8, 2-8, 3-10, 4-11 etc

        // allow to cycle back and forth so you are making the corresponding location slide active (ie overriding the timer) go back and forth
        // the current iteration of the thumbnail slider allows you tomove back and forth but it doesn't affect the active slide

        // n+8 moves carousel array along, inside the container accordingly and when carousel array is -1 || item.active[0] then the first item is visible in the carousel as per initial state of the thumbnail carousel

        

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

        function startAutoPlay() {
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


        // v2 for dynamic list carousel prototype

        // grab the slides container 
        const slideContainerID = document.getElementById("sk_slides-container");

        //and dynamically create x amounnt of slide items
        for(let i = 0; i <= 16; i++) {

            const slideItem = document.createElement("div");
            slideItem.classList.add("sk_slide");
            slideContainerID.appendChild(slideItem);

        }

        // slideContainer.appendChild(slideItem);
    
        // 3010 exp js
        const sk_slidesContainer = document.getElementById("sk_slides-container");
        const sk_slide = document.querySelectorAll(".sk_slide"); // Select all slide elements
        const sk_prevButton = document.getElementById("sk_slide-arrow-prev");
        const sk_nextButton = document.getElementById("sk_slide-arrow-next");

        let sk_autoPlayInterval;
        let sk_currentSlide = 0;
        const sk_slideCount = sk_slide.length;
        let interval;

        function sk_nextSlide() {
        //   sk_goToSlide(sk_currentSlide + 1);
            sk_currentSlide = (sk_currentSlide + 1) % sk_slideCount;
            sk_goToSlide(sk_currentSlide);
        }

        function sk_goToSlide(sk_slideIndex) {
          sk_currentSlide = sk_slideIndex;

          if (sk_currentSlide < 0) {
            sk_currentSlide = sk_slideCount - 1;
          } else if (sk_currentSlide >= sk_slideCount) {
            sk_currentSlide = 0;
          }

          const sk_slideWidth = sk_slide[0].clientWidth;
          sk_slidesContainer.scrollLeft = sk_currentSlide * sk_slideWidth;
        }

        sk_nextButton.addEventListener("click", () => {
        //   sk_goToSlide(sk_currentSlide + 1);
            sk_nextSlide();
        });

        sk_prevButton.addEventListener("click", () => {
        //   sk_goToSlide(sk_currentSlide - 1);
        sk_currentSlide =(sk_currentSlide - 1 + sk_slideCount) % sk_slideCount;
        sk_goToSlide(sk_currentSlide);
        });

        function sk_startAutoPlay() {
          sk_autoPlayInterval = setInterval(() => {
            sk_nextSlide();
          }, 3000);
        }

        function sk_stopAutoPlay() {
          clearInterval(sk_autoPlayInterval);
        }



        // Clone the first and last slides for infinite looping
        const firstSlideClone = sk_slide[0].cloneNode(true);
        const lastSlideClone = sk_slide[sk_slideCount - 1].cloneNode(true);

        sk_slidesContainer.appendChild(firstSlideClone);
        sk_slidesContainer.insertBefore(lastSlideClone, sk_slide[0]);

        // Start auto play when the page loads
        sk_startAutoPlay();

        // Stop auto play when the user interacts with the carousel
        sk_slidesContainer.addEventListener("mouseover", sk_stopAutoPlay);
        sk_slidesContainer.addEventListener("mouseout", sk_startAutoPlay);

        // 3010 exp js --  end