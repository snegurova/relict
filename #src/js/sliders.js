@@include('./libs/swiper-bundle.js', {})

  /*------
   Sliders
  --------*/


const adProductsSlider = new Swiper('.ad-products__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 730px
      730: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      // when window width is >= 1090px
      1090: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    }
});

const rateWebSlider = new Swiper('.rate-web__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: '.rate-web__swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 730px
    730: {
      slidesPerView: 2,
    },
    // when window width is >= 1090px
    1090: {
      slidesPerView: 3,
    }
  }
});
const rateAppSlider = new Swiper('.rate-app__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: '.rate-app__swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 730px
    730: {
      slidesPerView: 2,
    },
    // when window width is >= 1090px
    1090: {
      slidesPerView: 3,
    }
  }
});

const blogPostsSlider = new Swiper('.blog-posts__slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 2.4,
  spaceBetween: 25,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 730px
    730: {
      slidesPerView: 2,
    },
    // when window width is >= 1090px
    1090: {
      slidesPerView: 2.4,
    },
    1440: {
      slidesPerView: (window.innerWidth + 1077) / 1090,
    }
  }
});

const tariffsWebSlider = new Swiper('.tariffs-web__slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.tariffs-web__button_next',
    prevEl: '.tariffs-web__button_prev',
  },
});

const tariffsAppSlider = new Swiper('.tariffs-app__slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.tariffs-app__button_next',
    prevEl: '.tariffs-app__button_prev',
  },
});

const tariffsWebControlSlider = new Swiper('.tariffs-web__control-slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
});

tariffsWebControlSlider.controller.control = tariffsWebSlider;
tariffsWebSlider.controller.control = tariffsWebControlSlider;

const tariffsAppControlSlider = new Swiper('.tariffs-app__control-slider', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
});

tariffsAppControlSlider.controller.control = tariffsAppSlider;
tariffsAppSlider.controller.control = tariffsAppControlSlider;