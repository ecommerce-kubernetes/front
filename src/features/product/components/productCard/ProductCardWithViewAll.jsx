import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "./ProductCard.module.css";
const ProductCardWithViewAll = ({ productList }) => {
  return (
    <div>
      <ProductCard productList={productList} />
      <div className={styles.viewAllWrapper}>
        <Link className={styles.viewAllButton}>전체보기 &gt;</Link>
      </div>
    </div>
  );
};

export default ProductCardWithViewAll;
