import styles from "./MovieCard.module.scss";

const MovieCard = ({ onClick, alt, src }) => (
  <div className={styles.movieCard} onClick={onClick}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);

export default MovieCard;
