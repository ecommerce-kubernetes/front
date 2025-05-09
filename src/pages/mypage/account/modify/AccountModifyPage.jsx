import MyPageLayout from "../../../../layout/MypageLayout";
import styles from "./Accountmodify.module.css";

const AccountModifyPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>개인정보 관리</span>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.subTitleWrapper}>
              <span className={styles.subTitle}>개인정보 수정</span>
            </div>
            <div className={styles.memberInfoWrapper}>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>이메일</span>
                </div>
                <input className={styles.input} readOnly value={"la9814"} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>현재 비밀번호</span>
                </div>
                <input type="password" className={styles.input} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>새 비밀번호</span>
                </div>
                <input type="password" className={styles.input} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>비밀번호 재입력</span>
                </div>
                <input type="password" className={styles.input} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>이름</span>
                </div>
                <input className={styles.input} />
              </div>
              <div className={styles.inputWrapper}>
                <div className={styles.inputLabel}>
                  <span>휴대전화</span>
                </div>
                <input className={styles.input} />
              </div>
            </div>
            <div className={styles.confirmBtnWrapper}>
              <button className={styles.confirmBtn}>확인</button>
              <button className={styles.confirmBtn}>취소</button>
            </div>
          </div>
        </div>
      </div>
    </MyPageLayout>
  );
};

export default AccountModifyPage;
