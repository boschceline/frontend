// Celine van den Bosch, 500707642, 210B, 28.10.2020

// Bron: https://codepen.io/shooft/pen/BaKGKwm/
var deButton = document.querySelector("nav button");
var ourPricingChange = document.querySelector("section.ourPricingSection");

deButton.addEventListener("click", toggleMenu);
ourPricingChange.addEventListener("click", changeColor);

// Uitschuifbaar menu voor mobiel
function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

// Kleur veranderen van de Our Pricing cirkel
function changeColor() {
  ourPricingChange.classList.toggle("change");
}
