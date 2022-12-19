export const swiperTrainers = new window.Swiper('.swiper-trainers', {
  watchoverflow: true,
  slidesPerColumn: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-trainers-button-next',
    prevEl: '.swiper-trainers-button-prev',
  },
});

export const swiperReviews = new window.Swiper('.swiper-reviews', {
  watchoverflow: true,
  slidesPerColumn: 1,
  slidesPerView: 1,
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-reviews-button-next',
    prevEl: '.swiper-reviews-button-prev',
  },
});
