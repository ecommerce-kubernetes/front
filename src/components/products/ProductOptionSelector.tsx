"use client";
import { ProductDetail } from "@/src/types/product";
import { SelectBox } from "../common/SelectBox";
import { useProductOptions } from "@/src/hooks/useProductOptions";
import { useState } from "react";
import { SelectedOptionItem } from "./SelectedOptionItem";

export interface ProductOptionSelectorProps {
  product: Pick<ProductDetail, "name" | "optionGroups" | "variants">;
}

export const ProductOptionSelector = ({
  product,
}: ProductOptionSelectorProps) => {
  const {
    isSingleProduct,
    availableOptions,
    selectedItems,
    totalPrice,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useProductOptions(product.optionGroups, product.variants, product.name);
  const [openSelectId, setOpenSelectId] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-6 w-full">
      {!isSingleProduct && (
        <div className="flex flex-col gap-3">
          {availableOptions.map((group) => (
            <div key={group.id} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                {group.label}
              </label>
              <SelectBox
                selectProps={{
                  type: group.label,
                  options: group.options,
                  value: group.selectedValue,
                  onChange: group.onChange,
                  // ⭐️ 컴포넌트에서 상태를 내려줌
                  isOpen: openSelectId === group.id,
                  onToggle: () =>
                    setOpenSelectId((prev) =>
                      prev === group.id ? null : group.id,
                    ),
                }}
              />
            </div>
          ))}
        </div>
      )}

      {!isSingleProduct && <hr className="border-gray-200" />}

      {selectedItems.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            {selectedItems.map((item) => (
              <SelectedOptionItem
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
                isSingleProduct={isSingleProduct}
              />
            ))}
          </div>

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
