import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { searchFormRef, listRef, paginationContainer, errorRef } from '../refs/refs';
import { getBySearchName } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import { pagination, updateMoviesList, makePaginationOptions } from '../functions/pagination';
import { startSpinner, stopSpinner } from "../components/spinner";

let searchValue;

searchFormRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  searchValue = event.currentTarget.searchQuery.value.trim();
  startSpinner();
  const movies = await getBySearchName(searchValue);
  const { results, total_results } = movies.data;
  const paginationOptions = makePaginationOptions(total_results);
  
  if (results.length === 0) {
    errorRef.classList.add('show-error');
    setTimeout(() => {
      errorRef.classList.remove('show-error');
    }, 3000);
    stopSpinner();
    return;
  }

  stopSpinner();
  errorRef.classList.remove('show-error');
  const genres = getGenreOptions() ?? [];
  const movieList = makeMovieList(results, genres);
  listRef.innerHTML = movieList;

  if (!searchValue) {
    errorRef.classList.add('show-error');
    setTimeout(() => {
      errorRef.classList.remove('show-error');
    }, 3000);
    stopSpinner();
    return;
  }

  // Pagination part

  try {
    pagination.reset();
    pagination.off('afterMove', updateMoviesList);
    const paginationByName = new Pagination(paginationContainer, paginationOptions);
    paginationByName.off('afterMove', updateMoviesListByName);
    paginationByName.on('afterMove', updateMoviesListByName);
  } catch (error) {
    console.log(error);
  }
}

async function updateMoviesListByName(event) {
  const currentPage = event.page;
  const movies = await getBySearchName(searchValue, currentPage);
  const { results } = movies.data;
  console.log(movies.data);
  const genres = getGenreOptions() ?? [];
  const movieList = makeMovieList(results, genres);
  listRef.innerHTML = movieList;
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}
