import { SelectedItem } from "@/src/types/product";
import { X } from "lucide-react";

interface SelectedOptionItemProps {
  item: SelectedItem;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  isSingleProduct?: boolean;
}

export const SelectedOptionItem = ({
  item,
  onRemove,
  onUpdateQuantity,
  isSingleProduct = false,
}: SelectedOptionItemProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-gray-800">
          {item.optionName}
        </span>
        {!isSingleProduct && (
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex justify-between items-end">
        <div className="flex items-center border border-gray-300 rounded-sm bg-white">
          <button
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="w-8 h-8 text-gray-500 hover:bg-gray-100 border-r border-gray-300"
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="w-8 h-8 text-gray-500 hover:bg-gray-100 border-l border-gray-300"
          >
            +
          </button>
        </div>
        <span className="font-bold text-gray-900">
          {(item.discountedPrice * item.quantity).toLocaleString()}원
        </span>
      </div>
    </div>
  );
};
