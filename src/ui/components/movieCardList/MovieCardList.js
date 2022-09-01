import styles from "./MovieCardList.module.scss";

// TODO add src and alt
const MovieCardList = ({ question, children }) => (
  <div className={styles.movieCardList}>
    <div className={styles.cards}>{children}</div>
  </div>
);

export default MovieCardList;
