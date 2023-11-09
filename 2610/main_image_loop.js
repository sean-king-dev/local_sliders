$(".main_slide_item").each(function() {

    function fadeLoop(){

         // get all images
        let mainFadeImages = document.querySelectorAll('.main_slide_item');

        // initialise anmd 0 index imageIndex var
        let imageIndex = 0;

        (function fadeSlider(){
        // remove active class
        mainFadeImages[imageIndex].classList.remove("active");

        imageIndex++;

        if(imageIndex >= mainFadeImages.length){
            imageIndex = 0;
        }

        mainFadeImages[imageIndex].classList.add("active");

     
        }, setInterval(mainFadeImages, 5000))   
    }


   

});