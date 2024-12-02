import { showNavLiks } from "./app.js";

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

// Display modal box
const showModal = modalTitle => {
  modalTitleElem.innerHTML = modalTitle;
  
  modalBox.classList.replace("opacity-0", "opacity-100");
  modalBox.classList.replace("invisible", "visible");
}

// Hide modal box when button clicked
const hideModal = () => {
  modalBox.classList.replace("visible", "invisible");
  modalBox.classList.replace("opacity-100", "opacity-0");
}

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

  showModal("اطلاعات شما با موفقیت ثبت شد")  
  
  if (passwordInput.value !== continuePasswordInput.value) {
    showModal("رمز عبور وارد شده با تکرار آن مطابقت ندارد");
    isValid = false;
  }
  
  if (!passwordInput.value || !continuePasswordInput.value) {
    showModal("لطفا رمز عبور خود را به درستی وارد کنید");
    isValid = false;
  }
  
  if (!emailInput.value) {
    showModal("لطفا ایمیل خود را به درستی وارد کنید");
    isValid = false;
  }

  if (!regex.test(phoneNumber)) {
    showModal("لطفا شماره موبایل خود را به درستی وارد کنید");
    isValid = false;
  }

  if (isValid) emptyInputs();

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
modalConfirm.addEventListener("click", hideModal)
formEl.addEventListener("submit", event => {
  event.preventDefault();
  validation();
})