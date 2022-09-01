import Button from "ui/components/button";
import styles from "./Body.module.scss";

const Body = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      <Button text="WATCH NOW!" />
    </div>
  </div>
);

export default Body;
