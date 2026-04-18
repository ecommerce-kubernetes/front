import Image from "next/image";
import CheckBox from "../common/CheckBox";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  id: number;
  isChecked: boolean;
  onToggle: (id: number) => void;
}

export const CartItem = ({ id, isChecked, onToggle }: CartItemProps) => {
  return (
    <div className="flex items-start gap-2.5">
      <CheckBox checked={isChecked} onChange={() => onToggle(id)} />
      <div className="flex-1 flex flex-col">
        <div className="flex gap-2.5">
          <div className="relative w-18 h-22 rounded-sm">
            <Image
              fill
              className="objext-cover"
              src={
                "https://cdn.buynest.cloud/buynest-images/product/product/78521853-d0ec-4c1d-9a39-71da06b6b0c8.png"
              }
              alt="상품 썸네일"
            />
          </div>
          <div className="flex-1 flex items-start text-sm font-pretendard">
            <div className="flex-1 flex flex-col gap-0.5">
              <span>상품 1</span>
              <span className="text-gray-500">XL / BLUE</span>
              <span className="text-gray-500 line-through">10,000원</span>
              <span className="text-base font-medium text-brand-primary">
                9000원
              </span>
              <div className="flex justify-between items-end">
                <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                  <button className="w-8 h-8  hover:bg-gray-100 border-r border-gray-300 cursor-pointer flex items-center justify-center">
                    <Minus className="text-gray-500" size={16} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">
                    1
                  </span>
                  <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 border-l border-gray-300 cursor-pointer flex items-center justify-center">
                    <Plus className="text-gray-500" size={16} />
                  </button>
                </div>
              </div>
            </div>
            <button className="cursor-pointer">
              <X className="text-gray-600" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
