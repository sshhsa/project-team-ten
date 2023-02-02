const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
