    // moveNSlide();
    // function moveNSlide(){
    //     // MOVE N+8 SLIDES
    //     $(".thumbWrapper.carousel-item-8.active").css('transform', 'translateX(-100%)');
    //     $(".thumbWrapper.carousel-item-9.active").css('transform', 'translateX(-200%)');
    //     $(".thumbWrapper.carousel-item-10.active").css('transform', 'translateX(-300%)');
    // }
        
    moveThumbSlider();
     function moveThumbSlider(){
        // when carousel item n+8/9/10 etc is active, move slider container 100% (width of individual slide)
        slide_width = $(`.thumbWrapper.carousel-item-${index}`);
        slider_container_width = $(".location_thumbnail");

        if($("div.thumbWrapper.carousel-item-8.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-10%)");
        }
        else if($("div.thumbWrapper.carousel-item-9.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-20%)");
        }
        else if($("div.thumbWrapper.carousel-item-10.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-30%)");
        }
        else if($("div.thumbWrapper.carousel-item-11.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-40%)");
        }
        else if($("div.thumbWrapper.carousel-item-12.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-50%)");
        }
        else ($("div.thumbWrapper.carousel-item-12.active") == true) {
            $(".location_thumbnail").css("transform", "translateX(-60%)");
        };


     }


    //  if($("div.thumbWrapper.carousel-item-2.active") == true){
        // if($("div.thumbimgParent.carousel-item-2.active") == true){
        if($("div.thumbimgParent.carousel-item-2.active")){
        alert("the boolean conditional with a jquery class was triggered")
     }

     else {
        alert("the plain conditional was triggered")
     }
     
     let thumbnailSlideContainer = document.querySelector(".location_thumbnail");
     if($(".carousel-item-1.active")) { 
        //alert("the boolean conditional with a jquery class was triggered");
        thumbnailSlideContainer.css("border", "5px solid lime !important");
     }

    //  if($("div.thumbWrapper.carousel-item-8.active") == true) {
    //     $("location_thumbnail").css("transform", "translate(-10%)");
    // };




    //  function moveThumbSliderV2() {
    //     const activeIndex = $(".thumbWrapper.active").index();
    //     const translatePercentage = (activeIndex - 8) * 10;
    
    //     if (activeIndex >= 8 && activeIndex <= 12) {
    //         $(".location_thumbnail").css("transform", `translate(-${translatePercentage}%)`);
    //     }
    // }

    // move thumbnail wrapper according to which slides are active
    thumbnail_wrapper = document.querySelector('.location_thumbnail');
    location_8 = document.querySelector('div.thumbimgParent.carousel-item-8.active');
    if(location_8) {
        thumbnail_wrapper.style.transform = "translateX(-10%)";
    }



    // 1810 js
    window.addEventListener("load", function() {
    
        thumb_image = $(this).find(".thumb img").attr("src");
        thumb_title = $(this).find(".thumb img").attr("title");
        thumb_link = $(this).find(".location_banner").attr('data-link');
    
    const slideInner = document.querySelector(".slide_inner");
    
    const thumb_slide = document.createElement("div");
    thumb_slide.setAttribute('class', 'thumb-slide');
    
    slideInner.appendChild(thumb_slide);
    
    
        const showMainSlide = locations.map((location, index) => {
        return `
            <div class="dynamic_slide_item" key=${location.id}>
              <div class="image-bg-div" style="background:url(${location.image});">
                <p class="h4 main_title" color="#333">${location.title}</p>
                <a class="ctalink go-button" href=${location.ctaLink}>Go</a>
              </div>
            </div>
        `;
        });
    
        slideInner.innerHTML = showMainSlide;
    
    
    });

    //1820 js v2
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

    // loop v1
    window.addEventListener("load", () => {
    
    
        const thumbImage = document.querySelector(".thumb img");
        const thumbTitle = thumbImage.getAttribute("title");
        const thumbLink = document.querySelector(".location_banner").getAttribute("data-link");
    
        const slideInner = document.querySelector(".slide_inner");
    
        const thumbSlide = document.createElement("div");
        thumbSlide.classList.add("thumb-slide");
    
        slideInner.appendChild(thumbSlide);
        
        $('.location_mySlides').each(function (){
    
            var el = $(this);
        const showMainSlide = `
            <div class="dynamic_slide_item">
                <div class="image-bg-div" style="background:url(${thumbImage.getAttribute("src")});">
                    <p class="h4 main_title" color="#333">${thumbTitle}</p>
                    <a class="ctalink go-button" href="${thumbLink}">Go</a>
                </div>
            </div>
        `;
    
        slideInner.innerHTML = showMainSlide;
        
        });
        
        document.getElementsByClassName('location_banner')[0].classList.add('active');
        
    });


    // loop v2
    window.addEventListener("load", () => {
        const slideInner = document.querySelector(".slide_inner");
        
        for (let i = 1; i <= 8; i++) {
            const thumbImage = document.querySelector(`.thumb img:nth-child(${i})`);
            const thumbTitle = thumbImage.getAttribute("title");
            const thumbLink = document.querySelector(`.location_banner:nth-child(${i})`).getAttribute("data-link");
    
            const thumbSlide = document.createElement("div");
            thumbSlide.classList.add("thumb-slide");
    
            const showMainSlide = `
                <div class="dynamic_slide_item">
                    <div class="image-bg-div" style="background:url(${thumbImage.getAttribute("src")});">
                        <p class="h4 main_title" color="#333">${thumbTitle}</p>
                        <a class="ctalink go-button" href="${thumbLink}">Go</a>
                    </div>
                </div>
            `;
    
            thumbSlide.innerHTML = showMainSlide;
            slideInner.appendChild(thumbSlide);
        }
    });


       // v3 loop with ed help
       window.addEventListener("load", () => {
    
    
        //const thumbImage = document.querySelector(".thumb img");
        //const thumbTitle = thumbImage.getAttribute("title");
        //const thumbLink = document.querySelector(".location_banner").getAttribute("data-link");
    
        const slideInner = document.querySelector(".slide_inner");
    
        const thumbSlide = document.createElement("div");
        thumbSlide.classList.add("thumb-slide");
    
        slideInner.appendChild(thumbSlide);
        
        $('.location_mySlides').each(function (){
            
            var thumb_image = $(this).find(".thumb img").attr("src");
            var thumb_title = $(this).find(".thumb img").attr("title");
            var thumb_link = $(this).find(".location_banner").attr('data-link');
            
    
        const showMainSlide = `
            <div class="dynamic_slide_item">
                <div class="image-bg-div" style="background:url(${thumb_image});">
                    <p class="h4 main_title" color="#333">${thumb_title}</p>
                    <a class="ctalink go-button" href="${thumb_link}">Go</a>
                </div>
            </div>
        `;
    
        slideInner.innerHTML = showMainSlide;
        
        });
        
        //document.getElementsByClassName('location_banner')[0].classList.add('active');
        
    });
