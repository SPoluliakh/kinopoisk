import { getMovieTrailer } from '../api/get-api';
import { trailerBtnRef, trailerWrapRef } from '../refs/refs';
import { startSpinner, stopSpinner } from '../components/spinner';

export const trailerShow = trailerBtnRef.addEventListener('click', () => onTrailerBtnClick(document.querySelector('.modal__button--trailer').dataset.id));

export async function onTrailerBtnClick(id) {
  startSpinner();
  const result = await getMovieTrailer(id);
  stopSpinner();

  if (result.data.results.length > 0) {
    const { key } = result?.data?.results[0];

    const trailer = `<iframe id="trailer" class="player" type="text/html" allowfullscreen="allowfullscreen"
  src="https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1"
  frameborder="0"></iframe>`;

    trailerWrapRef.classList.remove('is-hidden');
    // console.log(trailer);
     (trailerWrapRef.innerHTML = trailer);
  } else {
    alert("Sorry, we dont't have traler for this move")
  }
}

export function closeTrailer() {
  const trailer = `<iframe id="trailer" class="player is-hidden" type="text/html" allowfullscreen="allowfullscreen"
  src=""
  frameborder="0"></iframe>`;
  return (trailerWrapRef.innerHTML = trailer);
}
