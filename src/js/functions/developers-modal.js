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

refs.modalOpen.addEventListener('click', () => {
  backdrop.style.display = 'block';
  setTimeout(() => onOpenModal(), 70);
});

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  const renderedCards = appendDevelopersMarkup();
  refs.list.innerHTML = renderedCards;

  window.addEventListener('keydown', closeByEsc);
  refs.backdrop.addEventListener('click', closeByClick);
}

const closeByEsc = evt => {
  if (evt.code === 'Escape') {
    closeModal();
  }
};

const closeByClick = evt => {
  if (evt.target.classList.contains('dev-backdrop')) {
    closeModal();
    return;
  }
  if (
    evt.target.classList.contains('dev-modal__close-icone') ||
    evt.target.classList.contains('dev-modal__close-icone-inner')
  ) {
    closeModal();
  }
};

function closeModal() {
  document.body.style.overflow = '';
  refs.backdrop.classList.add('is-hidden');
  setTimeout(() => (refs.backdrop.style.display = 'none'), 350);
  window.removeEventListener('keydown', closeByEsc);
  refs.backdrop.removeEventListener('click', closeByClick);
}
