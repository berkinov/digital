const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  headerBurger.classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});

let headerLink = document.querySelectorAll('.header__link');
for (let i = 0; i < headerLink.length; i++) {
  const element = headerLink[i];
  element.addEventListener('click', function() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    document.querySelector('body').classList.remove('active');
  })
}