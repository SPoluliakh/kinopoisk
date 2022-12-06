import { appendDevelopersMarkup } from '../components/developers-card.js';
// import Data from '../../../developers.json';
// const developers = Data.developers;

const refs = {
  modalOpen: document.querySelector('#open-modal'),
  modalClose: document.querySelector('#close-modal'),
  modal: document.querySelector('#modal'),
  backdrop: document.querySelector('#backdrop'),
  list: document.querySelector('.dev-modal__list'),
};

refs.modalOpen.addEventListener('click', onOpenModal);
refs.backdrop.addEventListener('click', onCloseModal);

function onOpenModal() {
  toggleModal();
  const renderedCards = appendDevelopersMarkup();
  refs.list.innerHTML = renderedCards;
}

function onCloseModal() {
  toggleModal();
  // refs.list.innerHTML = '';
}

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
