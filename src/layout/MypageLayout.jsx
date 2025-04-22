import { useMemo } from "react";
import MypageNav from "../components/common/mypageNav/MypageNav";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./MypageLayout.module.css";
import MemberInfo from "../features/member/components/memberInfo/MemberInfo";
const MyPageLayout = ({ children }) => {
  // const headerEl = useMemo(() => <Header />, []);
  // const footerEl = useMemo(() => <Footer />, []);
  // const navEl = useMemo(() => <MypageNav />, []);
  // const memberInfoEl = useMemo(() => <MemberInfo />, []);
  // return (
  //   <>
  //     {headerEl}
  //     <div style={{ backgroundColor: "var(--gray-1)" }}>
  //       <div className={styles.container}>
  //         <div className={styles.wrapper}>
  //           <div className={styles.leftContentContainer}>{navEl}</div>
  //           <div className={styles.rightContentContainer}>
  //             <div className={styles.rightContentWrapper}>
  //               {memberInfoEl}
  //               {children}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {footerEl}
  //   </>
  // );
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
