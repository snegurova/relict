@@include('./libs/swiper-bundle.js', {})

    /*------
     Sliders
    --------*/


const lastNewsSlider = new Swiper('.last-news__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },
});


