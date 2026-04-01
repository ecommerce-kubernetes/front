import { Star } from "lucide-react";

export const ReviewList = () => {
  return (
    <div className="flex flex-col">
      <div className="select-none">
        <h1 className="font-pretendard font-medium text-lg">최민식</h1>
        <div className="flex items-center gap-1">
          <Star
            width={16}
            height={16}
            className="text-brand-primary fill-brand-primary"
          />
          <span className="leading-none">3</span>
          <span className="text-sm leading-none text-gray-500">2026-12-25</span>
        </div>
        <ul className="mt-5 flex items-center font-pretendard font-medium text-gray-500">
          <li className="after:content-['/'] after:mx-1 after:text-gray-300 last:after:content-none">
            BLUE
          </li>
          <li className="after:content-['/'] after:mx-1 after:text-gray-300 last:after:content-none">
            256GB
          </li>
        </ul>
        <p className="mt-5">정말 좋은 상품이에요</p>
        <div className="flex mt-5">사진들</div>
      </div>
    </div>
  );
};
