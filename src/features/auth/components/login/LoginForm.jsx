import { Link } from "react-router-dom";
import styles from "../../../../pages/login/Login.module.css";
const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputWrapper}>
        <input className={styles.inputField} placeholder="이메일" />
        <input className={styles.inputField} placeholder="비밀번호" />
      </div>
      <button className={styles.loginButton}>로그인</button>
      <div className={styles.authWrapper}>
        <ul className={styles.loginActionNav}>
          <li>
            <Link className={styles.link}>아이디 찾기</Link>
          </li>
          <li>
            <Link className={styles.link}>비밀번호 찾기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
