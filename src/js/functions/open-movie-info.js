import { makeModalCard } from '../components/movie-cards';
import { getMovieById } from '../api/get-api';
import { modalBtnsHandler } from './local-storage';
import noImg from '../../images/noimage.png';
import * as closeModal from './close-modal';
import { getTrailer } from './get-trailers';
import { startSpinner, stopSpinner } from '../components/spinner';

import {
  backdropRef,
  modalImgRef,
  modalTitleRef,
  modalRef,
  modalDescriptionRef,
} from '../refs/refs';
import { btnUp } from '../components/to-top-button';

let filmData;
export { filmData };

export async function openMovieInfo(evt) {
  const film = evt.target;
  if (film.classList.contains('movie-list')) return;

  startSpinner();
  filmData = await getMovieById(film.dataset.id);
  stopSpinner();
  const {
    poster_path,
    title,
    genres,
    vote_count,
    vote_average,
    popularity,
    overview,
    id,
  } = filmData.data;

  const card = makeModalCard(
    title,
    vote_count,
    vote_average,
    popularity,
    genres
  );
  modalRef.innerHTML = card;
  modalImgRef.src = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : `${noImg}`;
  modalImgRef.alt = `${title}`;
  modalTitleRef.textContent = `${title}`;
  modalDescriptionRef.textContent = `${overview}`;

  modalBtnsHandler(id);
  btnUp.hide();
  document.querySelector('.modal__button--trailer').setAttribute('data-id', film.dataset.id)
  // getTrailer(film.dataset.id);

  backdropRef.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeModal.closeByEsc);
  backdropRef.addEventListener('click', closeModal.closeByClick);
}
