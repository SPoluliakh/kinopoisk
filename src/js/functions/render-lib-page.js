import { getWatchedItems, getQueueItems } from './local-storage';
import {
  listRef,
  libraryWatchedBtnRef,
  libraryQueueBtnRef,
  librarydivRef,
  homeSectionRef,
  kidsSectionRef,
} from '../refs/refs';
import { makeLibraryMovieList } from '../components/movie-cards';
import Pagination from 'tui-pagination';
import {
  makePaginationOptions,
  addHiddenPagination,
  removeHiddenPagination,
  cutPagesForPagination,
} from './pagination';
import { paginationContainer } from '../refs/refs';

// default Library Pagination

const localStorageQueue = getQueueItems();
const paginationOptionsForQueueMovies = makePaginationOptions(
  localStorageQueue?.length
);
const paginationForLibraryMoviesQueue = new Pagination(
  paginationContainer,
  paginationOptionsForQueueMovies
);

const localStorageWathed = getWatchedItems();
const paginationOptionsForWatchedMovies = makePaginationOptions(
  localStorageWathed?.length
);
const paginationForLibraryMovies = new Pagination(
  paginationContainer,
  paginationOptionsForWatchedMovies
);

// нажатие кнопок

export function onWatchedBtn() {
  libraryWatchedBtnRef.classList.add('active-button');
  libraryQueueBtnRef.classList.remove('active-button');
  const localStorageWathed = getWatchedItems();

  // pagination part
  const totalResults = localStorageWathed?.length;
  paginationForLibraryMoviesQueue.reset();
  paginationForLibraryMoviesQueue.off('afterMove', paginateQueueMovies);
  const paginationOptionsForWatchedMovies = makePaginationOptions(totalResults);
  const paginationForLibraryMovies = new Pagination(
    paginationContainer,
    paginationOptionsForWatchedMovies
  );
  paginationForLibraryMovies.on('afterMove', paginateWatchedMovies);

  if (localStorageWathed?.length > 0) {
    librarydivRef.classList.add('visually-hidden');
    librarydivRef.style.display = 'none';

    makeFilmCard(getWatchedItems);
  } else {
    listRef.innerHTML = '';
    librarydivRef.classList.remove('visually-hidden');
    librarydivRef.style.display = 'block';
  }
}

export function onQueueBtn() {
  libraryQueueBtnRef.classList.add('active-button');
  libraryWatchedBtnRef.classList.remove('active-button');
  const localStorageQueue = getQueueItems();

  // pagination part
  const totalResults = localStorageQueue?.length;
  paginationForLibraryMovies.reset();
  paginationForLibraryMovies.off('afterMove', paginateWatchedMovies);
  const paginationOptionsForQueueMovies = makePaginationOptions(totalResults);
  const paginationForLibraryMoviesQueue = new Pagination(
    paginationContainer,
    paginationOptionsForQueueMovies
  );
  paginationForLibraryMoviesQueue.on('afterMove', paginateQueueMovies);

  if (localStorageQueue?.length > 0) {
    librarydivRef.classList.add('visually-hidden');
    librarydivRef.style.display = 'none';
    makeFilmCard(getQueueItems);
  } else {
    listRef.innerHTML = '';
    librarydivRef.classList.remove('visually-hidden');
    librarydivRef.style.display = 'block';
  }
}

// создание карточки с фильмами

export function makeFilmCard(data = getWatchedItems) {
  try {
    const localStorageWathed = getWatchedItems();
    addHiddenPagination();
    paginationForLibraryMovies.on('afterMove', paginateWatchedMovies);

    if (
      localStorageWathed?.length > 0 &&
      libraryWatchedBtnRef.classList.contains('active-button')
    ) {
      librarydivRef.classList.add('visually-hidden');
      librarydivRef.style.display = 'none';
      removeHiddenPagination();
    } else if (
      localStorageWathed?.length <= 0 &&
      libraryWatchedBtnRef.classList.contains('active-button')
    ) {
      librarydivRef.classList.remove('visually-hidden');
      librarydivRef.style.display = 'block';
    }

    const movies = data() ?? [];
    const newMovies = cutPagesForPagination(movies);
    const ourMovies = newMovies[0]?.results ?? [];
    const movieList = makeLibraryMovieList(ourMovies);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}
// on Delete from library
export function makeFilmCardAfterDelitFromLibrary() {
  if (
    homeSectionRef?.classList.contains('home-page') ||
    kidsSectionRef?.classList.contains('kids-animation')
  ) {
    return;
  }
  if (libraryWatchedBtnRef?.classList.contains('active-button')) {
    deliteFromWatched();
    return;
  } else {
    deliteFromQueue();
    return;
  }
}

// delete from watched
export function deliteFromWatched() {
  try {
    const localStorageWathed = getWatchedItems();

    if (localStorageWathed?.length > 0) {
      librarydivRef.classList.add('visually-hidden');
      librarydivRef.style.display = 'none';
    } else {
      librarydivRef.classList.remove('visually-hidden');
      librarydivRef.style.display = 'block';
      addHiddenPagination();
    }

    const movieList = makeLibraryMovieList(localStorageWathed);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}

// delete from queue
export function deliteFromQueue() {
  try {
    const localStorageWathed = getQueueItems();

    if (localStorageWathed?.length > 0) {
      librarydivRef.classList.add('visually-hidden');
      librarydivRef.style.display = 'none';
    } else {
      librarydivRef.classList.remove('visually-hidden');
      librarydivRef.style.display = 'block';
      addHiddenPagination();
    }

    const movieList = makeLibraryMovieList(localStorageWathed);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}

function paginateWatchedMovies(event) {
  const currentPage = event.page;
  makeFilmCardForPagination(currentPage, getWatchedItems);
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

function paginateQueueMovies(event) {
  const currentPage = event.page;
  makeFilmCardForPagination(currentPage, getQueueItems);
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}

export function makeFilmCardForPagination(page = 1, getItemsFunction) {
  try {
    const localStorageWathed = getItemsFunction();
    const dataForPagination = cutPagesForPagination(localStorageWathed);
    const pageMovies = dataForPagination.find(element => element.page === page);
    const movies = pageMovies.results;

    const movieList = makeLibraryMovieList(movies);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}

//check is library empty. First render
export const checkFirstRender = () => {
  try {
    const localStorageWathed = getWatchedItems();
    if (
      !localStorageWathed &&
      libraryWatchedBtnRef.classList.contains('active-button')
    ) {
      librarydivRef.classList.remove('visually-hidden');
      librarydivRef.style.display = 'block';
    }
  } catch (err) {
    console.log(err);
  }
};
