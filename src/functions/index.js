import { MOVIES } from "_mockData";

const getMoviesbyId = (movieIds = []) =>
  movieIds.map(movieId => getMoviebyId(movieId));

const getMoviebyId = movieId => MOVIES.find(movie => movie.id === movieId);

const handleModalButtonClick = (answer = []) => {
  const imdbId = answer.pop().imdbId;

  return (window.location.href = `https://www.imdb.com/title/${imdbId}/`);
};
export { getMoviesbyId, getMoviebyId, handleModalButtonClick };
