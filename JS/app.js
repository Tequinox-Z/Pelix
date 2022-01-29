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