import { darkmode } from './js/functions/darkmode';
import './js/functions/pagination';

import { moviesListMarkupFirstRender } from './js/functions/render-home-page';
import { setGenreOptions } from './js/functions/local-storage';
import { openMovieInfo } from './js/functions/openMovieInfo';
import { listRef, backdropRef } from './js/refs/refs';
import './js/functions/searchFilm';
import './js/functions/login';
import './js/functions/pagination';
import './js/functions/developersModal';
import { btnUp } from './js/components/to-top-button';
import { darkmode } from './js/functions/darkmode';

document.addEventListener('DOMContentLoaded', () => {
  setGenreOptions();
  moviesListMarkupFirstRender();
  listRef.addEventListener('click', evt => {
    openMovieInfo(evt);
    backdropRef.style.display = 'block';
  });
  btnUp.addEventListener();
  darkmode();
});
