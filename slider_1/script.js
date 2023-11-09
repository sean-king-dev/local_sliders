import location from './location.js';

// const createCarousel = (location) => {
//     location.index = 0;
//     location.current = function() {
//         this.index = this.index % location.len;
//         return location[this.index];
//     };

//     location.next = function(){
//         this.ondex++;
//         return this.current();
//     };

//     location.previous = function() {
//         this.index += location.len - 1;
//         return this.current();
//     };

//     location.reset = function() {
//         this.index = 0;
//         return location[0];
//     }
// }

// createCarousel(location);

// function createCarousel() {
//     location().then((data) => {
//         let carousel_data = '';
//         $.each(data, function(key, value){
//             let car_id: value.cust_carousel.id;
//             let car_title: value.cust_carousel.title;
//             let car_image: value.cust_carousel.image;
//             let car_ctaLink: value.cust_carousel.ctaLink;

//             if(carousel != 'carousel-container') {
//                 carousel_data += `<div>
//                     <div class="slide" key=` + value.cust_carousel.id +`>
//                         <span>
//                         <img src="`+ valiue.cust_carousel.image +`" alt="img title">
//                         <div class="h4">` + value.cust_carousel.title +`</div>
//                         <div><a href>` + value.cust_carousel.ctaLink +`</a></div>
//                         </span>

//                     </div>
//                 </div>`
//             }
//         })
//     })
// }