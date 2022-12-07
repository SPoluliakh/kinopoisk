import { darkmode } from './js/functions/darkmode';
import './js/functions/pagination';

import { moviesListMarkupFirstRender } from './js/functions/render-home-page';
import { setGenreOptions } from './js/functions/local-storage';
import { openMovieInfo } from './js/functions/open-movie-info';
import { listRef, backdropRef } from './js/refs/refs';
import './js/functions/search-film';
import './js/functions/login';
import './js/functions/pagination';
import './js/functions/developers-modal';
import { btnUp } from './js/components/to-top-button';
import { darkmode } from './js/functions/darkmode';

document.addEventListener('DOMContentLoaded', () => {
  setGenreOptions();
  moviesListMarkupFirstRender();
  listRef.addEventListener('click', evt => {
    backdropRef.style.display = 'block';
    openMovieInfo(evt);
  });
  btnUp.addEventListener();
  darkmode();
});
