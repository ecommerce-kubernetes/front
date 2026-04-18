import { useState } from "react";

export const useCheckBox = (ids: number[]) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const isAllChecked = checkedIds.length === ids.length && ids.length > 0;

  const handleToggleAll = () => {
    if (isAllChecked) {
      setCheckedIds([]);
    } else {
      setCheckedIds(ids);
    }
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
  };
};
