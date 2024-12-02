import { showNavLiks } from "./app.js";

const navButton = document.getElementById("nav-button");
const navLinks = document.getElementById("nav-links");
const screenOverlay = document.getElementById("screen-overlay");
const loaderEl = document.getElementById("loader");
const passwordButton = document.getElementById("password");
const continuePasswordButton = document.getElementById("continue-password");
const passwordInput = document.getElementById("password-input");
const continuePasswordInput = document.getElementById("continue-password-input")

// Toggle input type between text and password
const toggleInputType = target => {
  let inputElem = target.previousElementSibling;
  console.log(inputElem);
  
}

window.addEventListener("load", () => {
  loaderEl.remove();
})
navButton.addEventListener("click", showNavLiks)

passwordButton.addEventListener("click", () => {
  if(passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
continuePasswordButton.addEventListener("click", () => {
  if(continuePasswordInput.type === "password") {
    continuePasswordInput.type = "text";
  } else {
    continuePasswordInput.type = "password";
  }
})