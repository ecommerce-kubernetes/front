import { Link } from "react-router-dom";
import SignupForm from "../../features/auth/components/signup/SignupForm";
import MainLayout from "../../layout/mainLayout";
import styles from "./Signup.module.css";
const SignupPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>회원가입</span>
        </div>
        <SignupForm />
        <div className={styles.alreadyContainer}>
          <div className={styles.alreadyWrapper}>
            <span>이미 회원이신가요?</span>
            <Link to={"/login"}>로그인하기</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default SignupPage;
