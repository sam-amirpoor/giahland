import { showNavLiks, showModal, hideModal } from "./utils.js";

const navButton = document.getElementById("nav-button");
const navLinks = document.getElementById("nav-links");
const screenOverlay = document.getElementById("screen-overlay");
const loaderEl = document.getElementById("loader");
const passwordButton = document.getElementById("password");
const continuePasswordButton = document.getElementById("continue-password");
const passwordInput = document.getElementById("password-input");
const continuePasswordInput = document.getElementById("continue-password-input")
const numberInput = document.getElementById("number-input");
const modalBox = document.getElementById("modal-box");
const modalTitleElem = document.getElementById("modal-title");
const modalConfirm = document.getElementById("modal-confirm");
const formEl = document.getElementById("form");
const emailInput = document.getElementById("email-input");

let isHide = true;

const emptyInputs = () => {
  passwordInput.value = "";
  continuePasswordInput.value = "";
  numberInput.value = "";
  emailInput.value = "";
}

const validation = () => {
  const regex = /^(?:\+98|0098|98|0)?[ ]?(?:\(|\.|\-)?[0-9]{2,3}[ ]?(?:\)|\.|\-)?[0-9]{3}[ ]?[0-9]{4}$/;
  let phoneNumber = numberInput.value;
  let isValid = true;

  showModal("اطلاعات شما با موفقیت ثبت شد", modalBox, modalTitleElem)  
  
  if (passwordInput.value !== continuePasswordInput.value) {
    showModal("رمز عبور وارد شده با تکرار آن مطابقت ندارد", modalBox, modalTitleElem);
    isValid = false;
  }
  
  if (!passwordInput.value || !continuePasswordInput.value) {
    showModal("لطفا رمز عبور خود را به درستی وارد کنید", modalBox, modalTitleElem);
    isValid = false;
  }
  
  if (!emailInput.value) {
    showModal("لطفا ایمیل خود را به درستی وارد کنید", modalBox, modalTitleElem);
    isValid = false;
  }

  if (!regex.test(phoneNumber)) {
    showModal("لطفا شماره موبایل خود را به درستی وارد کنید", modalBox, modalTitleElem);
    isValid = false;
  }

  if (isValid) emptyInputs();

}

window.addEventListener("load", () => {
  loaderEl.remove();
})
navButton.addEventListener("click", () => {
  isHide = showNavLiks(screenOverlay, navLinks, isHide)
})
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
modalConfirm.addEventListener("click", () => {
  hideModal(modalBox);
});
formEl.addEventListener("submit", event => {
  event.preventDefault();
  validation();
})
document.addEventListener("click", event => {
  if (event.target.id === "screen-overlay" || event.target.tagName === "A") {
    isHide = false;
    isHide = showNavLiks(screenOverlay, navLinks, isHide);
  }
  
});