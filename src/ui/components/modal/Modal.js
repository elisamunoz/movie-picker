import Button from "ui/components/button";
import styles from "./Modal.module.scss";

const Modal = ({ onClick }) => (
  <div className={styles.modal}>
    <div className={styles.content}>
      <h3 className={styles.title}>watch new movies for free!</h3>
      <h5 className={styles.text}>
        Watch any movies online for free without ads!
      </h5>
      <h5 className={styles.text}>Have fun watching your favourite movies!</h5>
      <Button className={styles.button} text="WATCH HERE!" />
    </div>
  </div>
);

export default Modal;
