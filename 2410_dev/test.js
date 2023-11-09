        // thumbnail slider   removed from 
        let slideInner = document.querySelector(".slide_inner");
       
        $(".hidden_thumb_slide").each(function (index) {
            thumb_image = $(this).find(".thumb img").attr("src");
            thumb_title = $(this).find(".title p.h4 img").attr("title");
            thumb_link = $(this).find(".thumb_link").attr('data-link');
            
            let showMainSlide = `
                <div class="dynamic_slide_item">
                    <div class="image-bg-div" style="background:url(${thumb_image});">
                        <div class="ThumbImgTop"></div>
                        <p class="h4 main_title" onclick="currentSlide(${index})">${thumb_title}</p>
                        <a class="ctalink go-button" href="${thumb_link}">Go</a>
                    </div>
                </div>
            `;
        
        slideInner.innerHTML += showMainSlide;

        });



        Array.from(document.querySelectorAll('.banner img')).forEach(e => function( i ){
  e.delay(1000*i).fadeTo(1000,1);
})