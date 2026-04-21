import Image from "next/image";
import CheckBox from "../common/CheckBox";
import { Minus, Plus, X } from "lucide-react";
import { CartItem as CartItemType } from "@/src/types/cart";
import { useCartQuantity } from "@/src/hooks/useCartQuantity";
import { useCartDelete } from "@/src/hooks/useCartDelete";

interface CartItemProps {
  item: CartItemType;
  isChecked: boolean;
  onToggle: (id: number) => void;
}

export const CartItem = ({ item, isChecked, onToggle }: CartItemProps) => {
  const optionNames = item.options
    .map((option) => option.valueName)
    .join(" / ");

  const { handleDecrease, handleIncrease } = useCartQuantity(item);
  const { mutate: deleteItems } = useCartDelete();
  return (
    <div className="flex items-start gap-2.5">
      <CheckBox checked={isChecked} onChange={() => onToggle(item.id)} />
      <div className="flex-1 flex flex-col">
        <div className="flex gap-2.5">
          <div className="relative w-18 h-22 rounded-sm">
            <Image
              fill
              className="objext-cover"
              src={item.thumbnail}
              alt="상품 썸네일"
            />
          </div>
          <div className="flex-1 flex items-start text-sm font-pretendard">
            <div className="flex-1 flex flex-col gap-0.5">
              <span>{item.productName}</span>
              <span className="text-gray-500">{optionNames}</span>
              <span className="text-gray-500 line-through">
                {(item.price.originalPrice * item.quantity).toLocaleString(
                  "ko-KR",
                )}
                원
              </span>
              <span className="text-base font-medium text-brand-primary">
                {(item.price.discountedPrice * item.quantity).toLocaleString(
                  "ko-KR",
                )}
                원
              </span>
              <div className="flex justify-between items-end">
                <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                  <button
                    onClick={handleDecrease}
                    className="w-8 h-8  hover:bg-gray-100 border-r border-gray-300 cursor-pointer flex items-center justify-center"
                  >
                    <Minus className="text-gray-500" size={16} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    className="w-8 h-8 text-gray-500 hover:bg-gray-100 border-l border-gray-300 cursor-pointer flex items-center justify-center"
                    onClick={handleIncrease}
                  >
                    <Plus className="text-gray-500" size={16} />
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => deleteItems([item.id])}
              className="cursor-pointer"
            >
              <X className="text-gray-600" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
