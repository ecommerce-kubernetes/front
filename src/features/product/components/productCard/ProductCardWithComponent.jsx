import ProductCard from "./ProductCard";
const ProductCardWithComponent = ({ children, productList }) => {
  return (
    <div>
      <ProductCard productList={productList} />
      {children}
    </div>
  );
};

export default ProductCardWithComponent;
