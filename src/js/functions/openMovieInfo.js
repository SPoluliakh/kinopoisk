import { makeOneCard } from '../components/movie-cards';
import { getMovieById } from '../api/get-api';
import { list } from '../refs/refs';

list.addEventListener('click', openMovieInfo);

function openMovieInfo(evt) {
  if (evt.target.classList.contains('movie-card')) {
    console.log(evt.target);
  }
}
