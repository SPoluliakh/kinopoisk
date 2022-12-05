import { getGenreMovieList } from '../api/get-api';
import { watchedBtnRef, queueBtnRef } from '../refs/refs';
import { filmData } from '../functions/openMovieInfo';
import  { writeUserDataWathed, deleteUserDataWathed, writeUserDataQueue, deleteUserDataQueue} from '../functions/login';

const LOCAL_STORAGE_KEY = 'genres';

export const setGenreOptions = async () => {
  const genre = await getGenreMovieList();
  const { genres } = genre.data;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(genres));
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
    watchedBtnRef.textContent = 'ADD TO WATCHED';
    watchedBtnRef.classList.remove('modal__button--active');

    watched = [];
    localStorage.setItem('watched', JSON.stringify(watched));
  }
  if (!localStorage.getItem('queue')) {
    queueBtnRef.textContent = 'ADD TO QUEUE';
    queueBtnRef.classList.remove('modal__button--active');

    queue = [];
    localStorage.setItem('queue', JSON.stringify(queue));
  }

  watched = JSON.parse(localStorage.getItem('watched'));
  isAddedToWatched = watched.findIndex(film => Number(film.id) === Number(id));

  if (isAddedToWatched === -1) {
    watchedBtnRef.textContent = 'ADD TO WATCHED';
    watchedBtnRef.classList.remove('modal__button--active');
  } else {
    watchedBtnRef.textContent = 'REMOVE FROM WATCHED';
    watchedBtnRef.classList.add('modal__button--active');
  }

  queue = JSON.parse(localStorage.getItem('queue'));
  isAddedToQueue = queue.findIndex(film => Number(film.id) === Number(id));

  if (isAddedToQueue === -1) {
    queueBtnRef.textContent = 'ADD TO QUEUE';
    queueBtnRef.classList.remove('modal__button--active');
  } else {
    queueBtnRef.textContent = 'REMOVE FROM QUEUE';
    queueBtnRef.classList.add('modal__button--active');
  }

  watchedBtnRef.addEventListener('click', onWatchedBtnClick);
  queueBtnRef.addEventListener('click', onQueueBtnClick);
}

export function onWatchedBtnClick() {
  const watched = JSON.parse(localStorage.getItem('watched'));
  const isAddedToWatched = watched.findIndex(film => Number(film.id) === id);
  let watchedFilms;

  if (isAddedToWatched === -1) {
    watchedFilms = [...watched, filmData.data];
    writeUserDataWathed(localStorage.getItem('userID'), filmData.data.id,  
    filmData.data.poster_path,
    filmData.data.title,
    filmData.data.genres,
    filmData.data.release_date,
    filmData.data.id,);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
    watchedBtnRef.textContent = 'REMOVE FROM WATCHED';
    watchedBtnRef.classList.add('modal__button--active');
  } else {
    watchedFilms = watched.filter(movie => movie.id !== id);
    deleteUserDataWathed(localStorage.getItem('userID'), filmData.data.id);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
    watchedBtnRef.textContent = 'ADD TO WATCHED';
    watchedBtnRef.classList.remove('modal__button--active');
  }
}

export function onQueueBtnClick() {
  const queue = JSON.parse(localStorage.getItem('queue'));
  const isAddedToQueue = queue.findIndex(film => Number(film.id) === id);
  let queueFilms;

  if (isAddedToQueue === -1) {
    queueFilms = [...queue, filmData.data];
    writeUserDataQueue(localStorage.getItem('userID'), filmData.data.id,  
    filmData.data.poster_path,
    filmData.data.title,
    filmData.data.genres,
    filmData.data.release_date,
    filmData.data.id,);
    localStorage.setItem('queue', JSON.stringify(queueFilms));
    queueBtnRef.textContent = 'REMOVE FROM QUEUE';
    queueBtnRef.classList.add('modal__button--active');
  } else {
    queueFilms = queue.filter(movie => movie.id !== id);
    deleteUserDataQueue(localStorage.getItem('userID'), filmData.data.id);
    localStorage.setItem('queue', JSON.stringify(queueFilms));
    queueBtnRef.textContent = 'ADD TO QUEUE';
    queueBtnRef.classList.remove('modal__button--active');
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
    return JSON.parse(localStorage.getItem('queue'));
  } catch (error) {
    console.log(error);
  }
}
