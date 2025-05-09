import ProductCard from "./ProductCard";
const ProductCardWithComponent = ({
  children,
  productList,
  size,
  gap,
  rowGap,
}) => {
  return (
    <div>
      <ProductCard
        productList={productList}
        size={size}
        gap={gap}
        rowGap={rowGap}
      />
      {children}
    </div>
  );
};

export default ProductCardWithComponent;
