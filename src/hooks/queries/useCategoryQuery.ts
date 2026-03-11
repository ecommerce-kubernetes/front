import { fetchCategoryTree } from "@/src/api/category";
import { CategoryTree } from "@/src/types/category";
import { useQuery } from "@tanstack/react-query";

export const useCategoryQuery = () => {
  return useQuery<CategoryTree[], Error>({
    queryKey: ["categories", "tree"],
    queryFn: fetchCategoryTree,
    staleTime: 1000 * 60 * 5,
  });
};
