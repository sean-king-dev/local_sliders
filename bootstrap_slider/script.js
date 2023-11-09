window.onload = (event) => {
  const data = [
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
   
   ]
    var slides=[], indicators=[], html='', activeClass
    data.forEach(item => {
      // set up the slide
      activeClass = slides.length == 0 ? ' active ' : '' ; // the carousel has to have 1 active slide when it starts or else nothing will show. We set the first one as 'active' based on the length of the array we're making (when it's 0, that means we on the first one)
      html = '<div class="carousel-item ' + activeClass + '">'
      html += '<img src="' + item.image + '" alt="pic reference">'
      html += '<h5>' + item.title + '</h5>'
      html += '<a href='" item.ctaLink "'> Go </a>'
      html += '</div></div>'
      slides.push(html);
     
      // set up the indicator
      activeClass = indicators.length == 0 ? ' class="active" ' : '' ; // see note about the active slide above- same goes for the indicators
      html = '<li data-target="#carouselExampleIndicators" data-slide-to="' + indicators.length + '" ' + activeClass + '></li>';
      indicators.push(html);
    })
 
    // now add it to your carousel and fire it up!
 
    document.getElementById('carousel-indicators').innerHTML = indicators.join('');
    document.getElementById('carousel-slides').innerHTML = slides.join('');
    $('#carouselExampleIndicators').carousel(); // This line assumes you have jQuery loaded with Bootstrap
    
 
 };