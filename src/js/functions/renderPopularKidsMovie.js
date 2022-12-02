import {
  getPopularForKidsZero,
  getPopularForKidsSix,
  getPopularForKidsTwelve,
} from '../api/get-api';
import { getGenreOptions } from './local-storage';
import { makeMovieList } from '../components/movie-cards';
import { listRef, zeroPlus, sixPlus, twelvePlus } from '../refs/refs';
import { hiddenGameSnake } from '../components/snake';
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
  hiddenGameSnake();
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
  hiddenGameSnake();
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
  hiddenGameSnake();
}
