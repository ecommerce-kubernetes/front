import OrderList from "../../../../features/member/components/orderList/OrderList.jsx";
import MyPageLayout from "../../../../layout/MypageLayout.jsx";
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
