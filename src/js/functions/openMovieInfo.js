import { makeModalCard, makeModalGenre } from '../components/movie-cards';
import { getMovieById } from '../api/get-api';
import { backdropRef } from '../refs/refs';

import {
  backdropRef,
  modalImgRef,
  modalTitleRef,
  modalGenresRef,
  modalRef,
} from '../refs/refs';

export async function openMovieInfo(evt) {
  const film = evt.target;
  if (!film.classList.contains('movie-card')) return;
  const filmData = await getMovieById(film.dataset.id);
  const { poster_path, title, genres, vote_count, vote_average, popularity } =
    filmData.data;
  const card = makeModalCard(title, vote_count, vote_average, popularity);
  modalRef.innerHTML = card;
  modalImgRef.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  modalImgRef.alt = `${title}`;
  modalTitleRef.textContent = `${title}`;
  const a = makeModalGenre(genres);
  modalGenresRef.textContent = `${a}`;
  backdropRef.classList.remove('is-hidden');
}
