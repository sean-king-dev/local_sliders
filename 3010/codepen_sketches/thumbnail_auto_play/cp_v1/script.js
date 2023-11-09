const locations = [
    {
        id: '1',
        title: 'Oxford',
        //image: '../assets/img/img_one.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        //image: '../assets/img/img_two.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        //image: '../assets/img/img_three.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=three',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        //image: '../assets/img/img_four.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=four',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        //image: '../assets/img/img_five.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=five',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        //image: '../assets/img/img_six.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=six',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        //image: '../assets/img/img_seven.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=seven',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        //image: '../assets/img/img_eight.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=eight',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        //image: '../assets/img/img_nine.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=nine',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        //image: '../assets/img/img_ten.jpg',
        // image: 'https://picsum.photos/300',
         image: 'https://placehold.co/600x400?text=ten',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }

];

// // v1 basic handles
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// // v2 autoplay
// const slidesContainer = document.getElementById("slides-container");
//         const slide = document.querySelector(".slide");
//         const prevButton = document.getElementById("slide-arrow-prev");
//         const nextButton = document.getElementById("slide-arrow-next");

//         let autoPlayInterval;

//         nextButton.addEventListener("click", () => {
//           nextSlide();
//         });

//         prevButton.addEventListener("click", () => {
//           const slideWidth = slide.clientWidth;
//           slidesContainer.scrollLeft -= slideWidth;
//         });

//         function nextSlide() {
//           const slideWidth = slide.clientWidth;
//           slidesContainer.scrollLeft += slideWidth;
//         }

//         function startAutoPlay() {
//           autoPlayInterval = setInterval(() => {
//             nextSlide();
//           }, 3000);
//         }

//         function stopAutoPlay() {
//           clearInterval(autoPlayInterval);
//         }

//         // Start auto play when the page loads
//         startAutoPlay();

//         // Stop auto play when the user interacts with the carousel
//         slidesContainer.addEventListener("mouseover", stopAutoPlay);
//         slidesContainer.addEventListener("mouseout", startAutoPlay);


// v3
const sk_slidesContainer = document.getElementById("sk_slides-container");
        const sk_slide = document.querySelector(".sk_slide");
        const sk_prevButton = document.getElementById("sk_slide-arrow-prev");
        const sk_nextButton = document.getElementById("sk_slide-arrow-next");

let ulWrapper = document.querySelector(".sk_slides-container");
 let slideItem = document.createElement("li");
slideItem.setAttribute("class", "sk_slide");

ulWrapper.appendChild(slideItem);

let itemList = document.getElementById("sk_slides-container");

for (let i = 1; i <= 8; i++) {
  let listItem = document.createElement("li");
  listItem.setAttribute("class", "sk_slide");
  listItem.textContnet = "Item" + i;
  itemList.appendChild(listItem);
  
}

        let sk_autoPlayInterval;
        let sk_currentSlide = 0;
        const sk_slideCount = document.querySelectorAll('.sk_slide').length;

        sk_nextButton.addEventListener("click", () => {
          goToSlide(sk_currentSlide + 1);
        });

        sk_prevButton.addEventListener("click", () => {
          goToSlide(sk_currentSlide - 1);
        });

        function sk_nextSlide() {
          goToSlide(sk_currentSlide + 1);
        }

        function sk_startAutoPlay() {
          sk_autoPlayInterval = setInterval(() => {
            sk_nextSlide();
          }, 3000);
        }

        function sk_stopAutoPlay() {
          clearInterval(sk_autoPlayInterval);
        }

        function goToSlide(sk_slideIndex) {
          sk_currentSlide = sk_slideIndex;

          if (sk_currentSlide < 0) {
            sk_currentSlide = sk_slideCount - 1;
          } else if (sk_currentSlide >= sk_slideCount) {
            sk_currentSlide = 0;
          }

          const sk_slideWidth = sk_slide.clientWidth;
          sk_slidesContainer.scrollLeft = sk_currentSlide * sk_slideWidth;
        }

        // Start auto play when the page loads
        sk_startAutoPlay();

        // Stop auto play when the user interacts with the carousel
        sk_slidesContainer.addEventListener("mouseover", sk_stopAutoPlay);
        sk_slidesContainer.addEventListener("mouseout", sk_startAutoPlay);