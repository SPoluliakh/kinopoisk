import { moviesListMarkupFirstRender } from './js/functions/render-home-page';
import { setGenreOptions } from './js/functions/local-storage';
import { pagination } from './js/functions/pagination';

setGenreOptions();
moviesListMarkupFirstRender();
// pagination();