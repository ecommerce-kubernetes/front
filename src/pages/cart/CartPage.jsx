import CartItemList from "../../features/cart/components/cartItemList/CartItemList";
import CartTotal from "../../features/cart/components/cartTotal/CartTotal";
import MainLayout from "../../layout/mainLayout";
import styles from "./CartPage.module.css";
const CartPage = () => {
  return (
    <MainLayout>
      <div style={{ backgroundColor: "var(--gray-1)" }}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <span className={styles.title}>장바구니</span>
            <div className={styles.contentWrapper}>
              <CartItemList />
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
