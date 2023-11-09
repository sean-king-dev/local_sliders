let slider_img = document.querySelector('slider_img')

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

   let images = [ 'img_one.jpg', 'img_two.jpg', 'img_three.jpg','img_four.jpg', 'img_five.jpg',  'img_six.jpg'];

   let i = 0;

   function prev() {
    if (i <= 0) i = images.length;
    i --;
    return setImg();
   }

   function next() {
    if (i >= images.length) i = -1;
    i ++;
    return setImg();
   }

   function setImg() {
    return slider_img.setAttribute('src', "assets/img/" + images[i]);
   }