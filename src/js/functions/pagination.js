import Pagination from 'tui-pagination';
import { getPopular, getBySearchName, getByGenres } from '../api/get-api';

const container = document.getElementById('tui-pagination-container');
console.log(container);
const options = { // below default value of options
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
};
console.log(options.template);

// getPopular();
// getBySearchName();
// getByGenres();


async function yourFutureFunction() {
    const popularMovie = await getPopular(422);
  console.log(popularMovie.data);

  const inputSearch = await getBySearchName('Harry Potter', 1);
  console.log(inputSearch.data);

  const genre = await getByGenres(28, 1);
  console.log(genre.data);

//   const movieId = await getMovieById(551271);
//   console.log(movieId.data);

//   const genreList = await getGenreMovieList();
//   console.log(genreList.data);
}

yourFutureFunction();


export const pagination = new Pagination(container, options);