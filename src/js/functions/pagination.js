import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { moviesListMarkupFirstRender } from '../functions/render-home-page';

const container = document.getElementById('tui-pagination-container');
const options = {
  // below default value of options
  totalItems: 1000, //total_results < 10000 ? total_results : 10000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(container, options);

pagination.on('afterMove', updateMoviesList);

export async function updateMoviesList(event) {
  const currentPage = event.page;

  await moviesListMarkupFirstRender(currentPage);
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

import { searchFormRef, listRef, errorRef } from '../refs/refs';
import { getBySearchName } from '../api/get-api';
import { makeMovieList } from '../components/movie-cards';
import { getGenreOptions } from './local-storage';

searchFormRef.addEventListener('submit', onFormSubmit);

let searchValue;

async function onFormSubmit(event) {
  event.preventDefault();
  searchValue = event.currentTarget.searchQuery.value.trim();
}

export async function updateMoviesListByName(event) {
  const currentPage = event.page;

  const movies = await getBySearchName(searchValue, currentPage);
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
