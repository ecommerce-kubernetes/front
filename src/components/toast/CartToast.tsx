import { CartItem } from "@/src/types/cart";
import Image from "next/image";

interface CartToastProps {
  item: CartItem;
}

export const CartToast = ({ item }: CartToastProps) => {
  const optionNames = item.options
    .map((option) => option.valueName)
    .join(" / ");
  return (
    <div className="absolute top-full -right-2.5 mt-4 w-80 bg-white shadow-xl rounded-lg border border-gray-200 animate-in fade-in slide-in-from-top-4 z-toast">
      <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45" />
      <div className="relative bg-white rounded-lg px-4 py-4 flex items-center">
        <div className="flex items-start gap-3 w-full">
          <div className="relative w-14 h-14 overflow-hidden rounded-md shrink-0 border border-gray-100">
            <Image
              src={item.thumbnail}
              className="object-cover"
              fill
              alt="장바구니 상품"
            />
          </div>
          <div className="flex flex-col font-pretendard flex-1 overflow-hidden">
            <h1 className="text-[15px] text-gray-800 font-medium truncate">
              {item.productName}
            </h1>
            {optionNames && (
              <span className="text-[13px] text-gray-500 mt-0.5 truncate">
                {optionNames}
              </span>
            )}
            <span className="text-[13px] text-brand-primary font-medium mt-1.5">
              장바구니에 상품을 담았습니다
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
