const NAV = document.querySelector("nav");
const PIXELS_DOWN = 77;
const CLASS_NAME = "white";

document.addEventListener("scroll", () => {
  
  if (window.scrollY > PIXELS_DOWN) {
    NAV.classList.add(CLASS_NAME);
  }
  else {
    NAV.classList.remove(CLASS_NAME);
  }

})


// Cambio de imagen automático

const PORTADA = document.querySelector("#portada");
const IMAGES = ['background1.png','background2.png', 'background3.png'];

setInterval(() => {

}, 3000);


// Carrusel

$('.carousel').carousel({
  interval: 3000
})


// Typed

const typed = new Typed('.typed', {
  strings: [
            'películas',
            'series',
            'series de dibujos animados'
  ],
  typeSpeed: 75,
  shuffle: true,
  backSpeed: 50,
  loop: true,
  cursorChar: '_',
  backDelay: 1500

});