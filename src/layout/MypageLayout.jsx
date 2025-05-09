import MypageNav from "../components/common/mypageNav/MypageNav";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MemberInfo from "../features/member/components/memberInfo/MemberInfo";
import styles from "./MypageLayout.module.css";
const MyPageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "var(--gray-1)" }}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.leftContentContainer}>
              <MypageNav />
            </div>
            <div className={styles.rightContentContainer}>
              <div className={styles.rightContentWrapper}>
                <MemberInfo />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPageLayout;
