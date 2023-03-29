const burger = document.querySelector('.ham');
const body = document.querySelector('body');
const language = document.querySelector('.header__user-language');
const modalBG = document.querySelector('.my-modal.language');
const close = document.querySelector('.show-modal .close');

burger.addEventListener('click', () => {
  body.classList.toggle('show-nav');
});

body.addEventListener('click', (e) => {
  if (
    e.target.matches('.header__user-language') ||
    e.target.matches('.header__user-language svg') ||
    e.target.matches('.my-modal-footer button') ||
    e.target.matches('.my-modal.language')
  ) {
    body.classList.toggle('show-modal');
  }

  console.log(e.target);
  if (e.target.matches('.my-close path')) {
    body.classList.remove('show-modal');
  }
});

var swiper = new Swiper('.mySwiper-banner', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.banner-swiper-button-next',
    prevEl: '.banner-swiper-button-prev',
  },
});

var swiper = new Swiper('.mySwiper-announcements', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.announcements-swiper-button-next',
    prevEl: '.announcements-swiper-button-prev',
  },
});
