import { Link } from "react-router-dom";
import styles from "./CategoryNav.module.css";
const CategoryNavDropBox = () => {
  return (
    //TODO 카테고리 정보 조회해서 리스트 생성하도록해야함 현재는 그냥 코드로 적었음
    <div className={styles.categoryWrapper}>
      <ul>
        <li>
          <Link to={"/category/1"} className={styles.categoryItem}>
            식품
          </Link>
        </li>
        <li>
          <Link className={styles.categoryItem}>전자기기</Link>
        </li>
        <li>
          <Link className={styles.categoryItem}>의류</Link>
        </li>
      </ul>
    </div>
  );
};
export default CategoryNavDropBox;
