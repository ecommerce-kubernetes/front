import MyPageLayout from "../../../../layout/MyPageLayout";
import styles from "./RedeemCoupon.module.css";
const RedeemCouponPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.title}>쿠폰등록</span>
          <div className={styles.redeemContainer}>
            <div className={styles.redeemWrapper}>
              <input
                className={styles.input}
                placeholder="쿠폰 번호를 입력해주세요"
              />
              <button className={styles.redeemBtn}>쿠폰등록</button>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};
export default RedeemCouponPage;
