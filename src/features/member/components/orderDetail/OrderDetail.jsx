import styles from "../../../../pages/mypage/order/detail/OrderDetail.module.css";
import OrderContent from "../OrderContent";
const OrderDetail = () => {
  const item1 = {
    name: "청송사과",
    description: "청송사과 3EA",
    quantity: 3,
    price: 5000,
    imgUrl:
      "http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg",
  };

  const item2 = {
    name: "바나나",
    description: "바나나 3EA",
    quantity: 5,
    price: 5000,
    imgUrl:
      "https://cwfruit.com:446/data/editor/2112/f53fa845f04aed02cfa72653c55ec452_1640071334_4033.JPG",
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.headWrapper}>
        <span className={styles.head}>주문 상세</span>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.orderTop}>
          <span className={styles.head}>{"2025.5.4 주문"}</span>
          <span className={styles.orderId}>주문번호 : {"2519358"}</span>
        </div>
        <div className={styles.ordererWrapper}>
          <span className={styles.head}>최민식</span>
          <div className={styles.deliveryInfo}>
            <span>수원시 장안구 천천로 74번길</span>
            <span>010-2xx4-4xx2</span>
          </div>
        </div>
        <div className={styles.orderPaymentWrapper}>
          <span className={styles.head}>결제 정보</span>
          <div className={styles.orderPayment}>
            <div className={styles.payInfoWrapper}>
              <span>총 상품가격</span>
              <span className={styles.payPrice}>9000원</span>
            </div>
            <div className={styles.payInfoWrapper}>
              <span>할인가격</span>
              <span className={`${styles.payPrice} ${styles.discount}`}>
                -1000원
              </span>
            </div>
            <div className={styles.payInfoWrapper}>
              <span>적립금 사용</span>
              <span className={`${styles.payPrice} ${styles.discount}`}>
                -1000원
              </span>
            </div>
            <div className={styles.payInfoWrapper}>
              <span>배송비</span>
              <span className={styles.payPrice}>400원</span>
            </div>
            <div className={styles.payInfoWrapper}>
              <span>총 결제금액</span>
              <span className={styles.payPrice}>7400원</span>
            </div>
          </div>
        </div>
        <div className={styles.orderItemsWrapper}>
          <span className={styles.head}>주문 상품</span>
          <div>
            <OrderContent product={item1} />
            <OrderContent product={item2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
