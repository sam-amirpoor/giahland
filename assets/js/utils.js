export const showNavLiks = (screenOverlay, navLinks, isHide) => {
  if (isHide) {
    navLinks.classList.replace("invisible", "visible");
    navLinks.classList.replace("opacity-0", "opacity-100");
    navLinks.classList.replace("top-28", "top-32");
    screenOverlay.classList.replace("invisible", "visible");
    screenOverlay.classList.replace("opacity-0", "opacity-50");
    return false;
  } else {
    navLinks.classList.replace("visible", "invisible");
    navLinks.classList.replace("opacity-100", "opacity-0");
    navLinks.classList.replace("top-32", "top-28");
    screenOverlay.classList.replace("visible", "invisible");
    screenOverlay.classList.replace("opacity-50", "opacity-0");
    return true;
  }
}

// Display modal box
export const showModal = (modalTitle, modalBox, modalTitleElem) => {
  modalTitleElem.innerHTML = modalTitle;
  
  modalBox.classList.replace("opacity-0", "opacity-100");
  modalBox.classList.replace("invisible", "visible");
}

// Hide modal box when button clicked
export const hideModal = modalBox => {
  modalBox.classList.replace("visible", "invisible");
  modalBox.classList.replace("opacity-100", "opacity-0");
}

