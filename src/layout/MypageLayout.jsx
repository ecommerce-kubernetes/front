import MypageNav from "../components/common/mypageNav/MypageNav";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
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
            <div className={styles.rightContentContainer}>{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPageLayout;
