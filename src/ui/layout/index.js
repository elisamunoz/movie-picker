import Footer from "./footer";
import Body from "./body";
import styles from "./layout.module.scss";

const Layout = () => (
  <div className={styles.layout}>
    <div className={styles.background}>
      <Body />
      <Footer />
    </div>
  </div>
);

export default Layout;
