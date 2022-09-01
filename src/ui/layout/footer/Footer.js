import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span className={styles.text}>Privacy Policy</span>
      <span className={styles.text}>Terms of Use</span>
    </div>
  </footer>
);

export default Footer;
