import styles from "./CategoryNav.module.css";
import hamburgerIcon from "../../../assets/images/hamburger.svg";
import CategoryNavDropBox from "./CategoryNavDropBox";
import { useState } from "react";
const CategoryNav = () => {
  const [dropState, setDropState] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.categoryButton}
        onClick={() => {
          setDropState((prev) => !prev);
        }}
      >
        <div className={styles.buttonWrapper}>
          <img src={hamburgerIcon} style={{ width: "25px" }} />
          <span className={styles.buttonText}>카테고리</span>
        </div>
      </button>
      {dropState && <CategoryNavDropBox />}
    </div>
  );
};

export default CategoryNav;
