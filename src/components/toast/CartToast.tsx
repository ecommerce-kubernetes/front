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
    <div className="bg-white border border-gray-400 w-80 h-30 px-4 py-3 flex items-center">
      <div className="flex items-start gap-2 w-full">
        <div className="relative w-16 h-16 overflow-hidden rounded-md">
          <Image
            src={item.thumbnail}
            className="object-cover"
            fill
            alt="장바구니 상품"
          />
        </div>

        <div className="flex flex-col font-pretendard">
          <div className="flex gap-2 pb-1 text-[15px] text-gray-600">
            <h1>{item.productName}</h1>
            <span>{optionNames}</span>
          </div>
          <span className="text-sm">장바구니에 상품을 담았습니다</span>
        </div>
      </div>
    </div>
  );
};
