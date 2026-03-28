"use client";
import { ProductDetail } from "@/src/types/product";
import { X } from "lucide-react";
import { SelectBox } from "../common/SelectBox";
import { useProductOptions } from "@/src/hooks/useProductOptions";

export interface ProductOptionSelectorProps {
  product: Pick<ProductDetail, "name" | "optionGroups" | "variants">;
}

export const ProductOptionSelector = ({
  product,
}: ProductOptionSelectorProps) => {
  const {
    isSingleProduct,
    selectBoxDataList,
    selectedItems,
    totalPrice,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useProductOptions(product.optionGroups, product.variants, product.name);
  return (
    <div className="flex flex-col gap-6 w-full">
      {!isSingleProduct && (
        <div className="flex flex-col gap-3">
          {selectBoxDataList.map((data) => (
            <div key={data.id} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                {data.label}
              </label>
              <SelectBox selectProps={data.selectProps} />
            </div>
          ))}
        </div>
      )}

      {!isSingleProduct && <hr className="border-gray-200" />}
      {selectedItems.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-sm p-4 flex flex-col gap-4"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-800">
                    {item.optionName}
                  </span>
                  {!isSingleProduct && (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-r border-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-l border-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {/* ⭐️ 개별 아이템 총 가격 */}
                  <span className="font-bold text-gray-900">
                    {(item.discountedPrice * item.quantity).toLocaleString()}원
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 총 결제 금액 */}
          <div className="flex justify-between items-end pt-2 border-t border-gray-900 mt-2">
            <span className="font-medium text-gray-700">총 상품 금액</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-brand-primary">
                {totalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-gray-600">원</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
