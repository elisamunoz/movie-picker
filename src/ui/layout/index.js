import Footer from "./footer";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.children}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
