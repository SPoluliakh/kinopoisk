import { getGenreMovieList } from '../api/get-api';
import {
  watchedBtnRef,
  queueBtnRef,
  kidsSectionRef,
  homeSectionRef,
} from '../refs/refs';
import { filmData } from './open-movie-info';
import {
  writeUserDataWathed,
  deleteUserDataWathed,
  writeUserDataQueue,
  deleteUserDataQueue,
  listOfDataQueue,
  listOfDataWathed,
} from '../functions/login';

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
  if (localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null){
      let filmInListWathed = 0;
      listOfDataWathed.map(key => {
      if(Number(key.id) === id){return filmInListWathed = id}});
      console.log('id', filmInListWathed);
      if(filmInListWathed === 0){
        watchedBtnRef.textContent = 'ADD TO WATCHED';
        watchedBtnRef.classList.remove('modal__button--active');
      } else {
        watchedBtnRef.textContent = 'REMOVE FROM WATCHED';
        watchedBtnRef.classList.add('modal__button--active');
      }

      let filmInListQueue = 0;
      listOfDataQueue.map(key => {
      if(Number(key.id) === id){return filmInListQueue = id}});
      console.log('id', filmInListQueue);
      if(filmInListQueue === 0){
        queueBtnRef.textContent = 'ADD TO QUEUE';
        queueBtnRef.classList.remove('modal__button--active');
      } else {
        queueBtnRef.textContent = 'REMOVE FROM QUEUE';
        queueBtnRef.classList.add('modal__button--active');
      }
  }
  else 
  { if(!localStorage.getItem('watched')) {
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
}
  watchedBtnRef.addEventListener('click', onWatchedBtnClick);
  queueBtnRef.addEventListener('click', onQueueBtnClick);
}

export function onWatchedBtnClick() {
  let watched = [];
  localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null ? watched = listOfDataWathed : watched = JSON.parse(localStorage.getItem('watched'));
  const isAddedToWatched = watched.findIndex(film => Number(film.id) === id);
  let watchedFilms;

  if (isAddedToWatched === -1) {
    if (localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null){
      writeUserDataWathed(
        localStorage.getItem('userID'),
        filmData.data.id,
        filmData.data.poster_path,
        filmData.data.title,
        filmData.data.genres,
        filmData.data.release_date,
        filmData.data.id,
        filmData.data.vote_count,
        filmData.data.vote_average,
        filmData.data.popularity,
        filmData.data.overview
      );
      watchedBtnRef.textContent = 'REMOVE FROM WATCHED';
      watchedBtnRef.classList.add('modal__button--active');
    } else {
    watchedFilms = [...watched, filmData.data];
    console.log(filmData.data);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
    watchedBtnRef.textContent = 'REMOVE FROM WATCHED';
    watchedBtnRef.classList.add('modal__button--active');
  }} else {
    if (localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null){
      deleteUserDataWathed(localStorage.getItem('userID'), filmData.data.id);
      watchedBtnRef.textContent = 'ADD TO WATCHED';
      watchedBtnRef.classList.remove('modal__button--active');
    } else {
    watchedFilms = watched.filter(movie => movie.id !== id);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
    watchedBtnRef.textContent = 'ADD TO WATCHED';
    watchedBtnRef.classList.remove('modal__button--active');
  }}
}

export function onQueueBtnClick() {
  let queue = [];
  localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null ? queue = listOfDataQueue: queue = JSON.parse(localStorage.getItem('queue'));
  const isAddedToQueue = queue.findIndex(film => Number(film.id) === id);
  let queueFilms;

  if (isAddedToQueue === -1) {
    if (localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null){
      writeUserDataQueue(
        localStorage.getItem('userID'),
        filmData.data.id,
        filmData.data.poster_path,
        filmData.data.title,
        filmData.data.genres,
        filmData.data.release_date,
        filmData.data.id,
        filmData.data.vote_count,
        filmData.data.vote_average,
        filmData.data.popularity,
        filmData.data.overview
      );
      queueBtnRef.textContent = 'REMOVE FROM QUEUE';
      queueBtnRef.classList.add('modal__button--active');
    } else {
    queueFilms = [...queue, filmData.data];
    localStorage.setItem('queue', JSON.stringify(queueFilms));
    queueBtnRef.textContent = 'REMOVE FROM QUEUE';
    queueBtnRef.classList.add('modal__button--active');
  } }
  else {
    if (localStorage.getItem('userID') !== '' && localStorage.getItem('userID') !== null){
      deleteUserDataQueue(localStorage.getItem('userID'), filmData.data.id);
      queueBtnRef.textContent = 'ADD TO QUEUE';
      queueBtnRef.classList.remove('modal__button--active');
    } else {
    queueFilms = queue.filter(movie => movie.id !== id);
    localStorage.setItem('queue', JSON.stringify(queueFilms));
    queueBtnRef.textContent = 'ADD TO QUEUE';
    queueBtnRef.classList.remove('modal__button--active');
  }}
}

export function getWatchedItems() {
  if (!kidsSectionRef && !homeSectionRef) {
    try {
      return localStorage.getItem('userID') !== '' &&
        localStorage.getItem('userID') !== null
        ? listOfDataWathed
        : JSON.parse(localStorage.getItem('watched'));
    } catch (error) {
      console.log(error);
    }
  }
}

export function getQueueItems() {
  if (!kidsSectionRef && !homeSectionRef) {
    try {
      return localStorage.getItem('userID') !== '' &&
        localStorage.getItem('userID') !== null
        ? listOfDataQueue
        : JSON.parse(localStorage.getItem('queue'));
    } catch (error) {
      console.log(error);
    }
  }
}
