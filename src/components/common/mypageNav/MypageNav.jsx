import { Link } from "react-router-dom";
import styles from "./MypageNav.module.css";
const MypageNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.linkWrapper}>
          <Link className={`${styles.link} ${styles.headLine}`}>주문 내역</Link>
        </div>
        <div className={styles.linkWrapper}>
          <Link className={`${styles.link} ${styles.headLine}`}>장바구니</Link>
        </div>
        <div className={styles.linkWrapper}>
          <Link className={`${styles.link} ${styles.headLine}`}>쿠폰</Link>
          <div className={styles.detailWrapper}>
            <Link className={`${styles.link} ${styles.detail}`}>쿠폰 등록</Link>
            <Link className={`${styles.link} ${styles.detail}`}>쿠폰 조회</Link>
          </div>
        </div>
        <div className={styles.linkWrapper}>
          <Link className={`${styles.link} ${styles.headLine}`}>내정보</Link>
          <div className={styles.detailWrapper}>
            <Link className={`${styles.link} ${styles.detail}`}>
              개인정보 확인/수정
            </Link>
            <Link className={`${styles.link} ${styles.detail}`}>
              배송지 관리
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MypageNav;
