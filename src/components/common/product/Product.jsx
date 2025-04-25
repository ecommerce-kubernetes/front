import { Link } from "react-router-dom";
import styles from "./Product.module.css";
const Product = ({ product, size = "md" }) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <Link className={styles.link} to={`/product/${product.productId}`}>
        <div className={styles.wrapper}>
          <div className={styles.productImageWrapper}>
            <img
              className={`${styles.productImage} ${styles[size]}`}
              src={product.imageUrl}
              draggable="false"
            />
          </div>
          <div className={styles.productInfoWrapper}>
            <div className={styles.productDescription}>
              <span>{product.description}</span>
            </div>
            <div className={styles.productPrice}>
              <span>{product.price}원</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
