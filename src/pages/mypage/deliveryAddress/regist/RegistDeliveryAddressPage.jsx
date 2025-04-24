import styles from "./RegistDeliveryAddress.module.css";
import { useCenterPops } from "../../../../hooks/useCenterPops";
import { useEffect, useState } from "react";
import Checkbox from "../../../../components/common/checkbox/Checkbox";
const RegistDeliveryAddressPage = () => {
  const openRegisterWindow = useCenterPops({ width: 500, height: 500 });

  const handleOpenRegisterWindow = () => {
    const url = `${window.location.origin}/my/delivery/regist/address`;
    openRegisterWindow(url, "address");
  };
  const [address, setAddress] = useState("");
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      const { address: addr } = event.data;
      setAddress(addr ?? "");
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>배송지 추가</span>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.category}>
          <div className={styles.fieldCategory}>
            <span>배송지 이름</span>
          </div>
          <div className={styles.inputWrapper}>
            <input className={`${styles.input} ${styles.default}`} />
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.fieldCategory}>
            <span>받으시는 분</span>
          </div>
          <div className={styles.inputWrapper}>
            <input className={`${styles.input} ${styles.default}`} />
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.fieldCategory}>
            <span>휴대폰</span>
          </div>
          <div className={styles.phoneWrapper}>
            <div>
              <select className={styles.phoneSelect}>
                <option>선택</option>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
              </select>
            </div>
            <span>-</span>
            <div>
              <input className={`${styles.input} ${styles.phone}`} />
            </div>
            <span>-</span>
            <div>
              <input className={`${styles.input} ${styles.phone}`} />
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.fieldCategory}>
            <span>주소</span>
          </div>
          <div className={`${styles.inputWrapper} ${styles.addressWrapper}`}>
            <input
              className={`${styles.input} ${styles.address}`}
              value={address}
              readOnly
            />
            <button
              className={styles.findBtn}
              onClick={handleOpenRegisterWindow}
            >
              주소찾기
            </button>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.fieldCategory}>
            <span>세부 주소</span>
          </div>
          <div className={styles.inputWrapper}>
            <input className={`${styles.input} ${styles.default}`} />
          </div>
        </div>
      </div>
      <div className={styles.defaultDeliveryWrapper}>
        <Checkbox />
        <span>기본 배송지로 설정</span>
      </div>
      <div className={styles.submitWrapper}>
        <button className={`${styles.actionBtn} ${styles.submit}`}>확인</button>
        <button
          className={`${styles.actionBtn} ${styles.cancel}`}
          onClick={() => window.close()}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default RegistDeliveryAddressPage;
