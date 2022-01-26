const swiper = new Swiper('.net-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    autoplay: true,

    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },

    navigation: {
        nextEl: '.net-item__gallery-next',
        prevEl: '.net-item__gallery-prev',
    },
});

const swiper2 = new Swiper('.swiper-gallery-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    autoplay: false,

    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            opacity: 0,
            translate: ["-5%", 0, -1],
        },
        next: {
            opacity: 0,
            translate: ["5%", 0, 0],
        },
    },

    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 1000,
            autoplay: false,

            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    opacity: 0,
                    translate: ["-5%", 0, -1],
                },
                next: {
                    opacity: 0,
                    translate: ["5%", 0, 0],
                },
            },

            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        },

        1366: {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 1000,
            autoplay: false,

            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    opacity: 0,
                    translate: ["-5%", 0, -1],
                },
                next: {
                    opacity: 0,
                    translate: ["5%", 0, 0],
                },
            },


            navigation: {
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
            },
        }
    }
});

const swiper3 = new Swiper('.swiper-gallery-container-2', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    autoplay: false,

    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            opacity: 0,
            translate: ["-5%", 0, -1],
        },
        next: {
            opacity: 0,
            translate: ["5%", 0, 0],
        },
    },

    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 1000,
            autoplay: false,

            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    opacity: 0,
                    translate: ["-5%", 0, -1],
                },
                next: {
                    opacity: 0,
                    translate: ["5%", 0, 0],
                },
            },

            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        },

        1366: {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 1000,
            autoplay: false,

            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    opacity: 0,
                    translate: ["-5%", 0, -1],
                },
                next: {
                    opacity: 0,
                    translate: ["5%", 0, 0],
                },
            },


            navigation: {
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
            },
        }
    }
});
