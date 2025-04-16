import { Link } from "react-router-dom";
import styles from "./Support.module.css";
const Support = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Support</span>
        <ul>
          <li>
            <Link className={styles.supportItem}>FAQ</Link>
          </li>
          <li>
            <Link className={styles.supportItem}>고객센터</Link>
          </li>
          <li>
            <Link className={styles.supportItem}>이용약관</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
