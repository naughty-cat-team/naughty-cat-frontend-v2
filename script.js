// =============Scroll animations
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// ==============Typetext
// let TxtType = function (el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = "";
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function () {
//   let i = this.loopNum % this.toRotate.length;
//   let fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//   let that = this;
//   let delta = 200 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function () {
//     that.tick();
//   }, delta);
// };

// window.onload = function () {
//   let elements = document.getElementsByClassName("typewrite");
//   for (let i = 0; i < elements.length; i++) {
//     let toRotate = elements[i].getAttribute("data-type");
//     let period = elements[i].getAttribute("data-period");
//     if (toRotate) {
//       new TxtType(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   let css = document.createElement("style");
//   css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #000}";
//   document.body.appendChild(css);
// };

// ===========Team swiper
// let swiper = new Swiper(".mySwiper", {
//   loop: true,
//   centeredSlides: true,
//   spaceBetween: 30,
//   grabCursor: true,
//   pauseOnHover: true,
//   // autoplay: true,
//   autoplaySpeed: 5000,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//       autoplay: false,
//     },
//     550: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//       autoplay: false,
//     },
//     720: {
//       slidesPerView: 2,
//     },
//     1150: {
//       slidesPerView: 2,
//     },
//     1920: {
//       slidesPerView: 3,
//     },
//   },
// });

// // $(document).ready(function () {
// //   $("#testimonial-slider").owlCarousel({
// //     items: 3,
// //     itemsDesktop: [1000, 3],
// //     itemsDesktopSmall: [979, 2],
// //     itemsTablet: [768, 2],
// //     itemsMobile: [650, 1],
// //     pagination: true,
// //     autoPlay: true,
// //   });
// // });
