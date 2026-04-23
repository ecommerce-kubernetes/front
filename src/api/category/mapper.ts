import { CategoryTree } from "@/src/types/category";
import { CategoryTreeResponse } from "./types";

export const mapCategoryTreeToDomain = (
  rawCategories: CategoryTreeResponse[],
): CategoryTree[] => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;
  return rawCategories
    .filter((c) => c.depth === 1 || c.parentId === null)
    .map((c) => ({
      ...c,
      imageUrl: c.imagePath ? `${imageBaseUrl}/${c.imagePath}` : null,
      children: c.children ? mapCategoryTreeToDomain(c.children) : [],
    }));
};
