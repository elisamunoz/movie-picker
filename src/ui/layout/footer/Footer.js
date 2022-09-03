import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>
        <a
          className={styles.text}
          href="https://github.com/elisamunoz/movie-picker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </span>
      <span>
        <a
          className={styles.text}
          href="https://elisamunoz.github.io/eli-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
