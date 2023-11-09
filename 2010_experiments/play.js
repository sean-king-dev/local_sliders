$(".hidden_thumb_slide").each(function (index){
               
    thumb_image = $(this).find(".thumb img").attr("src");
    thumb_title = $(this).find(".title p.h4 img").attr("title");
    thumb_link = $(this).find(".thumb_link").attr('data-link')
    
    let showMainSlide = `
        <div class="dynamic_slide_item">
            <div class="image-bg-div" style="background:url(${thumb_image});">
                <p class="h4 main_title" color="#333" onclick="currentSlide((" + $Li + "))">${thumb_title}</p>
                <a class="ctalink go-button" href="${thumb_link}">Go</a>
            </div>
        </div>
    `;

    slideInner.innerHTML = showMainSlide;
       
   });

// chat gpt version

$(".hidden_thumb_slide").each(function (index) {
    thumb_image = $(this).find(".thumb img").attr("src");
    thumb_title = $(this).find(".title p.h4 img").attr("title");
    thumb_link = $(this).find(".thumb_link").attr('data-link');
    
    let showMainSlide = `
        <div class="dynamic_slide_item">
            <div class="image-bg-div" style="background:url(${thumb_image});">
                <p class="h4 main_title" color="#333" onclick="currentSlide(${index})">${thumb_title}</p>
                <a class="ctalink go-button" href="${thumb_link}">Go</a>
            </div>
        </div>
    `;

    // Append each showMainSlide to slideInner
    slideInner.append(showMainSlide);
});


// test
function moveRight(){
    alert("right click!");
}


function moveLeft(){
    alert("left click!");     
} 


// play buttons
const slidesContainer = document.getElementById("slide_inner");
const slide = document.querySelector(".dynamic_slide_item");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
    });

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});  
