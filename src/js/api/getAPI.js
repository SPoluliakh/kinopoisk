import axios from 'axios';
API_URL = 'https://api.themoviedb.org/3/';
API_KEY = 'c8f6fe1d28bbf3bb36eaa9cda22eaa79';

// Возвращает список популярных фильмов с аргументом "page" для пагинации
async function getPopular(page = 1) {
  const params = 'movie/popular';
  const options = new URLSearchParams({
    api_key: API_KEY,
    page: page,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает список фильмов с аргументами:
// "name" - запрос пользователя,
// "page" - для пагинации
async function getBySearchName(name, page = 1) {
  const params = 'search/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    page: page,
    query: `${name}`,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает список фильмов по аргументам:
// "genre" - для фильтрации по жанрам "ID жанра"
// "page" - для пагинации
async function getByGenres(genre, page = 1) {
  const params = 'discover/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: page,
    with_genes: genre,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает фильм по аргументу "id"
async function getMovieById(id) {
  const params = `movie/${id}`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает список жанров "id"
async function getGenreMovieList() {
  const params = 'genre/movie/list';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// ======================================
// Тест для понимая, что возвращает та или иная функция

// async function yourFutureFunction() {
//   const popularMovie = await getPopular(10);
//   console.log(popularMovie.data);

//   const inputSearch = await getBySearchName('Harry Potter', 1);
//   console.log(inputSearch.data);

//   const genre = await getByGenres(28, 1);
//   console.log(genre.data);

//   const movieId = await getMovieById(551271);
//   console.log(movieId.data);

//   const genreList = await getGenreMovieList();
//   console.log(genreList.data);
// }
// yourFutureFunction();

export {
  getPopular,
  getBySearchName,
  getByGenres,
  getMovieById,
  getGenreMovieList,
  //   yourFutureFunction,
};
