import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../api/cart";
import { CartItem } from "../types/cart";

export const useCartDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,
    // 낙관적 업데이트(실제 api 요청 전 실행)
    onMutate: async (idsToDelete) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      //장바구니 상품
      const previousCart = queryClient.getQueryData<CartItem[]>(["cart"]);

      queryClient.setQueryData(
        ["cart"],
        (oldCartData: CartItem[] | undefined) => {
          if (!oldCartData) return oldCartData;
          // 기존 캐시에서 삭제할 상품 제거
          return oldCartData.filter((item) => !idsToDelete.includes(item.id));
        },
      );
      return { previousCart };
    },

    onError: (err, variables, context) => {
      // 삭제 실패시 이전 장바구니 상품으로 롤백
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
    },

    // 장바구니 다시 조회
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
