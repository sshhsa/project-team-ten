(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-room]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close-room]'),
    modal: document.querySelector('[data-modal-room]'),
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
