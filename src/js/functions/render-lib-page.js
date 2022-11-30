import { getWatchedItems } from './local-storage';
import { getQueueItems } from './local-storage';
import { listRef } from '../refs/refs';
import { makeLibraryMovieList } from '../components/movie-cards';

const watchedBtn = document.querySelector('.watched-button');
const queueBtn = document.querySelector('.queue-button');
const div = document.querySelector('.empty-lib');
queueBtn.addEventListener('click', onQueueBtn);
watchedBtn.addEventListener('click', onWatchedBtn);
// рендер фильмов при открытии страницы

makeFilmCard();

// наажтие кнопок

function onWatchedBtn() {
  watchedBtn.classList.add('active-button');
  queueBtn.classList.remove('active-button');
  const localStorageWathed = getWatchedItems();
  if (localStorageWathed?.length > 0) {
    console.log(localStorageWathed.length > 0);
    div.classList.add('visually-hidden');
    makeFilmCard(getWatchedItems);
  } else {
    listRef.innerHTML = '';
    div.classList.remove('visually-hidden');
  }
}

function onQueueBtn() {
  queueBtn.classList.add('active-button');
  watchedBtn.classList.remove('active-button');

  const localStorageQueue = getQueueItems();

  if (localStorageQueue?.length > 0) {
    div.classList.add('visually-hidden');
    makeFilmCard(getQueueItems);
  } else {
    listRef.innerHTML = '';
    div.classList.remove('visually-hidden');
  }
}

// создание карточки с фильмами

function makeFilmCard(data = getWatchedItems) {
  try {
    const localStorageWathed = getWatchedItems();

    if (localStorageWathed?.length > 0) {
      console.log(localStorageWathed.length > 0);
      div.classList.add('visually-hidden');
    }
    const movies = data() ?? [];
    const movieList = makeLibraryMovieList(movies);
    listRef.innerHTML = movieList;
  } catch (err) {
    console.log(err);
  }
}
