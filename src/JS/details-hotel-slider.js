function swiperSlider() {
  const detailsRest = document.querySelectorAll(
    '[data-slider="details-hotel"]'
  );
  if (detailsRest) {
    detailsRest.forEach(slider => {
      let arrowPrev = slider.querySelector('.swiper-button-left');
      let arrowNext = slider.querySelector('.swiper-button-right');

      const swiper = new Swiper(slider.querySelector('.swiper-details-hotel'), {
        speed: 1500,
        slidesPerView: 'auto',
        spaceBetween: 20,
        swipeDirection: 'prev',

        navigation: {
          nextEl: arrowNext,
          prevEl: arrowPrev,
        },
        breakpoints: {
          1023.98: {
            spaceBetween: 34,
          },
          1279.98: {
            spaceBetween: 87,
          },
        },
      });
      swiper.slideTo(12, false, false);
    });
  }
}
window.addEventListener('load', swiperSlider, false);
