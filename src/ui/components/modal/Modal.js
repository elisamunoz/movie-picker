import Button from "ui/components/button";
import styles from "./Modal.module.scss";

const Modal = ({ onSubmit, children, isVisible = false }) =>
  isVisible ? (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  ) : null;

export default Modal;
