import MainLayout from "../../layout/mainLayout";
import MainBanner from "./components/banner/MainBanner";
import ProductCarousel from "../../features/product/components/productCarousel/ProductCarousel";

import styles from "./Home.module.css";

const mockProductList = [
  {
    productId: 1,
    name: "사과",
    description: "청송 사과 3EA",
    price: 3000,
    stockQuantity: 30,
    categoryId: 1,
    imageUrl:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/d796/2425b9bea63296a835adbfbc747fab312f7ec973d098b09cfd7243bf54de.jpg",
  },

  {
    productId: 2,
    name: "바나나",
    description: "바나나 3EA",
    price: 3000,
    stockQuantity: 30,
    categoryId: 1,
    imageUrl:
      "https://thumbnail6.coupangcdn.com/thumbnails/remote/320x320ex/image/retail/images/8649858122128038-12a782c6-705b-4dbd-816d-d4ef6bcc62d8.jpg",
  },
];
const HomePage = () => {
  return (
    <MainLayout>
      <div className={styles.rootContainer}>
        <MainBanner />
        <div className={styles.mainContainer}>
          <div className={styles.mainWrapper}>
            <ProductCarousel
              title={"특가 상품"}
              productList={mockProductList}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
