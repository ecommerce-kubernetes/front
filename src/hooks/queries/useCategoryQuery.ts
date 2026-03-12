import { fetchCategoryTree } from "@/src/api/category";
import { CategoryTree } from "@/src/types/category";
import { useQuery } from "@tanstack/react-query";

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["categories", "tree"],
    queryFn: fetchCategoryTree,
    select: (data) => {
      return data.filter(
        (category) => category.depth === 1 || category.parentId === null,
      );
    },
    staleTime: 1000 * 60 * 5,
  });
};
