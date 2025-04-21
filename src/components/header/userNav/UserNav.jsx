import { Link } from "react-router-dom";
import styles from "./UserNav.module.css";
import myPageIcon from "../../../assets/images/mypage.svg";
import cartIcon from "../../../assets/images/cart.svg";
const UserNav = () => {
  return (
    <div className={styles.iconWrapper}>
      <Link className={styles.icon} to={"/my/orders"}>
        <img src={myPageIcon} />
      </Link>
      <Link className={styles.icon} to={"/cart"}>
        <img src={cartIcon} />
      </Link>
    </div>
  );
};

export default UserNav;
