import classnames from "classnames";
import styles from "./Pagination.module.scss";

const PaginationDot = ({ isActive = false }) => (
  <div
    className={classnames(styles.paginationDot, isActive && styles.isActive)}
  />
);

const Pagination = ({
  currentQuestion = 0,
  totalQuestions = 0,
  isVisible = true
}) => (
  <div
    className={classnames(
      styles.pagination,
      isVisible ? null : styles.notVisible
    )}
  >
    <h3 className={styles.text}>
      question {currentQuestion + 1} of {totalQuestions}:
    </h3>
    <div className={styles.dotsContainer}>
      {Array(totalQuestions)
        .fill("")
        .map((value, i) => (
          <PaginationDot key={i} isActive={currentQuestion === i} />
        ))}
    </div>
  </div>
);

export default Pagination;
