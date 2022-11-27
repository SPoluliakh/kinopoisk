import { getGenreMovieList } from '../api/get-api';

const LOCAL_STORAGE_KEY = 'genres';

export const setGenreOptions = async () => {
  const genre = await getGenreMovieList();
  const { genres } = genre.data;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(genres));
};

export const getGenreOptions = () => {
  const genres = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  return genres;
};
