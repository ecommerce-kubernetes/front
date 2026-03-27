import { ProductBasicInfo } from "@/src/components/products/ProductBasicInfo";
import { ProductImageView } from "@/src/components/products/ProductImageView";
import { ProductOptionSelector } from "@/src/components/products/ProductOptionSelector";
import { ProductDetail } from "@/src/types/product";

export default function ProductDetailPage() {
  const mockProduct: ProductDetail = {
    id: 1,
    name: "아이폰 16",
    categoryId: 1,
    description: "상품 설명",
    price: 9000,
    originalPrice: 10000,
    discountRate: 10,
    rating: 3.0,
    reviewCount: 1020,
    popularityScore: 3.5,
    optionGroups: [
      {
        optionTypeId: 1,
        name: "사이즈",
        priority: 1,
        values: [
          {
            optionValueId: 1,
            name: "XL",
          },
          { optionValueId: 2, name: "L" },
        ],
      },
      {
        optionTypeId: 2,
        name: "용량",
        priority: 2,
        values: [
          {
            optionValueId: 3,
            name: "256GB",
          },
          {
            optionValueId: 4,
            name: "512GB",
          },
        ],
      },
    ],
    images: [
      {
        url: "https://cdn.it.chosun.com/news/photo/202412/2023092129833_402646_552.png",
        order: 1,
        thumbnail: true,
      },
      {
        url: "https://istore.xcache.kinxcdn.com/prd/data/goods/1/2025/02/135_temp_17403760727119large.jpg",
        order: 2,
        thumbnail: false,
      },
    ],
    variants: [
      {
        id: 1,
        sku: "PROD_XL_256GB",
        optionValueIds: [1, 3],
        price: 100000,
        discountedPrice: 90000,
        discountRate: 10,
        stockQuantity: 10,
      },
      {
        id: 2,
        sku: "PROD_L_256GB",
        optionValueIds: [2, 3],
        price: 100000,
        discountedPrice: 90000,
        discountRate: 10,
        stockQuantity: 10,
      },
    ],
  };
  return (
    <div className="w-full max-w-250 mx-auto flex items-center py-5 flex-col">
      <section className="w-full flex gap-20">
        <div className="w-112.5 flex flex-col select-none">
          <ProductImageView images={mockProduct.images} />
        </div>
        <div className="flex-1">
          <ProductBasicInfo product={mockProduct} />
          <ProductOptionSelector product={mockProduct} />
        </div>
      </section>
    </div>
  );
}
