import { useParams } from "react-router-dom";
import ProductLayout from "../../../layout/ProductLayout";
import ProductNav from "../../../components/common/sideBar/productNav/ProductNav";
import Pagination from "../../../components/common/pagination/Pagination";
import ProductCardWithComponent from "../../../features/product/components/productCard/ProductCardWithComponent";

const CategoryPage = () => {
  const { categoryId } = useParams();

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

  return (
    <ProductLayout SideBar={<ProductNav categoryId={categoryId} />}>
      <div>
        <ProductCardWithComponent
          productList={mockProductList}
          size={"sm"}
          gap={"25px"}
          rowGap={"80px"}
        >
          <div style={{ marginTop: "50px" }}>
            <Pagination />
          </div>
        </ProductCardWithComponent>
      </div>
    </ProductLayout>
  );
};
export default CategoryPage;
