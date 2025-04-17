import Product from "../../../../components/common/product/Product";
import styles from "./ProductCard.module.css";
const ProductCard = ({ productList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Product product={productList[1]} key={1} size="md" />
        <Product product={productList[1]} key={2} size="md" />
        <Product product={productList[1]} key={3} size="md" />
        <Product product={productList[1]} key={4} size="md" />
        <Product product={productList[0]} key={5} size="md" />
        <Product product={productList[0]} key={6} size="md" />
      </div>
    </div>
  );
};

export default ProductCard;
