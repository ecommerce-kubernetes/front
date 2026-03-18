import { fetchCategoryTree } from "@/src/api/category";
import { useQuery } from "@tanstack/react-query";

export const useCategoryQuery = () => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;
  return useQuery({
    queryKey: ["categories", "tree"],
    queryFn: fetchCategoryTree,
    select: (data) => {
      const filteredCategories = data.filter(
        (category) => category.depth === 1 || category.parentId === null,
      );
      return filteredCategories.map((category) => ({
        ...category,
        imageUrl: category.imageUrl
          ? `${imageBaseUrl}/${category.imageUrl}`
          : null,
      }));
    },
    staleTime: 1000 * 60 * 5,
  });
};
