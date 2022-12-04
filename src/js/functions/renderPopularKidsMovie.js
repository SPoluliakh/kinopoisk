import {
  getPopularForKidsZero,
  getPopularForKidsSix,
  getPopularForKidsTwelve,
} from '../api/get-api';
import { getGenreOptions } from './local-storage';
import { makeMovieList } from '../components/movie-cards';
import {
  listRef,
  zeroPlus,
  sixPlus,
  twelvePlus,
  paginationContainer,
} from '../refs/refs';
import Pagination from 'tui-pagination';
import {
  makePaginationOptions,
  removeHiddenPagination,
} from '../functions/pagination';

export function renderKidsMoviesByAge(kidsAgeAPIFunction) {
  return async function renderKidsMovies(page = 1) {
    try {
      const movies = await kidsAgeAPIFunction(page);
      const { results, total_results } = movies.data;
      const paginationOptionsForKidsZero = makePaginationOptions(total_results);
      removeHiddenPagination();
      const genres = getGenreOptions() ?? [];
      const movieList = makeMovieList(results, genres);

      listRef.innerHTML = movieList;

      const paginationForKidsZero = new Pagination(
        paginationContainer,
        paginationOptionsForKidsZero
      );
      paginationForKidsZero.on(
        'afterMove',
        paginateKidsMoviesByAge(kidsAgeAPIFunction)
      );
    } catch (error) {
      console.log(error);
    }

    if (kidsAgeAPIFunction === getPopularForKidsZero) {
      zeroPlus.disabled = true;
      sixPlus.disabled = false;
      twelvePlus.disabled = false;
    }
    if (kidsAgeAPIFunction === getPopularForKidsSix) {
      zeroPlus.disabled = false;
      sixPlus.disabled = true;
      twelvePlus.disabled = false;
    }
    if (kidsAgeAPIFunction === getPopularForKidsTwelve) {
      zeroPlus.disabled = false;
      sixPlus.disabled = false;
      twelvePlus.disabled = true;
    }
  };
}

function paginateKidsMoviesByAge(kidsAgeAPIFunction) {
  return async function paginateKidsMovies(event) {
    const currentPage = event.page;
    const movies = await kidsAgeAPIFunction(currentPage);
    const { results } = movies.data;
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
