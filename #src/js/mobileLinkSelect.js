document.addEventListener("DOMContentLoaded", () => {
  const linksSelect = document.querySelector('._mobile-link-select');
  if (linksSelect) {
    const linksSelectItems = document.querySelectorAll('._mobile-link-select li a');
    let options = '';
    linksSelectItems.forEach(el => {
      options += `<option value="${el.innerHTML}">${el.innerHTML}</option>`;
    });
  
    linksSelect.parentElement.insertAdjacentHTML('beforeend',
      `<select class="nav-select">${options}</select>`);
  }
});
