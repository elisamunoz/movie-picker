import styles from "./Button.module.scss";

const Button = ({ onClick, text, disabled }) => (
  <button
    onClick={onClick}
    className={styles.button}
    disabled={disabled}
    type="button"
  >
    {text}
  </button>
);

export default Button;
