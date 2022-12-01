import { getWatchedItems } from './local-storage';
import { getQueueItems } from './local-storage';
import {
  listRef,
  libraryWatchedBtnRef,
  libraryQueueBtnRef,
  librarydivRef,
  homeSectionRef,
} from '../refs/refs';
import { makeLibraryMovieList } from '../components/movie-cards';

// наажтие кнопок

export function onWatchedBtn() {
  libraryWatchedBtnRef.classList.add('active-button');
  libraryQueueBtnRef.classList.remove('active-button');
  const localStorageWathed = getWatchedItems();
  if (localStorageWathed?.length > 0) {
    librarydivRef.classList.add('visually-hidden');
    makeFilmCard(getWatchedItems);
  } else {
    listRef.innerHTML = '';
    librarydivRef.classList.remove('visually-hidden');
  }
}

export function onQueueBtn() {
  libraryQueueBtnRef.classList.add('active-button');
  libraryWatchedBtnRef.classList.remove('active-button');

  const localStorageQueue = getQueueItems();

  if (localStorageQueue?.length > 0) {
    librarydivRef.classList.add('visually-hidden');
    makeFilmCard(getQueueItems);
  } else {
    listRef.innerHTML = '';
    librarydivRef.classList.remove('visually-hidden');
  }
}

// создание карточки с фильмами

export function makeFilmCard(data = getWatchedItems) {
  try {
    const localStorageWathed = getWatchedItems();

    if (localStorageWathed?.length > 0) {
      librarydivRef.classList.add('visually-hidden');
    }
    const movies = data() ?? [];
    const movieList = makeLibraryMovieList(movies);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}
// on Delit from library
export function makeFilmCardAfterDelitFromLibrary() {
  if (homeSectionRef?.classList.contains('home-page')) {
    return;
  }
  if (libraryWatchedBtnRef?.classList.contains('active-button')) {
    deliteFromWatched();
  } else {
    deliteFromQueue();
  }
}

// delite from watched
export function deliteFromWatched() {
  try {
    const localStorageWathed = getWatchedItems();

    if (localStorageWathed?.length > 0) {
      librarydivRef?.classList.add('visually-hidden');
    } else {
      librarydivRef?.classList.remove('visually-hidden');
    }

    const movieList = makeLibraryMovieList(localStorageWathed);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}

// delite from queue
export function deliteFromQueue() {
  try {
    const localStorageWathed = getQueueItems();

    if (localStorageWathed?.length > 0) {
      librarydivRef?.classList.add('visually-hidden');
    } else {
      librarydivRef?.classList.remove('visually-hidden');
    }
    const movieList = makeLibraryMovieList(localStorageWathed);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}
