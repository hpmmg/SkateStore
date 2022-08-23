$(function () {

  $('.menu__btn, .menu a').on('click', function () {
    $('.header').toggleClass('header--active')
  });

  $('.top-slider__inner').slick({
    dots: true,
    // fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/topslider/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/topslider/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 730,
        settings: {
          arrows: false
        }
      },
    ]
  });


  $('.videos__slider').slick({
    dots: false,
    arrows: true,
    // fade: true,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/videos/arrow-prev.png" alt=""></button>',
    
  });
  $('.menu__list-link').on('click', function () {
    $('.menu__list-link').removeClass('menu__list-link--active')
  });
  // $('.menu__list-link').on('click', function () {
  //   $(this).addClass('menu__list-link--active')
  // });

  var swiper = new Swiper(".blog__slider", {
    
    slidesPerView: 2,
    spaceBetween: 99,
    centeredSlides: true,
  
  });
  
  
})