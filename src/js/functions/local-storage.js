import { getGenreMovieList } from '../api/get-api';
import { watchedBtnRef, queueBtnRef } from '../refs/refs';
import { filmData } from '../functions/openMovieInfo';

const LOCAL_STORAGE_KEY = 'genres';

export const setGenreOptions = async () => {
  try {
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length > 0) {
      return;
    }
  } catch {
    const genre = await getGenreMovieList();
    const { genres } = genre.data;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(genres));
  }
};

export const getGenreOptions = () => {
  const genres = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  return genres;
};

let watched;
let queue;
let isAddedToWatched;
let isAddedToQueue;
let id;

export function modalBtnsHandler(externalId) {
  id = Number(externalId);

  if (!localStorage.getItem('watched')) {
    watchedBtnRef.textContent = 'add to watched';

    watched = [];
    localStorage.setItem('watched', JSON.stringify(watched));
  }
  if (!localStorage.getItem('queue')) {
    queueBtnRef.textContent = 'add to queue';

    queue = [];
    localStorage.setItem('queue', JSON.stringify(queue));
  }

  watched = JSON.parse(localStorage.getItem('watched'));
  isAddedToWatched = watched.findIndex(film => Number(film.id) === Number(id));

  if (isAddedToWatched === -1) {
    watchedBtnRef.textContent = 'add to watched';
  } else {
    watchedBtnRef.textContent = 'remove from watched';
  }

  queue = JSON.parse(localStorage.getItem('queue'));
  isAddedToQueue = queue.findIndex(film => Number(film.id) === Number(id));

  if (isAddedToQueue === -1) {
    queueBtnRef.textContent = 'add to queue';
  } else {
    queueBtnRef.textContent = 'remove from queue';
  }

  watchedBtnRef.addEventListener('click', onWatchedBtnClick);
  queueBtnRef.addEventListener('click', onQueueBtnClick);
}

export function onWatchedBtnClick() {
  watched = JSON.parse(localStorage.getItem('watched'));
  isAddedToWatched = watched.findIndex(film => Number(film.id) === id);

  if (isAddedToWatched === -1) {
    watched.push(filmData.data);
    localStorage.setItem('watched', JSON.stringify(watched));
    watchedBtnRef.textContent = 'remove from watched';
  } else {
    watched.splice(isAddedToWatched, 1);
    localStorage.setItem('watched', JSON.stringify(watched));
    watchedBtnRef.textContent = 'add to watched';
  }
}

export function onQueueBtnClick() {
  queue = JSON.parse(localStorage.getItem('queue'));
  isAddedToQueue = queue.findIndex(film => Number(film.id) === id);

  if (isAddedToQueue === -1) {
    queue.push(filmData.data);
    localStorage.setItem('queue', JSON.stringify(queue));
    queueBtnRef.textContent = 'remove from queue';
  } else {
    queue.splice(isAddedToQueue, 1);
    localStorage.setItem('queue', JSON.stringify(queue));
    queueBtnRef.textContent = 'add to queue';
  }
}

export function getWatchedItems() {
  try {
    return JSON.parse(localStorage.getItem('watched'));
  } catch (error) {
    console.log(error);
  }
}

export function getQueueItems() {
  try {
    return JSON.parse(localStorage.getItem('watched'));
  } catch (error) {
    console.log(error);
  }
}
