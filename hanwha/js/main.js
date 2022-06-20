$(document).ready(function () {

  var groups = new Swiper('.groups-inner .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: true,
      speed: 5000,
      freeMode: true,
      autoplay: {
          delay: 0,
          disableOnInteraction: false
      },
      allowTouchMove: false,
      breakpoints: {
          768: {
              slidesPerView: 1.5
          }, 992: {
              slidesPerView: 3
          }, 1200: {
              slidesPerView: 3
          }
      }
  });

});