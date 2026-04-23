import { CategoryTree } from "@/src/types/category";
import { apiFetch } from "../client";
import { mapCategoryTreeToDomain } from "./mapper";
import { CategoryTreeResponse } from "./types";

export const fetchHeaderCategoryTree = async (): Promise<CategoryTree[]> => {
  const rawCategories = await apiFetch<CategoryTreeResponse[]>(
    "/product-service/categories/tree",
    {
      method: "GET",
      next: { revalidate: 86400 },
    },
  );
  return mapCategoryTreeToDomain(rawCategories);
};
