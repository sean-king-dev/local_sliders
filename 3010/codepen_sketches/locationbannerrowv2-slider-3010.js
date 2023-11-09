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

        // 3010 exp js





