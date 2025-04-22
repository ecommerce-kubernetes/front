import styles from "../../my/MyCoupon.module.css";
const CouponContent = () => {
  return (
    <div className={styles.couponContentWrapper}>
      <div className={styles.couponCategoryWrapper}>
        <div className={styles.couponCategoryTitle}>
          <span>쿠폰명</span>
        </div>
        <div className={styles.couponCategoryDuration}>
          <span>기간</span>
        </div>
      </div>
      <div className={styles.couponWrapper}>
        <div className={styles.couponTitle}>
          <span className={styles.name}>10% 할인 쿠폰</span>
          <span className={styles.description}>
            10,000 원 이상 구매시 최대 550 원 할인
          </span>
        </div>
        <div className={styles.couponDuration}>2026년 12월 24일 까지</div>
      </div>
      <div className={styles.couponWrapper}>
        <div className={styles.couponTitle}>
          <span className={styles.name}>10% 할인 쿠폰</span>
          <span className={styles.description}>
            10,000 원 이상 구매시 최대 550 원 할인
          </span>
        </div>
        <div className={styles.couponDuration}>2026년 12월 24일 까지</div>
      </div>
      <div className={styles.couponWrapper}>
        <div className={styles.couponTitle}>
          <span className={styles.name}>10% 할인 쿠폰</span>
          <span className={styles.description}>
            10,000 원 이상 구매시 최대 550 원 할인
          </span>
        </div>
        <div className={styles.couponDuration}>2026년 12월 24일 까지</div>
      </div>
    </div>
  );
};

export default CouponContent;
