import './js/functions/render-lib-page';
import './js/functions/developersModal';
import { openMovieInfo } from './js/functions/openMovieInfo';
import { listRef } from './js/refs/refs';
import { btnUp } from './js/components/to-top-button';

document.addEventListener('DOMContentLoaded', () => {
  listRef.addEventListener('click', openMovieInfo);
  btnUp.addEventListener();
});
