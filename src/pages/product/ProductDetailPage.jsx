import MainLayout from "../../layout/mainLayout";
import styles from "./ProductDetail.module.css";
import star from "../../assets/images/star.svg";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
const ProductDetailPage = () => {
  const product = {
    productId: 1,
    name: "노카라 페미닌 페이크 포켓 트위드 자켓 (EA3JK014D)",
    description: "청송 사과 3EA",
    price: 3000,
    stockQuantity: 30,
    categoryId: 1,
    imageUrl:
      "http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg",
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img className={styles.productImage} src={product.imageUrl} />
          <div className={styles.productDescriptionWrapper}>
            <div>
              <span className={styles.productName}>{product.name}</span>
              <p className={styles.productDescription}>{product.description}</p>
            </div>
            <div className={styles.productReviewWrapper}>
              <img style={{ width: "18px", height: "18px" }} src={star} />
              <span className={styles.rating}>4.2</span>
              <span className={styles.review}>리뷰 1010개</span>
            </div>
            <div className={styles.productPriceWrapper}>
              <span className={styles.productPrice}>{product.price}원</span>
            </div>
            <div className={styles.productOptionContainer}>
              <div className={styles.productOptionWrapper}>
                <div className={styles.productOptionCategory}>
                  <span>적립</span>
                </div>
                <div>
                  <span>319원</span>
                </div>
              </div>
              <div className={styles.productOptionWrapper}>
                <div className={styles.productOptionCategory}>
                  <span>배송</span>
                </div>
                <div>
                  <span>무료배송</span>
                </div>
              </div>
              <div className={styles.productOptionWrapper}>
                <div className={styles.productOptionCategory}>
                  <span>A/S</span>
                </div>
                <div>
                  <span>추가 설치 비용 어짜궁 블라불라</span>
                </div>
              </div>
              <div className={styles.productOptionWrapper}>
                <div className={styles.productOptionCategory}>
                  <span>배송</span>
                </div>
                <div>
                  <span>무료배송</span>
                </div>
              </div>
              <div
                className={`${styles.productOptionWrapper} ${styles.lastChild}`}
              >
                <div className={styles.productOptionCategory}>
                  <span>수량</span>
                </div>
                <div>
                  {/** 이 수량 조절버튼 부분 장바구니 페이지에서도 동일하게 사용하므로 컴포넌트로 분리 예상 */}
                  <div className={styles.quantityButtonWrapper}>
                    <button className={styles.quantityBtn}>
                      <img className={styles.quantityBtnIcon} src={minus} />
                    </button>
                    <span className={styles.quantity}>1</span>
                    <button className={styles.quantityBtn}>
                      <img className={styles.quantityBtnIcon} src={plus} />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.totalPriceWrapper}>
                <span>총 상품 금액:</span>
                <span className={styles.totalPrice}>20,000원</span>
              </div>
            </div>
            <div className={styles.cartBtnWrapper}>
              <button className={styles.cartBtn}>장바구니 담기</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
