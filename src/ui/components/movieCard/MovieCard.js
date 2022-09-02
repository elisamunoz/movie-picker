import styles from "./MovieCard.module.scss";

const MovieCard = ({ onClick, alt, src }) => (
  <div className={styles.movieCard} onClick={onClick} role="button">
    <img className={styles.image} src={src} alt={alt} />
    <div className={styles.overlay} />
  </div>
);

export default MovieCard;
