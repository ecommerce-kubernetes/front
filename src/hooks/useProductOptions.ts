import { useState } from "react";
import { ProductDetail, ProductVariant } from "../types/product";

export interface SelectedItem extends ProductVariant {
  quantity: number;
  optionName: string;
}

export const useProductOptions = (
  optionGroups: ProductDetail["optionGroups"],
  variants: ProductDetail["variants"],
  productName: string,
) => {
  const isSingleProduct = !optionGroups || optionGroups.length === 0;
  const [openSelectId, setOpenSelectId] = useState<number | null>(null);

  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>(() => {
    if (isSingleProduct && variants.length > 0) {
      return [{ ...variants[0], quantity: 1, optionName: productName }];
    }
    return [];
  });

  const [currentSelection, setCurrentSelection] = useState<
    Record<number, number>
  >({});

  const handleRemoveItem = (id: number) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const handleOptionChange = (optionTypeId: number, optionValueId: number) => {
    const newSelection = { ...currentSelection, [optionTypeId]: optionValueId };
    setCurrentSelection(newSelection);

    if (Object.keys(newSelection).length === optionGroups.length) {
      const selectedValueIds = Object.values(newSelection);
      const matchedVariant = variants.find(
        (variant) =>
          variant.optionValueIds.length === selectedValueIds.length &&
          variant.optionValueIds.every((id) => selectedValueIds.includes(id)),
      );

      if (matchedVariant) {
        const combinedOptionName = optionGroups
          .map(
            (group) =>
              group.values.find(
                (v) => v.optionValueId === newSelection[group.optionTypeId],
              )?.name,
          )
          .filter(Boolean)
          .join(" / ");

        setSelectedItems((prev) => {
          const existingItemIndex = prev.findIndex(
            (item) => item.id === matchedVariant.id,
          );
          if (existingItemIndex > -1) {
            const newItems = [...prev];
            newItems[existingItemIndex].quantity += 1;
            return newItems;
          }
          return [
            ...prev,
            { ...matchedVariant, quantity: 1, optionName: combinedOptionName },
          ];
        });
        setCurrentSelection({});
      }
    }
  };

  // 기존 selectBoxDataList 조립 로직 (그대로 가져옴)
  const selectBoxDataList = isSingleProduct
    ? []
    : optionGroups.map((group) => {
        const mappedOptions = group.values.map((v) => {
          const tempSelection = {
            ...currentSelection,
            [group.optionTypeId]: v.optionValueId,
          };
          const tempSelectedIds = Object.values(tempSelection);
          const isAvailable = variants.some((variant) =>
            tempSelectedIds.every((id) => variant.optionValueIds.includes(id)),
          );
          return {
            name: v.name,
            value: v.optionValueId,
            disabled: !isAvailable,
          };
        });

        return {
          id: group.optionTypeId,
          label: group.name,
          selectProps: {
            type: group.name,
            options: mappedOptions,
            value: currentSelection[group.optionTypeId] || "",
            onChange: (val: string | number) =>
              handleOptionChange(group.optionTypeId, Number(val)),
            isOpen: openSelectId === group.optionTypeId,
            onToggle: () =>
              setOpenSelectId((prevId) =>
                prevId === group.optionTypeId ? null : group.optionTypeId,
              ),
          },
        };
      });

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0,
  );

  // ⭐️ 컴포넌트(View)에서 그릴 때 필요한 데이터와 조작 함수들만 딱 정리해서 반환!
  return {
    isSingleProduct,
    selectBoxDataList,
    selectedItems,
    totalPrice,
    handleRemoveItem,
    handleUpdateQuantity,
  };
};
