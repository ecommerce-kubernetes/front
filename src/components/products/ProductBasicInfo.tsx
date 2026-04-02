import { ProductDetail } from "@/src/types/product";
import { MessageCircle, Star } from "lucide-react";

interface ProductBasicInfoProps {
  product: Pick<
    ProductDetail,
    | "name"
    | "rating"
    | "reviewCount"
    | "discountRate"
    | "originalPrice"
    | "price"
  >;
}

export const ProductBasicInfo = ({ product }: ProductBasicInfoProps) => {
  const { name, rating, reviewCount, price, discountRate, originalPrice } =
    product;
  return (
    <>
      <h1 className="text-xl font-medium font-pretendard mb-4">{name}</h1>
      <div className="border-t">
        <div className="flex items-center gap-2 py-2 mb-10">
          <div className="flex items-center gap-0.5">
            <Star
              width={14}
              height={14}
              className="text-brand-primary fill-brand-primary"
            />
            <span className="text-sm">{rating}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <MessageCircle
              width={14}
              height={14}
              className="text-brand-primary fill-brand-primary"
            />
            <span className="text-sm">{reviewCount}</span>
          </div>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex gap-3">
            <span className="text-brand-primary font-bold text-xl">
              {discountRate}%
            </span>
            <span className="line-through font-medium text-gray-500 text-xl">
              {Number(originalPrice).toLocaleString()}원
            </span>
          </div>
          <div>
            <span className="font-bold text-brand-primary text-2xl">
              {Number(price).toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
