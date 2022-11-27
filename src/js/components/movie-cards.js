//  Возвращает необходимый список жанров
const makeGenre = (genre = [], allGenres = []) => {
  const genreList = allGenres.reduce((acc, genreItem) => {
    if (genre.includes(genreItem.id)) {
      acc.push(genreItem.name);
    }
    return acc;
  }, []);
  let result = '';
  genreList.map((genreItem, index) => {
    if (index !== genreList.length - 1) {
      result += `<li class="movie-card__genre-item">${genreItem},</li>`;
    } else {
      result += `<li class="movie-card__genre-item">${genreItem}</li>`;
    }
  });
  return result;
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
  <img class="movie-card__img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}"/>
 <div class="movie-card__info" data-id="${id}">
 <h2 class="movie-card__title"data-id="${id}">${title}</h2>
  <ul class="movie-card__genre-list"data-id="${id}">${makeGenre(
        genre_ids,
        allGenres
      )}
      <li class="movie-card__genre-item">|</li>
  <li class="movie-card__relize-info" data-id="${id}">${release_date.slice(
        0,
        4
      )}</li>
      </ul>
  </div>
</li>
`
    )
    .join('');
};


// Рендерит 1 карточку (модальное окно).
export const makeModalCard = (title, vote_count, vote_average, popularity) => {
  const card = `
  <p class="modal__text-info" data-vote> ${vote_average.toFixed(
    1
  )} / ${vote_count} </p>
  <p class="modal__text-info" data-popularity> ${popularity.toFixed(1)} </p>
  <p class="modal__text-info" data-title> ${title} </p>
 `;
  return card;
};
// Рендерит список жанров (модальное окно).
export const makeModalGenre = (genre = []) => {
  const genreList = genre.map(genreItem => genreItem.name);
  return genreList.join(', ');

};
