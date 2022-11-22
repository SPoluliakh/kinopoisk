const makeGenre = (genres = []) => {
  return genres.map(genre => `<li class="movie-card_genre-item">${genre}</li>`);
};

const makeMovieCard = (results = []) => {
  return results.map(
    ({ poster_path, title, genre_ids }) => `<li class="movie-card">
  <img class="movie-card_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" />
  <h2 class="movie-card_title">${title}</h2>
  <ul class="movie-card_genre-list">${makeGenre(genre_ids)}</ul>
</li>
`
  );
};

const API_KEY = `21ae8667e2d219d1bbc4eb64edced0b5`;
const searchParams = new URLSearchParams({
  api_key: API_KEY,
  page: 1,
});
const url = `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const a = makeMovieCard(data.results);
    console.log(a);
  });
