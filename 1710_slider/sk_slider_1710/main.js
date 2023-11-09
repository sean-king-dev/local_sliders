const locations = [
    {
        id: '1',
        title: 'Oxford',
        // image: 'https://placehold.co/600x400?text=one',
        image: '../assets/img/img_one.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        // image: 'https://placehold.co/600x400?text=two',
        image: '../assets/img/img_two.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        // image: 'https://placehold.co/600x400?text=three',
        image: '../assets/img/img_three.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        // image: 'https://placehold.co/600x400?text=four',
        image: '../assets/img/img_four.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        // image: 'https://placehold.co/600x400?text=five',
        image: '../assets/img/img_five.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        // image: 'https://placehold.co/600x400?text=six',
        image: '../assets/img/img_six.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        // image: 'https://placehold.co/600x400?text=seven',
        image: '../assets/img/img_seven.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        // image: 'https://placehold.co/600x400?text=eight',
        image: '../assets/img/img_eight.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        // image: 'https://placehold.co/600x400?text=nine',
        image: '../assets/img/img_nine.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        // image: 'https://placehold.co/600x400?text=ten',
        image: '../assets/img/img_ten.jpg',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }

];

const slideInner = document.querySelector(".slider_inner");

const main_slide = document.createElement("div");
main_slide.setAttribute('class', 'slide');

const thumb_slide = document.createElement("div");
thumb_slide.setAttribute('class', 'thumb-slide');

slideInner.appendChild(main_slide);
slideInner.appendChild(thumb_slide);

const mainSlide = document.querySelector(".slide");

const thumbSlide = document.querySelector(".thumb_slider");


slideInner.appendChild(thumb_slide);


    // const showMainSlide = (() => {
    // return `
    //     <div class="dynamic_slide_item">
    //       <div class="image-bg-div" style="background:url(${locatiom});">
    //         <p class="h4 main_title" color="#333">${thumb_title}</p>
    //         <a class="ctalink go-button" href=${thumb_link}>Go</a>
    //       </div>
    //     </div>
    // `;
    // });

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

    slideInner.innerHTML += showMainSlide;




    // const showMainSlide = locations.map((location, index) => {
    //     return `
    //         <div class="dynamic_slide_item" key=${location.id}>
    //           <div class="image-bg-div" style="background:url(${location.image});">
    //             <p class="h4 main_title" color="#333">${location.title}</p>
    //             <a class="ctalink go-button" href=${location.ctaLink}>Go</a>
    //           </div>
    //         </div>
    //     `;
    //     });