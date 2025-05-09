import { useParams } from "react-router-dom";
import ProductLayout from "../../../layout/ProductLayout";
import ProductNav from "../../../components/common/sideBar/productNav/ProductNav";
import Pagination from "../../../components/common/pagination/Pagination";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <ProductLayout SideBar={<ProductNav categoryId={categoryId} />}>
      <div>
        <Pagination />
      </div>
    </ProductLayout>
  );
};
export default CategoryPage;
