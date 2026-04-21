import { useState } from "react";

export const useCheckBox = (ids: number[]) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [isInitialized, setInitialized] = useState<boolean>(false);

  if (ids.length > 0 && !isInitialized) {
    setCheckedIds(ids);
    setInitialized(true);
  }

  const isAllChecked = checkedIds.length === ids.length && ids.length > 0;

  const handleToggleAll = () => {
    if (isAllChecked) {
      setCheckedIds([]);
    } else {
      setCheckedIds(ids);
    }
  };

  const clearChecked = () => {
    setCheckedIds([]);
  };

  const handleToggleItem = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  return {
    checkedIds,
    isAllChecked,
    handleToggleAll,
    handleToggleItem,
    clearChecked,
  };
};
