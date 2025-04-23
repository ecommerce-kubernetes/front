import React from "react";
import styles from "../MyCoupon.module.css";

function CouponTabs({ activeTab, onSelect }) {
  return (
    <div className={styles.couponTabWrapper}>
      {["owned", "used"].map((tab) => (
        <div
          key={tab}
          className={`${styles.couponTab} ${
            activeTab === tab ? styles.active : styles.inactive
          }`}
          onClick={() => onSelect(tab)}
        >
          <span>{tab === "owned" ? "사용 가능" : "사용 완료"}</span>
        </div>
      ))}
    </div>
  );
}

export default React.memo(CouponTabs);
