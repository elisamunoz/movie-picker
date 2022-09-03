import { QUESTIONS, MOVIES } from "_mockData";

const getMoviesbyId = currentQuestion =>
  QUESTIONS.find(question => question.id === currentQuestion).options;

const getMoviebyId = movieId => MOVIES.find(movie => movie.id === movieId);

export { getMoviesbyId, getMoviebyId };
