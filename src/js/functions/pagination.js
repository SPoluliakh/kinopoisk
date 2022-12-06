import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { paginationSection, paginationContainer } from '../refs/refs';
import { moviesListMarkupFirstRender } from './render-home-page';

import { startSpinner, stopSpinner } from '../components/spinner';

export function makePaginationOptions(totalResults = 10000) {
  return {
    totalItems: totalResults, //total_results < 10000 ? total_results : 10000,
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
}

const options = makePaginationOptions();

export const pagination = new Pagination(paginationContainer, options);

pagination.on('afterMove', updateMoviesList);

export async function updateMoviesList(event) {
  const currentPage = event.page;

  startSpinner();
  await moviesListMarkupFirstRender(currentPage);
  stopSpinner();
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

export function addHiddenPagination() {
  paginationSection.classList.add('invisible');
}

export function removeHiddenPagination() {
  paginationSection.classList.remove('invisible');
}

export function cutPagesForPagination(dataArray, itemsPerPage = 20) {
  const dataLength = dataArray.length;
  const countPages = dataLength / itemsPerPage;
  let newDataArray = [];

  for (let index = 0; index < countPages; index += 1) {
    const firstMovieOnPage = index * itemsPerPage;
    const lastMovieOnPage = (index + 1) * itemsPerPage;
    newDataArray.push(dataArray.slice([firstMovieOnPage], [lastMovieOnPage]));
  }

  const paginationDataArray = [];

  newDataArray.map((element, index) => {
    let newObject = {};
    newObject.page = index + 1;
    newObject.results = element;
    paginationDataArray.push(newObject);
  });

  return paginationDataArray;
}
