import './js/functions/developersModal';
import { openMovieInfo } from './js/functions/openMovieInfo';
import {
  listRef,
  libraryWatchedBtnRef,
  libraryQueueBtnRef,
} from './js/refs/refs';
import { btnUp } from './js/components/to-top-button';
import {
  onQueueBtn,
  onWatchedBtn,
  makeFilmCard,
} from './js/functions/render-lib-page';
import { btnUp } from './js/components/to-top-button';
import { darkmode } from './js/functions/darkmode';

document.addEventListener('DOMContentLoaded', () => {
  makeFilmCard();
  listRef.addEventListener('click', openMovieInfo);
  btnUp.addEventListener();
  libraryQueueBtnRef.addEventListener('click', onQueueBtn);
  libraryWatchedBtnRef.addEventListener('click', onWatchedBtn);
  darkmode();
});
