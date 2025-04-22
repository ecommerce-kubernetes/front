import { useCallback, useState } from "react";
import MyPageLayout from "../../../../layout/MyPageLayout";
import styles from "./MyCoupon.module.css";
import CouponTabs from "./tab/CouponTabs";
import CouponContent from "./content/CouponContent";
const MyCouponPage = () => {
  const [activeTab, setActiveTab] = useState("owned");

  const handleSelect = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>내 쿠폰</span>
        </div>
        <div className={styles.myCouponWrapper}>
          <CouponTabs activeTab={activeTab} onSelect={handleSelect} />
          <CouponContent />
        </div>
      </div>
    </MyPageLayout>
  );
};

export default MyCouponPage;
