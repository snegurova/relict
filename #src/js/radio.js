
//Shop radio buttons
const radioButtons = document.querySelectorAll('._radio');

const removeActive = (elements) => {
  elements.forEach((el) => {
    el.classList.remove("_active");
  });
};

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', (e) => {
    e.preventDefault();
    removeActive(radioButtons);
    e.target.parentElement.classList.add("_active");
  });
});
