import { searchFormRef, searchInputRef, listRef, errorRef } from '../refs/refs';
import { getBySearchName } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.searchQuery.value.trim();

  if (!searchValue) {
    errorRef.classList.add('show-error');
    return;
  }

  try {
    const movies = await getBySearchName(searchValue);
    const { results } = movies.data;

    if (results.length === 0) {
      errorRef.classList.add('show-error');
      return;
    }

    errorRef.classList.remove('show-error');
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    searchInputRef.value = '';
  } catch (error) {
    console.log(error);
  }
}
