"use client";
import { ProductDetail } from "@/src/types/product";
import { ProductDetailImages } from "./ProductDetailImages";
import { ProductNavigation } from "./ProductNavigation";
import { useScrollToSection } from "@/src/hooks/useScrollToSection";
import { ProductReview } from "../reviews/ProductReview";

export type ProductContentTabType = "description" | "reviews" | "qna";
export interface ProductContentTabProps {
  product: Pick<ProductDetail, "id" | "detailImages">;
}
export const ProductContentTab = ({ product }: ProductContentTabProps) => {
  const { activeTab, setRef, scrollTo } =
    useScrollToSection<ProductContentTabType>("description", 125);
  return (
    <div className="flex flex-col gap-20">
      <ProductNavigation active={activeTab} setActive={scrollTo} />
      <div className="flex flex-col gap-20 pt-10 pb-[50vh]">
        <div ref={setRef("description")}>
          <ProductDetailImages images={product.detailImages} />
        </div>
        <div ref={setRef("reviews")} className="border-t border-gray-300">
          <ProductReview productId={product.id} />
        </div>
        <div ref={setRef("qna")} className="border-t border-gray-300">
          <div className="h-300">상품 문의</div>
        </div>
      </div>
    </div>
  );
};
