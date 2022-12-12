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
import { listRef, paginationContainer } from '../refs/refs';

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
  checkLibraryPagination(localStorageWathed, libraryWatchedBtnRef);

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
  checkLibraryPagination(localStorageQueue, libraryQueueBtnRef);

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
    const localStorageWatched = getWatchedItems();
    checkLibraryPagination(localStorageWatched, libraryWatchedBtnRef);
    paginationForLibraryMovies.on('afterMove', paginateWatchedMovies);

    if (
      localStorageWatched?.length > 0 &&
      libraryWatchedBtnRef.classList.contains('active-button')
    ) {
      librarydivRef.classList.add('visually-hidden');
      librarydivRef.style.display = 'none';
    } else if (
      localStorageWatched?.length <= 0 &&
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
    // deliteFromWatched();
    deleteFromLibraryLists(getWatchedItems, libraryWatchedBtnRef);
    return;
  }
  if (libraryQueueBtnRef?.classList.contains('active-button')) {
    // deliteFromQueue();
    deleteFromLibraryLists(getQueueItems, libraryQueueBtnRef);
    return;
  }
}

// ================================================================================================

// listRef.addEventListener('click', onShowIdDeleteMovie);
// function onShowIdDeleteMovie(event) {
//   console.log(event.target.dataset.id);
// }

// delete from Library Page from Watched or Queue Lists:
export function deleteFromLibraryLists(getItemsFunction, libraryListBtnRef) {
    try {
      const localStorageList = getItemsFunction();
    
      if (localStorageList?.length > 0) {
        librarydivRef.classList.add('visually-hidden');
        librarydivRef.style.display = 'none';
      } else {
        librarydivRef.classList.remove('visually-hidden');
        librarydivRef.style.display = 'block';
      }

      checkLibraryPagination(localStorageList, libraryListBtnRef);

      currentLibraryPaginationPage = document.querySelector('strong');
      const currentPage = Number(currentLibraryPaginationPage.textContent);
      console.log(currentPage);

      // listRef.addEventListener('click', onShowIdDeleteMovie);
    
      const dataForPagination = cutPagesForPagination(localStorageList);
      console.log(dataForPagination);
      let pageMovies = dataForPagination.find(element => element.page === currentPage);
      console.log(pageMovies);
      if (pageMovies === undefined) {
        console.log('Hello from function - - - deleteFromLibraryLists!');
        // const lastPaginateBtn = document.querySelector('.tui-page-btn.tui-last-child');
        // lastPaginateBtn.style.display = 'none';
        // const dataForPaginationOnLastBtn = cutPagesForPagination(localStorageList);
        // pageMovies = dataForPaginationOnLastBtn.find(element => element.page === currentPage - 1);
      }
      const movies = pageMovies.results;
      const movieList = makeLibraryMovieList(movies);
      listRef.innerHTML = movieList;
    } catch (err) {
      console.log(err);
    }
}

// ================================================================================================

// // delete from watched
// export function deliteFromWatched() {
//   try {
//     const localStorageWatched = getWatchedItems();
    
//     if (localStorageWatched?.length > 0) {
//       librarydivRef.classList.add('visually-hidden');
//       librarydivRef.style.display = 'none';
//     } else {
//       librarydivRef.classList.remove('visually-hidden');
//       librarydivRef.style.display = 'block';
//     }

//     checkLibraryPagination(localStorageWatched, libraryWatchedBtnRef);
//     const movieList = makeLibraryMovieList(localStorageWatched);
//     listRef.innerHTML = movieList;
//   } catch (err) {
//     console.log(err);
//   }
// }

// // delete from queue
// export function deliteFromQueue() {
//   try {
//     const localStorageQueue = getQueueItems();

//     if (localStorageQueue?.length > 0) {
//       librarydivRef.classList.add('visually-hidden');
//       librarydivRef.style.display = 'none';
//     } else {
//       librarydivRef.classList.remove('visually-hidden');
//       librarydivRef.style.display = 'block';
//     }

//     checkLibraryPagination(localStorageQueue, libraryQueueBtnRef);
//     const movieList = makeLibraryMovieList(localStorageQueue);
//     listRef.innerHTML = movieList;
//   } catch (err) {
//     console.log(err);
//   }
// }

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
    if (pageMovies === undefined) {
      console.log('Hello from function - - - makeFilmCardForPagination!');
    }

    const movies = pageMovies.results;

    const movieList = makeLibraryMovieList(movies);
    listRef.innerHTML = movieList;
  } catch (error) {
    console.log(error);
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
    if (
      libraryWatchedBtnRef.classList.contains('active-button') &&
      !localStorageWathed
    ) {
      addHiddenPagination();
    }
  } catch (err) {
    console.log(err);
  }
};

function checkLibraryPagination(localStorageMovies, btnLibrary) {
  if (
    btnLibrary.classList.contains('active-button') &&
    localStorageMovies?.length === 0
  ) {
    addHiddenPagination();
  }
  if (
    btnLibrary.classList.contains('active-button') &&
    localStorageMovies?.length > 0
  ) {
    removeHiddenPagination();
  }
}
