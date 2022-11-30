import {
  getPopularForKidsZero,
  getPopularForKidsSix,
  getPopularForKidsTwelve,
  getBySearchName,
} from './js/api/get-api';
import { getGenreOptions } from './js/functions/local-storage';
import { makeMovieList } from './js/components/movie-cards';
import {
  listRef,
  zeroPlus,
  sixPlus,
  twelvePlus,
  kidsFormRef,
  kidsSearchFormRef,
  errorRef,
} from './js/refs/refs';
import './js/functions/developersModal';

import { openMovieInfo } from './js/functions/openMovieInfo';
import { listRef } from './js/refs/refs';
import { btnUp } from './js/components/to-top-button';

document.addEventListener('DOMContentLoaded', () => {
  listRef.addEventListener('click', openMovieInfo);
  btnUp.addEventListener();
});

// import './js/functions/pagination';

zeroPlus.addEventListener('click', renderKidsMovieForZero);
sixPlus.addEventListener('click', renderKidsMovieForSix);
twelvePlus.addEventListener('click', renderKidsMovieForTwelve);
// относится к поиску по имени
// kidsFormRef.addEventListener('submit', onFormSubmitKids);

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

// 1. Продумать и доработать ПОИСК по названиею
// async function onFormSubmitKids(event) {
//   event.preventDefault();
//   const searchValue = event.currentTarget.searchQuery.value.trim();

//   if (!searchValue) {
//     errorRef.classList.add('show-error');
//     setTimeout(() => {
//       errorRef.classList.remove('show-error');
//     }, 3000);
//     return;
//   }

//   try {
//     const movies = await getBySearchName(searchValue);
//     const { results } = movies.data;

//     if (results.length === 0) {
//       errorRef.classList.add('show-error');
//       setTimeout(() => {
//         errorRef.classList.remove('show-error');
//       }, 3000);
//       return;
//     }

//     errorRef.classList.remove('show-error');
//     const genres = getGenreOptions() ?? [];
//     const movieList = makeMovieList(results, genres);
//     listRef.innerHTML = movieList;
//     kidsSearchFormRef.value = '';
//   } catch (error) {
//     console.log(error);
//   }
// }

// 2. Сделать пагинацию или кнопку показать больше
// 3. Заблокировать возврат на главную страницу без пароля
