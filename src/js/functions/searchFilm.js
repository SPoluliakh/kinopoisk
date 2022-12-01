import { searchFormRef, searchInputRef, listRef, errorRef } from '../refs/refs';
import { getBySearchName } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { pagination, updateMoviesList } from '../functions/pagination';

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const searchValue = event.currentTarget.searchQuery.value.trim();
  const movies = await getBySearchName(searchValue);
    console.log(movies.data);
    const { results } = movies.data;

    if (results.length === 0) {
      errorRef.classList.add('show-error');
      setTimeout(() => {
        errorRef.classList.remove('show-error');
      }, 3000);
      return;
    }

    errorRef.classList.remove('show-error');
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    // searchInputRef.value = '';
  
  if (!searchValue) {
    errorRef.classList.add('show-error');
    setTimeout(() => {
      errorRef.classList.remove('show-error');
    }, 3000);
    return;
  }
// ========================================================================
  try {
    pagination.reset();
    pagination.off('afterMove', updateMoviesList);
    pagination.on('afterMove', updateMoviesListByName);
  } catch (error) {
    console.log(error);
  }

  async function updateMoviesListByName(event) {
    const currentPage = event.page;

    console.log(searchValue);
    console.log(currentPage);

    const movies = await getBySearchName(searchValue, currentPage);
    console.log(movies.data);
    const { results } = movies.data;

    if (results.length === 0) {
      errorRef.classList.add('show-error');
      setTimeout(() => {
        errorRef.classList.remove('show-error');
      }, 3000);
      return;
    }

    errorRef.classList.remove('show-error');
    const genres = getGenreOptions() ?? [];
    const movieList = makeMovieList(results, genres);
    listRef.innerHTML = movieList;
    // searchInputRef.value = '';
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}