import styles from "./Product.module.css";
const Product = ({ product, size = "md" }) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <div className={styles.wrapper}>
        <div className={styles.productImageWrapper}>
          <img
            className={styles.productImage}
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
    </div>
  );
};

export default Product;
