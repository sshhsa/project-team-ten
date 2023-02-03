(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-price]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close-price]'),
    modal: document.querySelector('[data-modal-price]'),
  };

  refs.openModalBtns.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtns.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
