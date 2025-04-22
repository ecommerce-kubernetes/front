import styles from "../../../../pages/cart/CartPage.module.css";
const CartTotal = () => {
  return (
    <div className={styles.cartTotalContainer}>
      <div className={styles.cartTotalWrapper}>
        <div className={styles.cartTotalTop}>
          <div className={styles.cartTotalTitleWrapper}>
            <span className={styles.cartTotalTitle}>결제금액</span>
          </div>
          <div className={styles.cartPayInfoWrapper}>
            <span>총 상품가격</span>
            <span className={styles.cartPayPrice}>9000원</span>
          </div>
          <div className={styles.cartPayInfoWrapper}>
            <span>할인가격</span>
            <span className={`${styles.cartPayPrice} ${styles.discount}`}>
              -1000원
            </span>
          </div>
          <div className={styles.cartPayInfoWrapper}>
            <span>배송비</span>
            <span className={styles.cartPayPrice}>400원</span>
          </div>
        </div>
        <div className={styles.cartTotalBottom}>
          <div className={styles.cartTotalPriceWrapper}>
            <span>총 결제금액</span>
            <span className={styles.cartTotalPrice}>8400원</span>
          </div>
        </div>
        <button className={styles.orderBtn}>주문하기 (2)</button>
      </div>
    </div>
  );
};

export default CartTotal;
