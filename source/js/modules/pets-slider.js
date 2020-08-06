'use strict';
(function () {
  var swipers = [];
  var sliders = document.querySelectorAll('.pets-slider-js');
  if (!sliders.length) {
    return;
  }

  var createSlider = function () {
    swipers = [];

    for (var i = 0; i < sliders.length; i++) {
      var swiper = new window.Swiper(sliders[i].querySelector('.swiper-container'), {
        observeParents: true,
        observer: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 'auto',
        effect: 'coverflow',
        navigation: {
          nextEl: sliders[i].querySelector('.swiper-button-next'),
          prevEl: sliders[i].querySelector('.swiper-button-prev'),
        },
        loop: true,
        loopedSlides: 3,
        breakpoints: {
          320: {
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 50,
          },
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 170,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 0,
          }
        },
        breakpointsInverse: true,
      });

      swipers.push(swiper);
    }
  };

  var initSlider = function () {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (!swipers.length) {
        createSlider();
      }
    } else {
      if (swipers.length) {
        for (var i = 0; i < sliders.length; i++) {
          swipers[i].destroy(true, true);
        }

        swipers = [];
      }
    }
  };


  initSlider();
  window.addEventListener('resize', initSlider);
})();
