const backdrop = document.querySelector('.backdrop');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

const toggleModal = () => {
  backdrop.classList.toggle('is-open');
};

openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
