import { PageResponse } from "../types/common";
import { Product } from "../types/product";
import { parseParamsToUrl } from "../util/requestUtil";
import { apiFetch } from "./client";

export interface ProductListParams {
  page?: number;
  size?: number;
  sort?: string;
  categoryId?: number;
  name?: string;
  rating?: number;
}

export const fetchProductList = async (
  params: ProductListParams,
): Promise<PageResponse<Product>> => {
  const queryUrl = parseParamsToUrl(params);
  const url = queryUrl
    ? `/product-service/products?${queryUrl}`
    : `/product-service/products`;

  return apiFetch(url, { method: "GET" });
};
