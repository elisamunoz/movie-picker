import Modal from "ui/components/modal";
// import Pagination from "ui/components/pagination";
import styles from "./Body.module.scss";

const Body = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      {/* <Pagination currentQuestion={2} totalQuestions={3} />
       */}
      <Modal />
    </div>
  </div>
);

export default Body;
