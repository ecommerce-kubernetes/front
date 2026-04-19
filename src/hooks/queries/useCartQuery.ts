import { addCart, getCart } from "@/src/api/cart";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAddCartMutation = () => {
  return useMutation({
    mutationFn: addCart,
    onError: (error) => {
      if (error instanceof Error && error.message === "UNAUTHORIZED") {
        console.log("로그인 만료");
      } else {
        console.log("에러");
      }
    },
  });
};

export const useCartFetch = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};
