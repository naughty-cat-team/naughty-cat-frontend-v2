let swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pauseOnHover: true,
  // autoplay: true,
  autoplaySpeed: 5000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: false,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: false,
    },
    720: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    },
  },
});

// $(document).ready(function () {
//   $("#testimonial-slider").owlCarousel({
//     items: 3,
//     itemsDesktop: [1000, 3],
//     itemsDesktopSmall: [979, 2],
//     itemsTablet: [768, 2],
//     itemsMobile: [650, 1],
//     pagination: true,
//     autoPlay: true,
//   });
// });
