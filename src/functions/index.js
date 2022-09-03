import { MOVIES } from "_mockData";

const getMoviesbyId = (movieIds = []) =>
  movieIds.map(movieId => getMoviebyId(movieId));

const getMoviebyId = movieId => MOVIES.find(movie => movie.id === movieId);

export { getMoviesbyId, getMoviebyId };
