(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open-table]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close-table]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtns.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtns.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    // openMenuBtn.addEventListener('click', toggleMenu);
    // closeMenuBtn.addEventListener('click', toggleMenu);
  }
})();
