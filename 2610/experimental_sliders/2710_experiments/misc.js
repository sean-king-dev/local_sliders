
        // thumbCarouselTimer();
        // function thumbCarouselTimer() {
        //     const thumbnailItems = document.querySelectorAll('.test-slide');

        // let currentThumbImageIndex = 0;

        // function showNexThumbImage(){
        //     thumbnailItems[currentThumbImageIndex].classList.remove('active');

        //     currentThumbImageIndex = (currentThumbImageIndex + 1) % thumbnailItems.length;

        //     thumbnailItems[currentThumbImageIndex].classList.add('active');

        // }

        // // Initial display
        // thumbnailItems[currentThumbImageIndex].classList.add('active');

        // // Set an interval to change the slide every 3 seconds
        // setInterval(showNextThumbImage, 3000);

        // }


        
        if($('.test-slide.active') == true) {
                $(".test-slider-wrapper").css("border", "10px solid lime")
            }
    
            Array.from(document.getElementsByClassName('.thumbnail-carousel-wrapper')).forEach(e => e.style.border =  '10px solid blue')
    
            if($(".test-slide.active")){
                $(".test-slide.active").css("border", "2px solid lime");
            } else {
                $(".test-slide").css("border", "none");
            }