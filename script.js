// Mobile menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("#header-nav");
const overlay = document.querySelector(".overlay");
function openNav() {
  overlay.style.width = "100%";
  openMenu.classList.add("active");
  closeMenu.classList.add("active");
  nav.classList.add("active");
  console.log("working");
}
function closeNav() {
  overlay.style.width = "0%";
  openMenu.classList.remove("active");
  closeMenu.classList.remove("active");
  nav.classList.remove("active");
}
// Scroll animation
const scroll = document.querySelectorAll(".scroll");

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

const showScroll = (element) => {
  element.classList.add("scrolled");
};

const hideScroll = (element) => {
  element.classList.remove("scrolled");
};

const handleScroll = () => {
  scroll.forEach((el) => {
    if (elementInView(el, 1.25)) {
      showScroll(el);
    } else if (elementOutofView(el)) {
      hideScroll(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScroll();
});