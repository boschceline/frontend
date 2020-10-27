// Bron: https://codepen.io/shooft/pen/BaKGKwm/ 
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
  // deButton.textContent = "✖";
}
