const swiper = new Swiper('.b-cards-slider__wrapper', {
    spaceBetween: 0,
    speed: 1000,

    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //         shadow: true,
    //         translate: ["-20%", 0, -1],
    //     },
    //     next: {
    //         translate: ["100%", 0, 0],
    //     },
    // },

    navigation: {
        nextEl: '.b-cards-slider__next',
        prevEl: '.b-cards-slider__prev',
    },

    watchSlidesProgress: true,

    breakpoints: {
        320: {
            speed: 1000,
            slidesPerView: 'auto',
            centeredSlides: true,
            watchSlidesProgress: true,
            // effect: "creative",
            // creativeEffect: {
            //     prev: {
            //         shadow: true,
            //         translate: ["-20%", 0, -1],
            //     },
            //     next: {
            //         translate: ["100%", 0, 0],
            //     },
            // },

            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        },

        730: {
            speed: 1000,
            spaceBetween: 40,
            watchSlidesProgress: true,
            slidesPerView: 2,
            initialSlide: 0,
            centeredSlides: false,
            // effect: "creative",
            // creativeEffect: {
            //     prev: {
            //         shadow: true,
            //         translate: ["-20%", 0, -1],
            //     },
            //     next: {
            //         translate: ["100%", 0, 0],
            //     },
            // },

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
            // effect: "creative",
            // creativeEffect: {
            //     prev: {
            //         shadow: true,
            //         translate: ["-20%", 0, -1],
            //     },
            //     next: {
            //         translate: ["100%", 0, 0],
            //     },
            // },

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

            // effect: "creative",
            // creativeEffect: {
            //     prev: {
            //         shadow: true,
            //         translate: ["-20%", 0, -1],
            //     },
            //     next: {
            //         translate: ["100%", 0, 0],
            //     },
            // },

            navigation: {
                nextEl: '.b-cards-slider__next',
                prevEl: '.b-cards-slider__prev',
            },
        }
    }
});
