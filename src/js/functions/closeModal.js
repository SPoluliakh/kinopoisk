import { backdropRef } from '../refs/refs';

export const closeByClick = evt => {
  if (evt.target.classList.contains('backdrop')) {
    closeModal();
  }
  if (evt.target.classList.contains('modal__close-icone')) {
    closeModal();
  }
};

export const closeByEsc = evt => {
  if (evt.code === 'Escape') {
    closeModal();
  }
};

export const closeModal = () => {
  backdropRef.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', closeByEsc);
  backdropRef.removeEventListener('click', closeByClick);
};
