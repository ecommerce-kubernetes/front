import LoginForm from "../../features/auth/components/Login/LoginForm";
import MainLayout from "../../layout/mainLayout";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>로그인</span>
        </div>
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default LoginPage;
