import { MOVIES } from "_mockData";

const getMoviesbyId = (movieIds = []) =>
  movieIds.map(movieId => getMoviebyId(movieId));

const getMoviebyId = movieId => MOVIES.find(movie => movie.id === movieId);

const filterMoviesbyCategory = (movies = [], category) => {
  return movies.filter(movie => {
    // Filter movies based on previous movie selection
    if (movie.category === category) {
      return true;
    }
    return false;
  });
};

export { getMoviesbyId, getMoviebyId, filterMoviesbyCategory };
