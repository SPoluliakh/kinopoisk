import { getMovieTrailer } from '../api/get-api';
import { trailerBtnRef, trailerWrapRef } from '../refs/refs';

export const getTrailer = id => {
  trailerBtnRef.addEventListener('click', () => onTrailerBtnClick(id));
};

export async function onTrailerBtnClick(id) {
  const result = await getMovieTrailer(id);
  const { key } = result.data.results[0];

  const trailer = `<iframe class="player" type="text/html" allowfullscreen="allowfullscreen"
  src="https://www.youtube.com/embed/${key}"
  frameborder="0"></iframe>`;

  trailerWrapRef.classList.remove('is-hidden');
  return (trailerWrapRef.innerHTML = trailer);
}

export async function closeTrailer() {
  const trailer = `<iframe class="player" type="text/html" allowfullscreen="allowfullscreen"
  src=""
  frameborder="0"></iframe>`;

  trailerWrapRef.classList.remove('is-hidden');
  return (trailerWrapRef.innerHTML = trailer);
}
