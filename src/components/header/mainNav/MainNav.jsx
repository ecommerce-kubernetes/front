import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
const MainNav = () => {
  return (
    <nav className={styles.navWrapper}>
      <Link className={styles.link}>BEST</Link>
      <Link className={styles.link}>NEW</Link>
      <Link className={styles.link}>SALE</Link>
    </nav>
  );
};
export default MainNav;
