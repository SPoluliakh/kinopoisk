import Pagination from 'tui-pagination';

import {
  searchFormRef,
  listRef,
  paginationContainer,
  errorRef,
  searchListRef,
  searchInputRef,
  cleanButtonRef,
  backdropRef,
} from '../refs/refs';
import { getBySearchName } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';
import {
  pagination,
  updateMoviesList,
  makePaginationOptions,
} from '../functions/pagination';
import { startSpinner, stopSpinner } from '../components/spinner';
import { debounce } from 'debounce';
import { openMovieInfo } from './open-movie-info';

let searchValue;

searchFormRef.addEventListener('submit', onFormSubmit);
searchInputRef.addEventListener('input', debounce(inputSearch, 500));
searchListRef.addEventListener('click', event => {backdropRef.style.display = "block"; openMovieInfo(event)});
cleanButtonRef.addEventListener('click', cleanSearch);

async function onFormSubmit(event) {
  event.preventDefault();
  searchValue = event.currentTarget.searchQuery.value.trim();
  startSpinner();
  if (!searchValue) {
    stopSpinner();
    return;
  }

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
  searchListRef.innerHTML = '';

  // Pagination part

  try {
    pagination.reset();
    pagination.off('afterMove', updateMoviesList);
    const paginationByName = new Pagination(
      paginationContainer,
      paginationOptions
    );
    paginationByName.off('afterMove', updateMoviesListByName);
    paginationByName.on('afterMove', updateMoviesListByName);
  } catch (error) {
    console.log(error);
  }
}

async function updateMoviesListByName(event) {
  const currentPage = event.page;
  localStorage.setItem('page', currentPage);
  const movies = await getBySearchName(searchValue, currentPage);
  const { results } = movies.data;
  console.log(movies.data);
  const genres = getGenreOptions() ?? [];
  const movieList = makeMovieList(results, genres);
  listRef.innerHTML = movieList;
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

async function inputSearch(event) {
  searchListRef.classList.remove('visually-hidden');
  searchListRef.innerHTML = '';
  backdropRef.style.display = 'block';
  searchValue = event.target.value.trim();

  if (!searchValue) {
    searchListRef.classList.add('visually-hidden');
    return;
  }

  startSpinner();
  const movies = await getBySearchName(searchValue);
  stopSpinner();
  const { results } = movies.data;
  if (results.length === 0) {
    errorRef.classList.add('show-error');
    setTimeout(() => {
      errorRef.classList.remove('show-error');
    }, 3000);
    return;
  }
  searchListRef.insertAdjacentHTML(
    'beforeend',
    makeSearchList(results.slice(0, 5))
  );
}

function makeSearchList(list) {
  let markup = '';
  list.forEach(
    ({ title, id, release_date }) =>
      (markup += `<li class="search-list-item" data-id=${id}>${title} <span class="release-date">(${
        release_date ? release_date.slice(0, 4) : 'no info'
      })</span></li>`)
  );
  return markup;
}

function cleanSearch() {
  searchInputRef.value = '';
  searchListRef.innerHTML = '';
  searchInputRef.focus();
}
