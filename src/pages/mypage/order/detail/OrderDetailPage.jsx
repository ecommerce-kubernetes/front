import OrderDetail from "../../../../features/member/components/orderDetail/OrderDetail";
import MyPageLayout from "../../../../layout/MypageLayout";
import styles from "./OrderDetail.module.css";
const OrderDetailPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <OrderDetail />
      </div>
    </MyPageLayout>
  );
};
export default OrderDetailPage;
