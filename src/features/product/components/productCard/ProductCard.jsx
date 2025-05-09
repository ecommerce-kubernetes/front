import Product from "../product/Product";
import styles from "./ProductCard.module.css";
const ProductCard = ({ productList, size, gap, rowGap }) => {
  return (
    <div className={styles.container}>
      <div
        style={{ gap: `${gap}`, rowGap: `${rowGap}` }}
        className={styles.wrapper}
      >
        <Product product={productList[1]} key={1} size={size} />
        <Product product={productList[1]} key={2} size={size} />
        <Product product={productList[1]} key={3} size={size} />
        <Product product={productList[1]} key={4} size={size} />
        <Product product={productList[0]} key={5} size={size} />
        <Product product={productList[0]} key={6} size={size} />
      </div>
    </div>
  );
};

export default ProductCard;
