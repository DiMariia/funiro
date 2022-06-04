$(document).ready(function() {
  $('.promo_carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img  src="src/img/slider-prev.png" alt="slide"></button>',
    nextArrow: '<button type="button" class="slick-next"><img  src="src/img/slider-next.png" alt="slide"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.inspiration_carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img  src="src/img/slider-prev.png" alt="slide"></button>',
    nextArrow: '<button type="button" class="slick-next"><img  src="src/img/slider-next.png" alt="slide"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.tips_carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true
  })

});