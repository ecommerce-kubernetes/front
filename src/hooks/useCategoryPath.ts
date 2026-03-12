import { useMemo, useState } from "react";
import { CategoryTree } from "../types/category";

export const useCategoryPath = (rootCategories: CategoryTree[]) => {
  const [hoveredPath, setHoveredPath] = useState<CategoryTree[]>([]);
  const columns = useMemo(() => {
    const cols = [rootCategories];
    hoveredPath.forEach((category) => {
      if (category.children && category.children.length > 0) {
        cols.push(category.children);
      }
    });
    return cols;
  }, [rootCategories, hoveredPath]);

  const handleMouseEnter = (category: CategoryTree, depthIndex: number) => {
    const newPath = hoveredPath.slice(0, depthIndex);
    newPath.push(category);
    setHoveredPath(newPath);
  };

  const clearPath = () => setHoveredPath([]);

  return {
    columns,
    hoveredPath,
    handleMouseEnter,
    clearPath,
  };
};
