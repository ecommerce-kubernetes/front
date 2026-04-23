import {
  addCart,
  deleteCartItem,
  getCart,
  updateCartItemQuantity,
} from "@/src/api/cart";
import { CartItem } from "@/src/types/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAddCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCart,
    // 장바구니 상품 추가 성공시 쿼리 무효화
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      if (error instanceof Error && error.message === "UNAUTHORIZED") {
        console.log("로그인 만료");
      } else {
        console.log("에러");
      }
    },
  });
};

export const useCartFetch = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: options?.enabled !== false,
  });
};

export const useCartDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,
    // 낙관적 업데이트
    // api 호출 전 실행
    onMutate: async (idsToDelete) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      // 업데이트 전 장바구니 상품 저장
      const previousCart = queryClient.getQueryData<CartItem[]>(["cart"]);

      queryClient.setQueryData(
        ["cart"],
        (oldCartData: CartItem[] | undefined) => {
          if (!oldCartData) return oldCartData;
          // 기존 캐시에서 삭제할 상품을 미리 제거
          return oldCartData.filter((item) => !idsToDelete.includes(item.id));
        },
      );
      return { previousCart };
    },
    onError: (err, variables, context) => {
      // 삭제 실패시 이전 장바구니로 롤백
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
    },

    // 삭제 시도 후 장바구니 리프레시
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useUpdateQuantityMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      updateCartItemQuantity(id, quantity),
    // 업데이트후 장바구니 리프레시
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
