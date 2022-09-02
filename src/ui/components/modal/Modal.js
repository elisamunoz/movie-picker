import classnames from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ onSubmit, children, isVisible = false, className }) =>
  isVisible ? (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={classnames(styles.content, className)}>{children}</div>
      </div>
    </div>
  ) : null;

export default Modal;
