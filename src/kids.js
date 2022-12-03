import {
  getPopularForKidsZero,
  getPopularForKidsSix,
  getPopularForKidsTwelve,
} from './js/api/get-api';
import {
  renderKidsMoviesByAge,
} from './js/functions/renderPopularKidsMovie';
import {
  listRef,
  zeroPlus,
  sixPlus,
  twelvePlus,
  btnPlay,
  btnExit,
  footer,
  kidsAnimationText,
  kidsPageFilter,
  noSelect,
} from './js/refs/refs';
import './js/functions/developersModal';
import { openMovieInfo } from './js/functions/openMovieInfo';
import { btnUp } from './js/components/to-top-button';
import './js/components/kidsAnimation';
import { addHiddenPagination } from './js/functions/pagination';

document.addEventListener('DOMContentLoaded', () => {
  addHiddenPagination();
  listRef.addEventListener('click', openMovieInfo);
  zeroPlus.addEventListener('click', renderKidsMoviesByAge(getPopularForKidsZero));
  sixPlus.addEventListener('click', renderKidsMoviesByAge(getPopularForKidsSix));
  twelvePlus.addEventListener('click', renderKidsMoviesByAge(getPopularForKidsTwelve));
  btnUp.addEventListener();
});
