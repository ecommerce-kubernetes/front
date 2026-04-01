import { Star } from "lucide-react";
import { ReviewList } from "./ReviewList";

export const ProductReview = ({ productId }: { productId: number }) => {
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
            {/** 평균 평점 */}
            <span className="text-xl">{3}</span>
          </div>
          <div>
            <span className="font-pretendard">총 {100}개</span>
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
