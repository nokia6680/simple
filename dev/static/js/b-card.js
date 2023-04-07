const swiper = new Swiper('.b-cards-slider__wrapper', {
    spaceBetween: 0,
    speed: 1000,

    navigation: {
        nextEl: '.b-cards-slider__next',
        prevEl: '.b-cards-slider__prev',
    },

    breakpoints: {
        320: {
            speed: 1000,
            slidesPerView: 'auto',
            centeredSlides: true,

            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        },

        730: {
            speed: 1000,
            spaceBetween: 40,
            slidesPerView: 2,
            centeredSlides: false,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        },

        990: {
            speed: 1000,
            spaceBetween: 40,
            slidesPerView: 2,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        },

        1200: {
            speed: 1000,
            spaceBetween: 40,
            slidesPerView: 2,
            watchSlidesProgress: true,

            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        }
    }
});
