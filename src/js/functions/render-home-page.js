import { getPopular } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { listRef } from '../refs/refs';

export const moviesListMarkupFirstRender = async (page = 1) => {
  try {
    const movies = await getPopular(page);
    console.log(movies.data);
    const { results, total_pages, total_results } = movies.data;
    console.log(results);
    console.log(total_pages);
    console.log(total_results);
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
};