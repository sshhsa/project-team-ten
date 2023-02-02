(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-price]'),
    closeModalBtn: document.querySelector('[data-modal-close-price]'),
    modal: document.querySelector('[data-modal-price]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModalPrice);
  refs.closeModalBtn.addEventListener('click', toggleModalPrice);

  function toggleModalPrice() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
