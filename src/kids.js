import {
  getPopularForKidsZero,
  getPopularForKidsSix,
  getPopularForKidsTwelve,
} from './js/api/get-api';
import { getGenreOptions } from './js/functions/local-storage';
import { makeMovieList } from './js/components/movie-cards';
import { listRef, zeroPlus, sixPlus, twelvePlus } from './js/refs/refs';
import './js/functions/developersModal';
import { openMovieInfo } from './js/functions/openMovieInfo';
import { btnUp } from './js/components/to-top-button';

import Letterize from 'letterizejs';
import anime from 'animejs/lib/anime.es.js';

document.addEventListener('DOMContentLoaded', () => {
  listRef.addEventListener('click', openMovieInfo);
  btnUp.addEventListener();
});
zeroPlus.addEventListener('click', renderKidsMovieForZero);
sixPlus.addEventListener('click', renderKidsMovieForSix);
twelvePlus.addEventListener('click', renderKidsMovieForTwelve);

// Отрисовка детских фильмов по критерию возраста 0+
export async function renderKidsMovieForZero(page = 1) {
  try {
    const movies = await getPopularForKidsZero(page);
    const { results } = movies.data;
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);

    listRef.innerHTML = movieList;
  } catch (error) {
    console.log(error);
  }
  zeroPlus.disabled = true;
  sixPlus.disabled = false;
  twelvePlus.disabled = false;
}
// Отрисовка детских фильмов по критерию возраста 6+
export async function renderKidsMovieForSix(page = 1) {
  try {
    const movies = await getPopularForKidsSix(page);

    const { results } = movies.data;

    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);

    listRef.innerHTML = movieList;
  } catch (error) {
    console.log(error);
  }
  zeroPlus.disabled = false;
  sixPlus.disabled = true;
  twelvePlus.disabled = false;
}
// Отрисовка детских фильмов по критерию возраста 12+
export async function renderKidsMovieForTwelve(page = 1) {
  try {
    const movies = await getPopularForKidsTwelve(page);

    const { results } = movies.data;

    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);

    listRef.innerHTML = movieList;
  } catch (error) {
    console.log(error);
  }
  zeroPlus.disabled = false;
  sixPlus.disabled = false;
  twelvePlus.disabled = true;
}

// Анимация текста
const test = new Letterize({
  targets: '.animate-me',
});
const animation = anime.timeline({
  targets: test.listAll,
  delay: anime.stagger(100, {
    grid: [test.list[0].length, test.list.length],
    from: 'center',
  }),
  loop: true,
});

animation
  .add({
    scale: 0.5,
  })
  .add({
    letterSpacing: '10px',
  })
  .add({
    scale: 1,
  })
  .add({
    letterSpacing: '6px',
  });

// ======== Анимация улитки =============
var design = anime({
  targets: 'svg #XMLID5',
  keyframes: [
    { translateX: -1200 },
    { rotateY: 180 },
    { translateX: 1500 },
    { rotateY: 0 },
    { translateX: -1200 },
    { rotateY: 180 },
    { translateX: 300 },
  ],
  easing: 'easeInOutSine',
  duration: 60000,
});
