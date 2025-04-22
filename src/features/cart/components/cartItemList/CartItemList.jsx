import Checkbox from "../../../../components/common/checkbox/Checkbox";
import styles from "../../../../pages/cart/CartPage.module.css";
import minus from "../../../../assets/images/minus.svg";
import plus from "../../../../assets/images/plus.svg";
import close from "../../../../assets/images/close.svg";
const CartItemList = () => {
  return (
    <div className={styles.cartItemListContainer}>
      <div className={styles.cartItemListWrapper}>
        <div className={styles.cartItemListHead}>
          <div className={styles.allCheckWrapper}>
            <Checkbox />
            <span className={styles.allCheck}>전체 선택</span>
            <span className={styles.checkCount}>3/5</span>
          </div>
          <button className={styles.deleteSeletedBtn}>선택 삭제</button>
        </div>
        <div className={styles.cartItemWrapper}>
          <div className={styles.itemContainer}>
            <div className={styles.item}>
              <div className={styles.checkWrapper}>
                <Checkbox />
              </div>
              <div className={styles.itemInfo}>
                <img
                  className={styles.itemImg}
                  src="http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg"
                />
                <div className={styles.itemDetailWrapper}>
                  <span className={styles.itemName}>바나나</span>
                  <span className={styles.itemDescription}>바나나 3EA</span>
                  <span className={styles.itemPrice}>5000원</span>
                </div>
              </div>
              <div className={styles.quantityButtonWrapper}>
                <button className={styles.quantityBtn}>
                  <img className={styles.quantityBtnIcon} src={minus} />
                </button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityBtn}>
                  <img className={styles.quantityBtnIcon} src={plus} />
                </button>
              </div>
              <button className={styles.closeBtn}>
                <img src={close} className={styles.closeBtnIcon} />
              </button>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.item}>
              <div className={styles.checkWrapper}>
                <Checkbox />
              </div>
              <div className={styles.itemInfo}>
                <img
                  className={styles.itemImg}
                  src="http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg"
                />
                <div className={styles.itemDetailWrapper}>
                  <span className={styles.itemName}>바나나</span>
                  <span className={styles.itemDescription}>바나나 3EA</span>
                  <span className={styles.itemPrice}>5000원</span>
                </div>
              </div>
              <div className={styles.quantityButtonWrapper}>
                <button className={styles.quantityBtn}>
                  <img className={styles.quantityBtnIcon} src={minus} />
                </button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityBtn}>
                  <img className={styles.quantityBtnIcon} src={plus} />
                </button>
              </div>
              <button className={styles.closeBtn}>
                <img src={close} className={styles.closeBtnIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
