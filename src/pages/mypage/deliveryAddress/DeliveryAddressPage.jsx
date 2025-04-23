import MyPageLayout from "../../../layout/MyPageLayout";
import styles from "./DeliveryAddress.module.css";

const DeliveryAddressPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>배송지 관리</span>
            <div className={styles.deliveryRegistBtnWrapper}>
              <button className={styles.deliveryRegistBtn}>배송지 등록</button>
            </div>
          </div>
          <div className={styles.deliveryAddressWrapper}>
            <div className={`${styles.deliveryName} ${styles.categoryText}`}>
              <span>이름</span>
            </div>
            <div className={`${styles.deliveryAddress} ${styles.categoryText}`}>
              <span>주소</span>
            </div>
            <div className={`${styles.deliverySetting} ${styles.categoryText}`}>
              <span>설정</span>
            </div>
          </div>
          <div className={styles.deliveryAddressWrapper}>
            <div
              className={`${styles.deliveryName} ${styles.contentTextWrapper}`}
            >
              <span style={{ color: "#f05650" }}>[기본 배송지]</span>
              <span>우리집</span>
            </div>
            <div
              className={`${styles.deliveryAddress} ${styles.contentTextWrapper}`}
            >
              <span>
                경기도 수원시 장안구 정자동 913 북수원 리버파크 816동 1201호
              </span>
            </div>
            <div
              className={`${styles.deliverySetting} ${styles.contentTextWrapper}`}
            >
              <button className={styles.deliverySettingBtn}>수정</button>
              <button className={styles.deliverySettingBtn}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};

export default DeliveryAddressPage;
