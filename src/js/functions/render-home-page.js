import { getPopular } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { listRef } from '../refs/refs';

export const moviesListMarkupFirstRender = async (page = 1) => {
  try {
    const movies = await getPopular(page);
    const { results } = movies.data;
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    if (page === 1) {
      localStorage.setItem('movieList', JSON.stringify(movieList));
    }
  } catch (err) {
    console.log(err);
  }
};
