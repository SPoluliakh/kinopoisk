import { makeModalCard } from '../components/movie-cards';
import { getMovieById } from '../api/get-api';

import noImg from '../../images/noimage.png';
import * as closeModal from './closeModal';

import {
  backdropRef,
  modalImgRef,
  modalTitleRef,
  modalRef,
  modalDescriptionRef,
} from '../refs/refs';

export async function openMovieInfo(evt) {
  const film = evt.target;
  if (film.classList.contains('movie-list')) return;

  const filmData = await getMovieById(film.dataset.id);
  const {
    poster_path,
    title,
    genres,
    vote_count,
    vote_average,
    popularity,
    overview,
  } = filmData.data;

  const card = makeModalCard(
    title,
    vote_count,
    vote_average,
    popularity,
    genres
  );
  modalRef.innerHTML = card;
  modalImgRef.src =
    `https://image.tmdb.org/t/p/original/${poster_path}` ?? `${noImg}`;
  modalImgRef.alt = `${title}`;
  modalTitleRef.textContent = `${title}`;
  modalDescriptionRef.textContent = `${overview}`;

  backdropRef.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeModal.closeByEsc);
  backdropRef.addEventListener('click', closeModal.closeByClick);
}
