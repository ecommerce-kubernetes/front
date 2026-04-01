import { Star } from "lucide-react";
import { ReviewList } from "./ReviewList";

interface ProductReviewProps {
  productId: number;
  rating: number;
  reviewCount: number;
}

export const ProductReview = ({
  productId,
  rating,
  reviewCount,
}: ProductReviewProps) => {
  return (
    <div className="py-5 flex flex-col">
      <h1 className="text-2xl font-medium font-pretendard">상품 리뷰</h1>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Star
              width={20}
              height={20}
              className="text-brand-primary fill-brand-primary"
            />
            <span className="text-xl">{rating}</span>
          </div>
          <div>
            <span className="font-pretendard">총 {reviewCount}개</span>
          </div>
        </div>
        <div>
          <ul className="flex text-xs text-black h-full">
            <li className="after:content-['|'] after:mx-1 after:text-gray-300 last:after:content-none h-full flex items-center">
              <button className="cursor-pointer">추천순</button>
            </li>
            <li className="after:content-['|'] after:mx-1 after:text-gray-300 last:after:content-none h-full flex items-center">
              <button className="cursor-pointer">최신순</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <ReviewList />
      </div>
    </div>
  );
};
