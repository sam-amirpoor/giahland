// Use swiper.js
const houseplantsSwiper = new Swiper('.houseplants-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-next-btn',
  }
});

const ornamentalplantsSwiper = new Swiper('.ornamentalplants-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.ornamentalplants-slider-next-btn',
  }
});

const giftPlantsSwiper = new Swiper('.gift-plants-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.gift-plants-slider-next-btn',
  }
});