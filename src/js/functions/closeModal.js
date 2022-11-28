import { backdropRef, watchedBtnRef, queueBtnRef } from '../refs/refs';
import { onWatchedBtnClick, onQueueBtnClick } from '../functions/local-storage';

export const closeByClick = evt => {
  if (evt.target.classList.contains('backdrop')) {
    closeModal();
  }
  if (
    evt.target.classList.contains('modal__close-icone') ||
    evt.target.classList.contains('modal__close-icone-inner')
  ) {
    closeModal();
  }
};

export const closeByEsc = evt => {
  if (evt.code === 'Escape') {
    closeModal();
  }
};

const closeModal = () => {
  backdropRef.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', closeByEsc);
  backdropRef.removeEventListener('click', closeByClick);
  watchedBtnRef.removeEventListener('click', onWatchedBtnClick);
  queueBtnRef.removeEventListener('click', onQueueBtnClick);
};
