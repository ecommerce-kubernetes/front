"use client";
import { ProductDetail } from "@/src/types/product";
import { SelectBox } from "../common/SelectBox";
import { useProductOptions } from "@/src/hooks/useProductOptions";
import { useEffect, useState } from "react";
import { SelectedOptionItem } from "./SelectedOptionItem";
import { Heart } from "lucide-react";
import { useCartActions } from "@/src/hooks/useCartActions";
import { Notification } from "../modal/Notification";

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
    resetSelection,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useProductOptions(product.optionGroups, product.variants, product.name);
  const [openSelectId, setOpenSelectId] = useState<number | null>(null);
  const { addToCart, buyNow, isLoginModal, handleLoginConfirm } =
    useCartActions();

  useEffect(() => {
    if (isLoginModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoginModal]);
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
              <span className="text-3xl font-bold text-brand-primary">
                {totalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-gray-600">원</span>
            </div>
          </div>
        </>
      )}
      <div className="flex gap-1.5">
        <button className="w-14 h-14 flex items-center border justify-center rounded-lg cursor-pointer border-gray-300">
          <Heart size={26} />
        </button>
        <button
          className="flex-1 py-3 bg-brand-primary rounded-lg cursor-pointer"
          onClick={() =>
            // 버튼 클릭시 추가할 상품을 추가하고 추가가 성공한 뒤 선택된 옵션 상태를 비움
            addToCart(selectedItems, {
              onSuccess: () => {
                resetSelection();
              },
            })
          }
        >
          <span className="text-white font-medium text-lg">장바구니 담기</span>
        </button>
        <button
          className="flex-1 py-3 bg-brand-primary rounded-lg cursor-pointer"
          onClick={() => buyNow(selectedItems)}
        >
          <span className="text-white font-medium text-lg">주문하기</span>
        </button>
      </div>
      {isLoginModal && (
        <Notification
          message="로그인이 필요한 서비스 입니다"
          onConfirm={handleLoginConfirm}
        />
      )}
    </div>
  );
};
