import { getPopular } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { listRef } from '../refs/refs';



export const moviesListMarkupFirstRender = async (page = 1) => {
  try {
    let pageNumber = '';
    localStorage.getItem('page') ? pageNumber = localStorage.getItem('page') : pageNumber = 1;
    const movies = await getPopular(pageNumber);
    const { results } = movies.data;
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    localStorage.setItem('movieList', JSON.stringify(movieList));
  } catch (err) {
    console.log(err);
  }
};
