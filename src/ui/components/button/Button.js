import styles from "./Button.module.scss";

const Button = ({ onClick, text }) => (
  <button onClick={onClick} className={styles.button}>
    {text}
  </button>
);

export default Button;
