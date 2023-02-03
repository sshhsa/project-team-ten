function swiperSlider() {
  const heroMain = document.querySelectorAll('[data-slider="test-slider"]');
  if (heroMain) {
    heroMain.forEach(slider => {
      let pagination = slider.querySelector('.swiper-pagination');

      let arrowPrev = slider.querySelector('.swiper-button-left');
      let arrownext = slider.querySelector('.swiper-button-right');

      swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
          },
        },
        navigation: {
          nextEl: arrownext,
          prevEl: arrowPrev,
        },
        // on: {
        //   transitionStart: function () {
        //     let previousIndex = this.previousIndex;
        //     let previousSlide =
        //       slider.getElementsByClassName("swiper-slide")[previousIndex];
        //     if (previousSlide) {
        //       setTimeout(function () {
        //         previousSlide.classList.remove("is-play");
        //       }, 1000);
        //     }
        //   },
        //   transitionEnd: function () {
        //     let activeIndex = this.activeIndex;
        //     let activeSlide =
        //       slider.getElementsByClassName("swiper-slide")[activeIndex];
        //     activeSlide.classList.add("is-play");
        //   },
        // },
        breakpoints: {
          1023.98: {
            spaceBetween: 34,
          },
          1279.98: {
            spaceBetween: 87,
          },
        },
      });
    });
  }
}
window.addEventListener('load', swiperSlider, false);
