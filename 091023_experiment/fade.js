// fade effect
startImageFade();

function startImageFade() {
  
  let fadeImages = document.querySelector(".image-bg-div");
  
  for (let i = 0; i < fadeImages.length; i++){
    fadeImages[i].style.opacity = 1;
  }
  
  let top = 1;
  
  let cur = fadeImages.length - 1;
  
  setInterval(changeImage, 5000);
  
  async function changeImage() {
    let nextImage = ( 1 + cur) % images.length;
    
    fadeImages[cur].style.zIndex = top + 1;
    fadeImages[nextImage].style.zIndex = top;
    
    await transition();
    
    fadeImages[cur].style.zIndex = top;
    
    fadeImages[nextImage].style.zIndex =  top + 1;
    
    top = top + 1;
    
    fadeImages[cur].style.opacity = 1;
    
    cur = nextImage;
  }
  
  function tranition() {
    return new Promise(function (resolve, reject) {
      let del = 0.01;
      let id = setInterval(changOpacity, 10);
      
      function changOpacity(){
        fadeImages[cur].style.opacoty -= del;
        if(fadeImages[cur].style.opacity <= 0){
          clearInterval(id);
          resolve();
        }
      }
    })
  }
  
=