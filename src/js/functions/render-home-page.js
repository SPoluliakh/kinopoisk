import { getPopular } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { listRef } from '../refs/refs';
// import { givePaginationNumber } from '../functions/pagination';

// const { data } = givePaginationNumber();
// console.log(data);

export const moviesListMarkupFirstRender = async (page=1) => {
  try {
    // console.log(data);
    const movies = await getPopular(page);
    const { results } = movies.data;
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
};
