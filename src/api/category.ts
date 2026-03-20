import { Category, CategoryTree } from "../types/category";
import { apiFetch } from "./client";

export const fetchHeaderCategoryTree = async (): Promise<CategoryTree[]> => {
  const rawCategories = await apiFetch("/product-service/categories/tree", {
    method: "GET",
    next: { revalidate: 86400 },
  });

  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;

  return rawCategories
    .filter(
      (category: Category) =>
        category.depth === 1 || category.parentId === null,
    )
    .map((category: Category) => ({
      ...category,
      imageUrl: category.imageUrl
        ? `${imageBaseUrl}/${category.imageUrl}`
        : null,
    }));
};
