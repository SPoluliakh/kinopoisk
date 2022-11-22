export const renderCard = results => {
  makeMovieCard(results);
};

//  Рендерит всю страничку с фильмами
const makeGenre = (genres = []) => {
  return genres.map(genre => `<li class="movie-card_genre-item">${genre}</li>`);
};

const makeMovieCard = (results = []) => {
  return results.map(
    ({
      poster_path,
      title,
      genre_ids,
      release_date,
      id,
    }) => `<li class="movie-card" data-id="${id}">
  <img class="movie-card_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" />
  <h2 class="movie-card_title">${title}</h2>
  <ul class="movie-card_genre-list">${makeGenre(genre_ids)}</ul>
  <p class="movie-card_relize-info">${release_date.slice(0, 4)}</p>
</li>
`
  );
};

// Рендерит 1 карточку, нужно передавать callBack для рендера жанров.

const makeCard = (
  poster_path,
  title,
  genre_ids,
  release_date,
  id,
  callBack
) => {
  return `<li class="movie-card" data-id="${id}">
  <img class="movie-card_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" />
  <h2 class="movie-card_title">${title}</h2>
  <ul class="movie-card_genre-list">${callBack(genre_ids)}</ul>
  <p class="movie-card_relize-info">${release_date.slice(0, 4)}</p>
</li>
`;
};
