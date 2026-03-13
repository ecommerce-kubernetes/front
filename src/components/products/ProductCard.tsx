import { Product } from "@/src/types/product";
import { MessageCircle, Star } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-full flex flex-col p-2 select-none">
      <div className="aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 flex flex-col">
        <h2 className="line-clamp-2 mb-1 break-words text-lg font-medium font-pretendard leading-snug">
          {product.name}
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="line-through text-gray-500 text-sm">
              {Number(product.originalPrice).toLocaleString()}원
            </span>
            <span className="flex items-baseline gap-1">
              <span className="text-xs">최대</span>
              <span className="text-brand-primary font-bold text-lg">
                {product.maxDiscountRate}%
              </span>
            </span>
          </div>
          <span className="font-bold text-lg items-center">
            {Number(product.displayPrice).toLocaleString()}원
          </span>
          <div className="flex justify-start gap-3">
            <div className="flex items-center gap-0.5">
              <Star
                width={14}
                height={14}
                className="text-brand-primary fill-brand-primary"
              />
              <span className="text-sm text-gray-500">{product.rating}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <MessageCircle
                width={14}
                height={14}
                className="text-brand-primary fill-brand-primary"
              />
              <span className="text-sm text-gray-500">
                {product.reviewCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
