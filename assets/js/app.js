import { showNavLiks } from "./utils.js";

const navLinks = document.getElementById("nav-links");
const navButton = document.getElementById("nav-button");
const screenOverlay = document.getElementById("screen-overlay");
const loaderEl = document.getElementById("loader");

let slidesPerView = null;
let isHide = true;

// Set slides per view for sliders in any device sizes
const setSlidesPerView = () => {
  let innerWidth = window.innerWidth;

  if (innerWidth > 1300) {
    slidesPerView = 4;
  } else if (innerWidth > 1100 && innerWidth <= 1300) {
    slidesPerView = 3;
  } else if (innerWidth > 800 && innerWidth <= 1100) {
    slidesPerView = 2;
  } else if (innerWidth < 800) {
    slidesPerView = 1;
  } 

  // Use swiper.js
  let houseplantsSwiper = new Swiper('.houseplants-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: slidesPerView,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.houseplants-slider-next-btn',
    }
  });

  let ornamentalplantsSwiper = new Swiper('.ornamentalplants-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: slidesPerView,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.ornamentalplants-slider-next-btn',
    }
  });

  let giftPlantsSwiper = new Swiper('.gift-plants-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: slidesPerView,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.gift-plants-slider-next-btn',
    }
  });
}

window.addEventListener("resize", setSlidesPerView);
window.addEventListener("load", () => {
  setSlidesPerView()
  loaderEl.remove();
});
navButton.addEventListener("click", showNavLiks);
document.addEventListener("click", event => {
  if (event.target.id === "screen-overlay" || event.target.tagName === "A") {
    isHide = false;
    showNavLiks();
  }
  
});