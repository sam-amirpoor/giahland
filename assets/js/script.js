const navLinks = document.getElementById("nav-links");
const navButton = document.getElementById("nav-button");
const screenOverlay = document.getElementById("screen-overlay");

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
      nextEl: '.slider-next-btn',
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

const showNavLiks = () => {
  if (isHide) {
    navLinks.classList.replace("invisible", "visible");
    navLinks.classList.replace("opacity-0", "opacity-100");
    navLinks.classList.replace("top-28", "top-32");
    screenOverlay.classList.replace("invisible", "visible");
    screenOverlay.classList.replace("opacity-0", "opacity-50");
    isHide = false;
  } else {
    navLinks.classList.replace("visible", "invisible");
    navLinks.classList.replace("opacity-100", "opacity-0");
    navLinks.classList.replace("top-32", "top-28");
    screenOverlay.classList.replace("visible", "invisible");
    screenOverlay.classList.replace("opacity-50", "opacity-0");
    isHide = true;
  }
}

window.addEventListener("resize", setSlidesPerView);
window.addEventListener("load", setSlidesPerView);
navButton.addEventListener("click", showNavLiks);
document.addEventListener("click", event => {
  if (event.target.id === "screen-overlay" || event.target.tagName === "A") {
    showNavLiks();
  }
  
})