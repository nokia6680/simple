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
