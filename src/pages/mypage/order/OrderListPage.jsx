import OrderList from "../../../features/member/components/orderList/OrderList";
import MyPageLayout from "../../../layout/MyPageLayout";
import styles from "./OrderList.module.css";
const OrderListPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <OrderList />
      </div>
    </MyPageLayout>
  );
};

export default OrderListPage;
