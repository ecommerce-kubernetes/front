import MainLayout from "../../layout/mainLayout";
import MainBanner from "./components/banner/MainBanner";
import ProductCarousel from "../../features/product/components/productCarousel/ProductCarousel";

import styles from "./Home.module.css";
import ProductCardWithViewAll from "../../features/product/components/productCard/ProductCardWithViewAll";

const mockProductList = [
  {
    productId: 1,
    name: "사과",
    description: "청송 사과 3EA",
    price: 3000,
    stockQuantity: 30,
    categoryId: 1,
    imageUrl:
      "http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg",
  },

  {
    productId: 2,
    name: "바나나",
    description: "바나나 3EA",
    price: 3000,
    stockQuantity: 30,
    categoryId: 1,
    imageUrl:
      "https://cwfruit.com:446/data/editor/2112/f53fa845f04aed02cfa72653c55ec452_1640071334_4033.JPG",
  },
];
const HomePage = () => {
  return (
    <MainLayout>
      <div className={styles.rootContainer}>
        <MainBanner />
        <div className={styles.productCarouselSection}>
          <div className={styles.productCarouselWrapper}>
            <ProductCarousel
              title={"특가 상품"}
              productList={mockProductList}
            />
            <ProductCarousel
              title={"인기 상품"}
              productList={mockProductList}
            />
            <ProductCarousel
              title={"추천 상품"}
              productList={mockProductList}
            />
          </div>
        </div>
        <div className={styles.productCardSection}>
          <div className={styles.productCardWrapper}>
            <span className={styles.cardTitle}>신상품</span>
            <ProductCardWithViewAll productList={mockProductList} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
