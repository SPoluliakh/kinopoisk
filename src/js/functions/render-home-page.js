import { getPopular, getGenreMovieList } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { list } from '../refs/refs';
import { LOCAL_STORAGE_KEY } from '../refs/refs';

export const moviesListMarkup = async () => {
  try {
    const movies = await getPopular();
    const genre = await getGenreMovieList();
    const { genres } = genre.data;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(genres));
    const { results } = movies.data;
    const movieList = makeMovieList(results, genres);
    list.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
};
