"use client";
import { ProductDetail, ProductVariant } from "@/src/types/product";
import { X } from "lucide-react";
import { SelectBox } from "../common/SelectBox";
import { useState } from "react";

export interface ProductOptionSelectorProps {
  product: Pick<ProductDetail, "name" | "optionGroups" | "variants">;
}

interface SelectedItem extends ProductVariant {
  quantity: number;
  optionName: string;
}

export const ProductOptionSelector = ({
  product,
}: ProductOptionSelectorProps) => {
  const { name, optionGroups, variants } = product;
  const isSingleProduct = !optionGroups || optionGroups.length === 0;

  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>(() => {
    if (isSingleProduct && variants.length > 0) {
      return [{ ...variants[0], quantity: 1, optionName: name }];
    }
    return [];
  });

  const [currentSelection, setCurrentSelection] = useState<
    Record<number, number>
  >({});

  const handleOptionChange = (optionTypeId: number, optionValueId: number) => {
    // 일단 방금 선택한 값을 임시 객체에 업데이트
    const newSelection = { ...currentSelection, [optionTypeId]: optionValueId };
    setCurrentSelection(newSelection);

    // [조합 완성 체크] 유저가 선택한 옵션의 개수가 전체 옵션 그룹의 개수와 같아졌는가?
    if (Object.keys(newSelection).length === optionGroups.length) {
      const selectedValueIds = Object.values(newSelection);

      // [Variant 찾기 로직] variants 배열에서 사용자가 선택한 id들을 모두 포함하는 진짜 상품 찾기
      const matchedVariant = variants.find(
        (variant) =>
          variant.optionValueIds.length === selectedValueIds.length &&
          variant.optionValueIds.every((id) => selectedValueIds.includes(id)),
      );

      if (matchedVariant) {
        // 하단 카드에 예쁘게 띄워줄 "블랙 / Medium" 같은 이름 만들기
        const combinedOptionName = optionGroups
          .map((group) => {
            // 1. 유저가 이 그룹(예: 색상)에서 선택한 ID를 찾습니다.
            const selectedValueId = newSelection[group.optionTypeId];

            // 2. 그 ID를 가지고 group.values 배열을 뒤져서 '진짜 이름'을 찾습니다.
            const foundValue = group.values.find(
              (v) => v.optionValueId === selectedValueId,
            );

            return foundValue?.name; // "블랙", "Medium" 반환
          })
          .filter(Boolean) // 혹시 모를 undefined를 제거
          .join(" / ");

        // 장바구니(selectedItems)에 추가
        setSelectedItems((prev) => {
          // 이미 하단 카드에 있는 옵션이면 수량만 +1
          const existingItemIndex = prev.findIndex(
            (item) => item.id === matchedVariant.id,
          );
          if (existingItemIndex > -1) {
            const newItems = [...prev];
            newItems[existingItemIndex].quantity += 1;
            return newItems;
          }
          // 없는 옵션이면 새로 추가
          return [
            ...prev,
            { ...matchedVariant, quantity: 1, optionName: combinedOptionName },
          ];
        });

        // ⭐️ 카드를 추가했으니, 셀렉트 박스들은 다시 "선택하세요" 초기 상태로 리셋!
        setCurrentSelection({});
      } else {
        alert("선택하신 옵션 조합의 상품이 없습니다.");
        setCurrentSelection({}); // 리셋
      }
    }
  };

  const selectBoxDataList = isSingleProduct
    ? []
    : optionGroups.map((group) => ({
        id: group.optionTypeId,
        label: group.name,
        selectProps: {
          type: group.name,
          options: group.values.map((v) => ({
            name: v.name,
            value: v.optionValueId,
          })),
          value: currentSelection[group.optionTypeId] || "",
          onChange: (val: string | number) =>
            handleOptionChange(group.optionTypeId, Number(val)),
        },
      }));

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0,
  );
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
                      onClick={() =>
                        setSelectedItems((prev) =>
                          prev.filter((i) => i.id !== item.id),
                        )
                      }
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                    <button
                      onClick={() =>
                        setSelectedItems((prev) =>
                          prev.map((i) =>
                            i.id === item.id
                              ? { ...i, quantity: Math.max(1, i.quantity - 1) }
                              : i,
                          ),
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 border-r border-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        setSelectedItems((prev) =>
                          prev.map((i) =>
                            i.id === item.id
                              ? { ...i, quantity: i.quantity + 1 }
                              : i,
                          ),
                        )
                      }
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
