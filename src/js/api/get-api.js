import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c8f6fe1d28bbf3bb36eaa9cda22eaa79';

// Возвращает список популярных фильмов с аргументом "page" для пагинации
export async function getPopular(page = 1) {
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
export async function getBySearchName(name, page = 1) {
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
export async function getByGenres(genre, page = 1) {
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
export async function getMovieById(id) {
  const params = `movie/${id}`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает список жанров "id"
export async function getGenreMovieList() {
  const params = 'genre/movie/list';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает популярные фильмы для категории 0+
export async function getPopularForKidsZero(page = 1) {
  const params = 'discover/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    certification_country: 'RU',
    certification: '0+',
    page: page,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает популярные фильмы для категории 6+
export async function getPopularForKidsSix(page = 1) {
  const params = 'discover/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    certification_country: 'RU',
    certification: '6+',
    page: page,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает популярные фильмы для категории 12+
export async function getPopularForKidsTwelve(page = 1) {
  const params = 'discover/movie';
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    certification_country: 'RU',
    certification: '12+',
    page: page,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// Возвращает обьект с ключем для трейлера
export async function getMovieTrailer(movieId) {
  const params = `movie/${movieId}/videos`;
  const options = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: page,
    movie_id: `${movieId}`,
  });
  return axios.get(`${API_URL}${params}?${options}`);
}

// ======================================
// Тест для понимая, что возвращает та или иная функция

// async function yourFutureFunction() {
//   // const popularMovie = await getPopular(10);
//   // console.log(popularMovie.data);
//   // const inputSearch = await getBySearchName('Harry Potter', 1);
//   // console.log(inputSearch.data);
//   // const genre = await getByGenres(28, 1);
//   // console.log(genre.data);
//   // const movieId = await getMovieById(551271);
//   // console.log(movieId.data);
//   // const genreList = await getGenreMovieList();
//   // console.log(genreList.data);
//   // const trailer = await getMovieTrailer(550);
//   // Обьект целиком
//   // console.log(trailer);
//   // Ключ для плеера
//   // console.log(trailer.data.results[0].key);

// }
// yourFutureFunction();
