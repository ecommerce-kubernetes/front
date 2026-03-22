import { PaginatedList } from "@/src/types/common";
import { Product, ProductFilterState } from "@/src/types/product";
import { ProductListParams, ProductResponse } from "./types";
import { parseParamsToUrl } from "@/src/util/requestUtil";
import { apiFetch } from "../client";
import { PageResponse } from "../common/types";
import { mapProductPageToDomain } from "./mapper";

export const fetchProductList = async (
  filters: ProductFilterState,
): Promise<PaginatedList<Product>> => {
  const params: ProductListParams = {
    page: filters.page,
    size: filters.size,
    sort: filters.sort,
    categoryId: filters.categoryId,
    name: filters.name,
    rating: filters.rating,
  };
  const queryUrl = parseParamsToUrl(params);
  const url = queryUrl
    ? `/product-service/products?${queryUrl}`
    : `/product-service/products`;

  const response = await apiFetch<PageResponse<ProductResponse>>(url, {
    method: "GET",
  });

  return mapProductPageToDomain(response);
};
