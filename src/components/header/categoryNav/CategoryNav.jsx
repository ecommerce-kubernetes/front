import styles from "./CategoryNav.module.css";
import hamburgerIcon from "../../../assets/images/hamburger.svg";
const CategoryNav = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.categoryButton}>
        <div className={styles.buttonWrapper}>
          <img src={hamburgerIcon} style={{ width: "25px" }} />
          <span className={styles.buttonText}>카테고리</span>
        </div>
      </button>
    </div>
  );
};

export default CategoryNav;
