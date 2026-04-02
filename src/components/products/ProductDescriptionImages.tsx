import { ProductDescriptionImage } from "@/src/types/product";
import { useState } from "react";

export interface ProductDescriptionImagesProps {
  images: ProductDescriptionImage[];
}
export const ProductDescriptionImages = ({
  images,
}: ProductDescriptionImagesProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <div
        className={`w-full flex flex-col transition-all duration-500 ${
          isExpanded ? "h-auto" : "max-h-250 overflow-hidden"
        }`}
      >
        {images.map((image) => (
          <div key={image.order} className="relative w-full">
            <img src={image.url} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      {!isExpanded && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="w-[90%] max-w-md py-4 bg-white border border-brand-primary text-brand-primary font-pretendard font-bold text-lg rounded-full shadow-md hover:bg-gray-50 active:scale-95 transition-all"
          >
            상품 설명 더보기
          </button>
        </div>
      )}
    </div>
  );
};
