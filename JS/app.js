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
            'series animadas'
  ],
  typeSpeed: 75,
  shuffle: true,
  backSpeed: 50,
  loop: true,
  cursorChar: '_',
  backDelay: 1500

});

const typed2 = new Typed('.typed2', {
  strings: [
            'Actualizadas día a día'
  ],
  typeSpeed: 75,
  backSpeed: 50,
  startDelay: 4000,
  cursorChar: '_',
  backDelay: 1500
});

const typed3 = new Typed('.typed3', {
  strings: [
            'Todas las plataformas disponibles',
            'Compatibilidad multidispositivo'
  ],
  typeSpeed: 30,
  backSpeed: 50,
  loop:true,
  cursorChar: '_',
  backDelay: 1500
});


