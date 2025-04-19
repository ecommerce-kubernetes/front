import styles from "../../../../pages/signup/Signup.module.css";
const SignupForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          placeholder="이메일을 입력해주세요"
        />
        <input className={styles.inputField} placeholder="비밀번호" />
        <input className={styles.inputField} placeholder="비밀번호 확인" />
        <input className={styles.inputField} placeholder="이름" />
        <input className={styles.inputField} placeholder="휴대폰 번호" />
      </div>
      <button className={styles.signupButton}>회원가입</button>
    </div>
  );
};

export default SignupForm;
