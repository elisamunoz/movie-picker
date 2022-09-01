import classnames from "classnames";
import styles from "./Button.module.scss";

const Button = ({ onClick, text, disabled, className }) => (
  <button
    onClick={onClick}
    className={classnames(styles.button, className)}
    disabled={disabled}
    type="button"
  >
    {text}
  </button>
);

export default Button;
