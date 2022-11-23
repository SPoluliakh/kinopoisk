

const makeGenre = (genres = []) => {
  let result = '';
  genres.map((genre,index) => {
          if ( index !== genres.length-1) {result += `<li class="movie-card_genre-item">${localStorage.getItem(genre)},</li>`} else {result += `<li class="movie-card_genre-item">${localStorage.getItem(genre)}</li>`}
  })
return result
  };

const makeMovieCard = (results = []) => {
  let result = '';
  results.map(
    ({ poster_path, title, genre_ids, release_date, vote_average
    }) => result +=`<li class="movie-card"><div>
  <img class="movie-card_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" />
  <h2 class="movie-card_title">${title}</h2>
  <ul class="movie-card_genre-list">${makeGenre(genre_ids)}<li class="movie-card_release_date">|${release_date.slice(0,4)}</li></ul><div class="movie-card_vote_average">${vote_average.toFixed(1)}</div></div>
</li>`
  )
  return `<div class="movie-card__container">${result}</div>`
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
    document.querySelector('.movie-card').insertAdjacentHTML("afterbegin",a)
  });

  const listGenre = () =>{
    let listOfGanre =[];
    const url = `
      https://api.themoviedb.org/3/genre/movie/list?${searchParams}&language=en-US`;
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.genres);
        data.genres.map(genre =>
      localStorage.setItem(genre.id,genre.name))}
  )}  
  listGenre()