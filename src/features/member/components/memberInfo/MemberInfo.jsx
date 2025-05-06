import { Link } from "react-router-dom";
import styles from "./MemberInfo.module.css";
import orderIcon from "../../../../assets/images/order.svg";
import cartIcon from "../../../../assets/images/cart.svg";
import coinIcon from "../../../../assets/images/coin.svg";
import couponIcon from "../../../../assets/images/coupon.svg";
const MemberInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introductionWrapper}>
        <div className={styles.nameWrapper}>
          <span className={styles.memberName}>최민식</span>
          <span>님 환영합니다</span>
        </div>
        <div className={styles.remainBalanceWrapper}>
          <span>잔액</span>
          <span className={styles.remainBalance}>20000원</span>
        </div>
      </div>
      <div className={styles.myMenuWrapper}>
        <Link className={styles.link} to={"/my/orders"}>
          <div className={styles.myMenuIconWrapper}>
            <img className={styles.menuIcon} src={orderIcon} />
          </div>
          <div className={styles.myMenu}>
            <span className={styles.menuName}>주문</span>
            <span className={styles.menuValue}>10건 </span>
          </div>
        </Link>
        <Link className={styles.link} to={"/cart"}>
          <div className={styles.myMenuIconWrapper}>
            <img className={styles.menuIcon} src={cartIcon} />
          </div>
          <div className={styles.myMenu}>
            <span className={styles.menuName}>장바구니</span>
            <span className={styles.menuValue}>10000원</span>
          </div>
        </Link>
        <Link className={styles.link}>
          <div className={styles.myMenuIconWrapper}>
            <img className={styles.menuIcon} src={coinIcon} />
          </div>
          <div className={styles.myMenu}>
            <span className={styles.menuName}>적립금</span>
            <span className={styles.menuValue}>10000원</span>
          </div>
        </Link>
        <Link to={"/my/coupon"} className={styles.link}>
          <div className={styles.myMenuIconWrapper}>
            <img className={styles.menuIcon} src={couponIcon} />
          </div>
          <div className={styles.myMenu}>
            <span className={styles.menuName}>쿠폰</span>
            <span className={styles.menuValue}>5장</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MemberInfo;
