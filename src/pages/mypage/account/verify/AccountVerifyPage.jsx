import { useNavigate } from "react-router-dom";
import { useVerify } from "../../../../contexts/AccountVerifyContext";
import MyPageLayout from "../../../../layout/MypageLayout";
import styles from "./AccountVerify.module.css";
const AccountVerifyPage = () => {
  const { setVerified } = useVerify();
  const nav = useNavigate();
  const handleSubmit = () => {
    setVerified(true);
    nav("/my/account/modify");
  };
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>개인정보 관리</span>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.subTitleWrapper}>
              <span className={styles.subTitle}>비밀번호 재확인</span>
            </div>
            <div className={styles.passwordConfirm}>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>이메일</span>
                </div>
                <input className={styles.input} readOnly value={"la9814"} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>비밀번호</span>
                </div>
                <input type="password" className={styles.input} />
              </div>
            </div>
            <div className={styles.confirmBtnWrapper}>
              <button
                className={styles.confirmBtn}
                onClick={() => {
                  handleSubmit();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};

export default AccountVerifyPage;
