const locations = [
    {
        id: '1',
        title: 'Oxford',
        image: 'https://placehold.co/600x400?text=one',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '2',
        title: 'Hove',
        image: 'https://placehold.co/600x400?text=two',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '3',
        title: 'London',
        image: 'https://placehold.co/600x400?text=three',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '4',
        title: 'Crouch End',
        image: 'https://placehold.co/600x400?text=four',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '5',
        title: 'Battersea',
        image: 'https://placehold.co/600x400?text=five',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '6',
        title: 'Hackney',
        image: 'https://placehold.co/600x400?text=six',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '7',
        title: 'Hammersmith',
        image: 'https://placehold.co/600x400?text=seven',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '8',
        title: 'Putney',
        image: 'https://placehold.co/600x400?text=eight',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '9',
        title: 'Archway',
        image: 'https://placehold.co/600x400?text=nine',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    },
    {
        id: '10',
        title: 'Nunhead',
        image: 'https://placehold.co/600x400?text=ten',
        ctaLink: 'https://en.wikipedia.org/wiki/Oxford'
    }

];

const slideInner = document.querySelector(".slider_inner");

const main_slide = document.createElement("div");
main_slide.setAttribute('class', 'slide');

const thumb_slide = document.createElement("div");
thumb_slide.setAttribute('class', 'thumb-slide');

slideInner.appendChild(main_slide);
// slideInner.appendChild(thumb_slide);

const mainSlide = document.querySelector(".slide");

const thumbSlide = document.querySelector(".thumb_slide_section");


window.addEventListener("DOMContentLoaded", function () {

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
      thumbSlide.innerHTML += showThumbSlide;

    displayFirstSlide();
    function displayFirstSlide() {
        document.getElementsByClassName('dynamic_slide_item')[0].classList.add('active');
    }



    const TthumbslidesContainer = document.querySelector("thumb_slide_selection");
    const Tslide = document.querySelector(".dynamic_thumb_slide_item");

    const prevButton = document.getElementById("thumb-slide-arrow-prev");
    const nextButton = document.getElementById("thumb-slide-arrow-next");

    nextButton.addEventListener("click", () => {
    const slideWidth = Tslide.clientWidth;
    TthumbslidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
    const slideWidth = Tslide.clientWidth;
    TthumbslidesContainer.scrollLeft -= slideWidth;
    });

    const Lbutton = document.getElementById("thumb-slide-arrow-prev");

    Lbutton.onclick = () => {
        scrollLeft += 40
    }

    const Rbutton = document.getElementById("thumb-slide-arrow-next");

    Rbutton.onclick = () => {
        scrollRight += 40
    }

    // function scrollToLeft(){
    //     document.getElementById("thumb-slide-arrow-prev");

    // }

}); 