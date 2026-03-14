import { fetchProductList, ProductListParams } from "@/src/api/product";
import { useQuery } from "@tanstack/react-query";

export const useProductListQuery = (params: ProductListParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProductList(params),
    select: (data) => {
      return data.content.filter((product) => product.status === "ON_SALE");
    },
  });
};
