import MemberInfo from "../../../features/member/components/memberInfo/MemberInfo";
import MyPageLayout from "../../../layout/MyPageLayout";
import styles from "./OrderList.module.css";
const OrderList = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <MemberInfo />
      </div>
    </MyPageLayout>
  );
};

export default OrderList;
