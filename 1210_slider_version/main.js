
const locations = [
    {
       id: '1',
       title: 'Oxford',
       image: '../assets/img/img_one.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '2',
       title: 'Hove',
       image: '../assets/img/img_two.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '3',
       title: 'London',
       image: '../assets/img/img_three.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '4',
       title: 'Crouch End',
       image: '../assets/img/img_four.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '5',
       title: 'Battersea',
       image: '../assets/img/img_five.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '6',
       title: 'Hackney',
       image: '../assets/img/img_six.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '7',
       title: 'Hammersmith',
       image: '../assets/img/img_seven.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '8',
       title: 'Putney',
       image: '../assets/img/img_eight.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '9',
       title: 'Archway',
       image: '../assets/img/img_nine.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
       id: '10',
       title: 'Nunhead',
       image: '../assets/img/img_ten.jpg',
       ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }
   
   ];

   const slideInner = document.querySelector(".main_slider");

const main_slide = document.createElement("div");
main_slide.setAttribute('class', 'slide');

const thumb_slide = document.createElement("div");
thumb_slide.setAttribute('class', 'thumb-slide');

slideInner.appendChild(main_slide);
slideInner.appendChild(thumb_slide);

const mainSlide = document.querySelector(".slide");

const thumbSlide = document.querySelector(".thumbnail_slider");

window.onload=function() {
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
    
        mainSlide.innerHTML = showMainSlide;

    const showThumbSlide = locations.map((location, index) => {
    return `
      <div class="dynamic_thumb_slide_item" key=${location.id}>
          <div class="thumb_image-bg-div" style="background:url(${location.image});">
            <p class="h4 thumb_title" color="#333">${location.title}</p>
            <a class="thumb_ctalink thumb_go-button" href=${location.ctaLink}>Go</a>
          </div>
        </div>
    `;
  });
  
  thumbSlide.innerHTML = showThumbSlide;
}

// window.addEventListener("DOMContentLoaded", function () {

//     const showMainSlide = locations.map((location, index) => {
//     return `
//         <div class="dynamic_slide_item" key=${location.id}>
//           <div class="image-bg-div" style="background:url(${location.image});">
//             <p class="h4 main_title" color="#333">${location.title}</p>
//             <a class="ctalink go-button" href=${location.ctaLink}>Go</a>
//           </div>
//         </div>
//     `;
//     });

//     mainSlide.innerHTML = showMainSlide;
  
//   const showThumbSlide = locations.map((location, index) => {
//     return `
//       <div class="dynamic_thumb_slide_item" key=${location.id}>
//           <div class="thumb_image-bg-div" style="background:url(${location.image});">
//             <p class="h4 thumb_title" color="#333">${location.title}</p>
//             <a class="thumb_ctalink thumb_go-button" href=${location.ctaLink}>Go</a>
//           </div>
//         </div>
//     `;
//   });
  
//   thumbSlide.innerHTML = showThumbSlide;
// });

// window.addEventListener("DOMContentLoaded", function () {

//     const showMainSlide = locations.map((location, index) => {
//     return `
//         <div class="dynamic_slide_item" key=${location.id}>
//           <div class="image-bg-div" style="background:url(${location.image});">
//             <p class="h4 main_title" color="#333">${location.title}</p>
//             <a class="ctalink go-button" href=${location.ctaLink}>Go</a>
//           </div>
//         </div>
//     `;
//     });

//     mainSlide.innerHTML = showMainSlide;
  
//   const showThumbSlide = locations.map((location, index) => {
//     return `
//       <div class="dynamic_thumb_slide_item" key=${location.id}>
//           <div class="thumb_image-bg-div" style="background:url(${location.image});">
//             <p class="h4 thumb_title" color="#333">${location.title}</p>
//             <a class="thumb_ctalink thumb_go-button" href=${location.ctaLink}>Go</a>
//           </div>
//         </div>
//     `;
//   });
  
//   thumbSlide.innerHTML = showThumbSlide;
// });

const thumbslidesContainer = document.querySelector("thumb_wrapper");
const slidey = document.querySelector(".dynamic_thumb_slide_item");

const prevButton = document.getElementById("thumb-slide-arrow-prev");
const nextButton = document.getElementById("thumb-slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slidey.clientWidth;
  thumbslidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slidey.clientWidth;
  thumbslidesContainer.scrollLeft -= slideWidth;
});