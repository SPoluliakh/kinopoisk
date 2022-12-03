import {
  backdropRef,
  watchedBtnRef,
  queueBtnRef,
  trailerWrapRef,
  trailerBtnRef,
} from '../refs/refs';
import { onWatchedBtnClick, onQueueBtnClick } from '../functions/local-storage';
import { makeFilmCardAfterDelitFromLibrary } from './render-lib-page';
import { onTrailerBtnClick, closeTrailer } from './get-trailers';
import { btnUp } from '../components/to-top-button';

export const closeByClick = evt => {
  if (!trailerWrapRef.classList.contains('is-hidden')) {
    closeTrailers();
    return;
  }

  if (evt.target.classList.contains('backdrop')) {
    closeModal();
    return;
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
    !trailerWrapRef.classList.contains('is-hidden')
      ? closeTrailers()
      : closeModal();
  }
};

const closeModal = () => {
  backdropRef.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', closeByEsc);
  backdropRef.removeEventListener('click', closeByClick);
  watchedBtnRef.removeEventListener('click', onWatchedBtnClick);
  queueBtnRef.removeEventListener('click', onQueueBtnClick);
  trailerBtnRef.removeEventListener('click', onTrailerBtnClick);
  makeFilmCardAfterDelitFromLibrary();
  btnUp.closeModalCheck();
};

const closeTrailers = () => {
  closeTrailer();
  trailerWrapRef.classList.add('is-hidden');
};
