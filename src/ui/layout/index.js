import Footer from "./footer";
import Body from "./body";
import styles from "./layout.module.scss";

const Layout = () => (
  <div className={styles.layout}>
    <Body />
    <Footer />
  </div>
);

export default Layout;
