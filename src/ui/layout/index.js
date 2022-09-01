import Footer from "./footer";
import Body from "./body";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Body>{children}</Body>
    <Footer />
  </div>
);

export default Layout;
