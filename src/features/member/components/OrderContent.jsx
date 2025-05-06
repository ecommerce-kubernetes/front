import { Link } from "react-router-dom";
import styles from "./OrderContent.module.css";
const OrderContent = ({ product }) => {
  return (
    <div className={styles.orderContentWrapper}>
      <Link to={`/product/${product.id}`} className={styles.content}>
        <img className={styles.itemImg} src={product.imgUrl} />
        <div className={styles.orderDescription}>
          <span className={styles.itemName}>{product.name}</span>
          <span className={styles.itemDescription}>{product.description}</span>
          <span className={styles.itemQuantity}>{product.quantity}개</span>
          <span className={styles.itemPrice}>{product.price}원</span>
        </div>
      </Link>
    </div>
  );
};
export default OrderContent;
