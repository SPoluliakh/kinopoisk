const makeGenre = (genres = []) => {
  let result = '';
  genres.map((genre,index) => {
    if (index !== genres.length-1){result += `<li class="movie-card_genre-item">${genre.toString()[0].toUpperCase() + genre.toString().slice(1)}, </li>`}
    else {result += `<li class="movie-card_genre-item">${genre.toString()[0].toUpperCase() + genre.toString().slice(1)} </li>`}})
  return result
  };

const makeMovieCard = (results = []) => {
  let result = '';
  results.map(
    ({ poster_path, title, genre_ids }) => result +=`<li class="movie-card"><div>
  <img class="movie-card_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" />
  <h2 class="movie-card_title">${title}</h2>
  <ul class="movie-card_genre-list">${makeGenre(genre_ids)}</ul></div>
</li>`
  )
  return `<div class="movie-card__container">${result}/div>`
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
    document.querySelector('.movie-card').insertAdjacentHTML("afterbegin",a)
  });
