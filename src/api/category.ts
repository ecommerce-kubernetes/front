import { CategoryTree } from "../types/category";
import { apiFetch } from "./client";

export const fetchCategoryTree = async (): Promise<CategoryTree[]> => {
  return apiFetch("/product-service/categories/tree", { method: "GET" });
};
