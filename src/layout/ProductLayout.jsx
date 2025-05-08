import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./ProductLayout.module.css";
const ProductLayout = ({ SideBar, children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <aside className={styles.leftContentContainer}>{SideBar}</aside>
          <main className={styles.rightContentContainer}>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductLayout;
