import { useCallback, useMemo, useState } from "react";
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

  const getCombinedOptionName = useCallback(
    (selection: Record<number, number>) => {
      return optionGroups
        .map(
          (group) =>
            group.values.find(
              (v) => v.optionValueId === selection[group.optionTypeId],
            )?.name,
        )
        .filter(Boolean)
        .join(" / ");
    },
    [optionGroups],
  );

  const handleOptionChange = useCallback(
    (optionTypeId: number, optionValueId: number) => {
      const newSelection = {
        ...currentSelection,
        [optionTypeId]: optionValueId,
      };
      setCurrentSelection(newSelection);
      if (Object.keys(newSelection).length === optionGroups.length) {
        const selectedValueIds = Object.values(newSelection);
        const matchedVariant = variants.find(
          (variant) =>
            variant.optionValueIds.length === selectedValueIds.length &&
            variant.optionValueIds.every((id) => selectedValueIds.includes(id)),
        );

        if (matchedVariant) {
          const combinedOptionName = getCombinedOptionName(newSelection);
          setSelectedItems((prev) => {
            const existing = prev.findIndex(
              (item) => item.id === matchedVariant.id,
            );
            if (existing > -1) {
              const newItems = [...prev];
              newItems[existing].quantity += 1;
              return newItems;
            }
            return [
              ...prev,
              {
                ...matchedVariant,
                quantity: 1,
                optionName: combinedOptionName,
              },
            ];
          });
          setCurrentSelection({});
        }
      }
    },
    [currentSelection, optionGroups, variants, getCombinedOptionName],
  );

  const availableOptions = useMemo(() => {
    if (isSingleProduct) return [];

    return optionGroups.map((group) => {
      const mappedOptions = group.values.map((v) => {
        const tempSelection = {
          ...currentSelection,
          [group.optionTypeId]: v.optionValueId,
        };
        const tempSelectedIds = Object.values(tempSelection);
        const isAvailable = variants.some((variant) =>
          tempSelectedIds.every((id) => variant.optionValueIds.includes(id)),
        );
        return { name: v.name, value: v.optionValueId, disabled: !isAvailable };
      });

      return {
        id: group.optionTypeId,
        label: group.name,
        options: mappedOptions,
        selectedValue: currentSelection[group.optionTypeId] || "",
        onChange: (val: string | number) =>
          handleOptionChange(group.optionTypeId, Number(val)),
      };
    });
  }, [
    isSingleProduct,
    optionGroups,
    currentSelection,
    variants,
    handleOptionChange,
  ]);

  const totalPrice = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => acc + item.discountedPrice * item.quantity,
      0,
    );
  }, [selectedItems]);

  return {
    isSingleProduct,
    availableOptions,
    selectedItems,
    totalPrice,
    handleRemoveItem,
    handleUpdateQuantity,
  };
};
