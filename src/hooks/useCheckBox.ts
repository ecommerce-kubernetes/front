import { useEffect, useRef, useState } from "react";

export const useCheckBox = (ids: number[]) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const prevIdsRef = useRef<number[]>([]);
  useEffect(() => {
    const newIds = ids.filter((id) => !prevIdsRef.current.includes(id));

    if (newIds.length > 0) {
      setCheckedIds((prev) => [...prev, ...newIds]);
    }

    prevIdsRef.current = ids;
  }, [ids]);

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
      setCheckedIds((prev) => prev.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const handleRemoveItem = (id: number) => {
    setCheckedIds((prev) => prev.filter((checkedId) => checkedId !== id));
  };

  return {
    checkedIds,
    isAllChecked,
    handleToggleAll,
    handleToggleItem,
    handleRemoveItem,
    clearChecked,
  };
};
