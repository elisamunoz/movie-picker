import MovieCardList from "ui/components/movieCardList";
import MovieCard from "ui/components/movieCard";
import styles from "./MovieQuestions.module.scss";

const MovieQuestions = ({ onClick, title, movies = [], isVisible = true }) => (
  <div className={isVisible ? null : styles.notVisible}>
    <h3 className={styles.question}>{title}</h3>
    <MovieCardList>
      {movies.map((movie = {}) => (
        <MovieCard
          key={movie.id}
          onClick={() => onClick(movie)}
          src={movie.imageUrl}
          alt={movie.title}
        />
      ))}
    </MovieCardList>
  </div>
);

export default MovieQuestions;
