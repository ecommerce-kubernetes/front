import { Link } from "react-router-dom";
import styles from "./AccountNav.module.css";
const AccountNav = () => {
  return (
    <div className={styles.accountNavWrapper}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.link} to={"/signup"}>
            회원가입
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"/login"}>
            로그인
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountNav;
