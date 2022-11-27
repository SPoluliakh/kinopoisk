import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination-container');
const options = { // below default value of options
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 12,
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

export const pagination = new Pagination(container, options);

const pagePaginationNumber = pagination.getCurrentPage();
console.log(pagePaginationNumber);

// ================================================

// export async function givePopularMovies(){
//     const moviesDataArray = await getPopular(pagePaginationNumber);
//     const moviesDataforMarkupCreator = moviesDataArray.data.results;
//     const totalResults = moviesDataArray.data.total_results;
//     pagination.reset(totalResults);

//     console.log(options.page);

//     console.log(moviesDataforMarkupCreator);
// }

// ================================================

// pagination.on('afterMove', updatePage);

// async function updatePage(event) {
//   const currentPage = event.page;
//   console.log('currentPage', currentPage);

//   await fetchPopularMovies(currentPage);
// }