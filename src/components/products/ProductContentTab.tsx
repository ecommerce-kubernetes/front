"use client";
import { ProductDetail } from "@/src/types/product";
import { ProductDescriptionImages } from "./ProductDescriptionImages";
import { ProductNavigation } from "./ProductNavigation";
import { useScrollToSection } from "@/src/hooks/useScrollToSection";
import { ProductReview } from "../reviews/ProductReview";

export type ProductContentTabType = "description" | "reviews";
export interface ProductContentTabProps {
  product: Pick<
    ProductDetail,
    "id" | "descriptionImages" | "rating" | "reviewCount"
  >;
}
export const ProductContentTab = ({ product }: ProductContentTabProps) => {
  const { activeTab, setRef, scrollTo } =
    useScrollToSection<ProductContentTabType>("description", 125);
  return (
    <div className="flex flex-col gap-20">
      <ProductNavigation active={activeTab} setActive={scrollTo} />
      <div className="flex flex-col gap-20 pt-10 pb-[50vh]">
        <div ref={setRef("description")}>
          <ProductDescriptionImages images={product.descriptionImages} />
        </div>
        <div ref={setRef("reviews")} className="border-t border-gray-300">
          <ProductReview
            productId={product.id}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
      </div>
    </div>
  );
};
