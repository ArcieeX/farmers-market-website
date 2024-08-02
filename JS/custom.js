
let nav = document.querySelector(".navbar");
const burger = document.querySelector(".burger i");
burger.addEventListener("click", showNav);
function showNav() {
  console.log('hi hoe')
  burger.classList.toggle("fa-times")
  nav.classList.toggle("nav-active")
}




