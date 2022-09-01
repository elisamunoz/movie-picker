import Button from "ui/components/button";
import Pagination from "ui/components/pagination";
import styles from "./Body.module.scss";

const Body = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      <Pagination currentQuestion={2} totalQuestions={3} />
      <Button text="WATCH HERE!" />
    </div>
  </div>
);

export default Body;
