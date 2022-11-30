import { moviesListMarkupFirstRender } from './js/functions/render-home-page';
import { setGenreOptions } from './js/functions/local-storage';
import { openMovieInfo } from './js/functions/openMovieInfo';
import { listRef } from './js/refs/refs';

import './js/functions/searchFilm';
import './js/functions/pagination';

import './js/functions/developersModal';

import { btnUp } from './js/components/to-top-button';


document.addEventListener('DOMContentLoaded', () => {
  setGenreOptions();
  moviesListMarkupFirstRender();
  listRef.addEventListener('click', openMovieInfo);
  btnUp.addEventListener();
});
