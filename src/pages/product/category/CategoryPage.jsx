import { useParams } from "react-router-dom";
import ProductLayout from "../../../layout/ProductLayout";
import ProductNav from "../../../components/common/sideBar/productNav/ProductNav";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <ProductLayout
      SideBar={<ProductNav categoryId={categoryId} />}
    ></ProductLayout>
  );
};
export default CategoryPage;
