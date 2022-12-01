import img from '../../images/noimage.png';

let imgWidth = '';
window. innerWidth <= 768 ? imgWidth = 300: imgWidth = 400;

//  Возвращает необходимый список жанров
const makeGenre = (genre = [], allGenres = []) => {
  const genreList = allGenres.reduce((acc, genreItem) => {
    if (genre.includes(genreItem.id)) {
      acc.push(genreItem.name);
    }
    return acc;
  }, []);

  return genreList.join(', ');
};

//  Рендерит весь список с фильмами
export const makeMovieList = (results = [], allGenres = []) => {

  return results
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
        id,
      }) => `<li class="movie-card" data-id="${id}">
  <img loading="lazy" class="movie-card__img" src=${
    poster_path
      ? `https://image.tmdb.org/t/p/w${imgWidth}/${poster_path}`
      : `${img}`
  } alt="${title}" data-id="${id}"/>
 <div class="movie-card__info" data-id="${id}">
 <h2 class="movie-card__title"data-id="${id}">${title}</h2>
  <p class="movie-card__relize-info"data-id="${id}">${makeGenre(
        genre_ids,
        allGenres
      )} | ${release_date.slice(0, 4)}
      </p>
  </div>
</li>
`
    )
    .join('');
};

// Рендерит список жанров (модальное окно).
const makeModalGenre = (genre = []) => {
  const genreList = genre.map(genreItem => genreItem.name);
  return genreList.join(', ');
};

// Рендерит 1 карточку (модальное окно).
export const makeModalCard = (
  title,
  vote_count,
  vote_average,
  popularity,
  genre = []
) => {
  const card = `
<div class="modal__text-info-wrap"><span class="modal__text-info modal__text-info--orange" data-vote>
  ${vote_average.toFixed(1)} 
</span> /<span class="modal__text-info" data-vote>  ${vote_count} </span></div>
  <p class="modal__text-info" data-popularity> ${popularity.toFixed(1)} </p>
  <p class="modal__text-info" data-title> ${title} </p>
  <p class="modal__text-info"> ${makeModalGenre(genre)} </p>
 `;
  return card;
};

//  Возвращает необходимый список жанров для страници Library
const makeLibraryGenre = (genre = []) => {
  const genreList = genre.map(genreItem => genreItem.name);
  return genreList.join(', ');
};

//  Рендерит весь список с фильмами для страници Library
export const makeLibraryMovieList = (results = []) => {
  return results
    .map(
      ({
        poster_path,
        title,
        genres,
        release_date,
        id,
      }) => `<li class="movie-card" data-id="${id}">
  <img loading="lazy" class="movie-card__img" src=${
    poster_path
      ? `https://image.tmdb.org/t/p/w${imgWidth}/${poster_path}`
      : `${img}`
  } alt="${title}" data-id="${id}"/>
 <div class="movie-card__info" data-id="${id}">
 <h2 class="movie-card__title"data-id="${id}">${title}</h2>
  <p class="movie-card__relize-info"data-id="${id}">${makeLibraryGenre(
        genres
      )} | ${release_date.slice(0, 4)}
      </p>
  </div>
</li>
`
    )
    .join('');
};
