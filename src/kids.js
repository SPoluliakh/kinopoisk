import {
  renderKidsMovieForZero,
  renderKidsMovieForSix,
  renderKidsMovieForTwelve,
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

document.addEventListener('DOMContentLoaded', () => {
  listRef.addEventListener('click', openMovieInfo);
  zeroPlus.addEventListener('click', renderKidsMovieForZero);
  sixPlus.addEventListener('click', renderKidsMovieForSix);
  twelvePlus.addEventListener('click', renderKidsMovieForTwelve);
  btnUp.addEventListener();
});
