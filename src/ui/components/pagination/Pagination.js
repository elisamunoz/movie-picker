import classnames from "classnames";
import styles from "./Pagination.module.scss";

const PaginationDot = ({ emptyDot = false }) => (
  <div
    className={classnames(styles.paginationDot, emptyDot && styles.emptyDot)}
  />
);

const Pagination = ({ currentQuestion, totalQuestions }) => (
  <div className={styles.pagination}>
    <h3 className={styles.text}>
      question {currentQuestion} of {totalQuestions}:
    </h3>
    <div className={styles.dotsContainer}>
      <PaginationDot emptyDot={true} />
      <PaginationDot />
      <PaginationDot emptyDot={true} />
    </div>
  </div>
);

export default Pagination;
