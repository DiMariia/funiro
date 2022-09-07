$(document).ready(function () {
  $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu").toggleClass("active");
      $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".menu-item").click(function (event) {
      $(".header__burger, .header__menu").removeClass("active");
      $("body").removeClass("lock");
  });
});

// scroll when you click on the menu

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function() {
  $('.menu-item').click(function(event) {
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock');

  })
})

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

  const setSlideTextActive = (slide) => {
    return slide.find(".tips-title").toggleClass("active");
  };

  let prevElement = setSlideTextActive($(".slick-current"));

  $(".slick-slider").on("afterChange", () => {
      prevElement.removeClass("active");
      let currentSlide = $(".slick-current");
      prevElement = setSlideTextActive(currentSlide);
  });


});

// Simulate a hover in mobile 

$(document).ready(function() {
  $('.hover').on('touchstart touchend', function(e) {
      e.preventDefault();
      $(this).toggleClass('hover_effect');
  });
});

// Validate form

$(document).ready(function () {
  function valideForms(form) {
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              },
              password: {
                  required: true,
                  minlength: 5
              },
              password_confirm: {
                  required: true,
                  minlength: 5,
                  equalTo: '[name="password"]'
              }
          },
          messages: {
              name: {
                  required: "Please enter your name",
                  minlength: jQuery.validator.format("Enter {0} character!")
              },
              phone: "Please enter your phone number",
              email: {
              required: "Please enter your email",
              email: "Incorrectly entered email address"
              },
              password: {
                  required: "Please enter your password",
              }
          }
      });
  };
  valideForms('#subscription');
});


