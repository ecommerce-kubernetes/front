import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { updateCartItemQuantity } from "../api/cart";
import { CartItem } from "../types/cart";

export const useCartQuantity = (item: CartItem) => {
  const queryClient = useQueryClient();
  const previousCartRef = useRef<CartItem[] | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: (newQuantity: number) =>
      updateCartItemQuantity(item.id, newQuantity),
    onError: () => {
      // 업데이트 실패시 업데이트 이전의 장바구니 상품 리스트를 캐시로 복구
      if (previousCartRef.current) {
        queryClient.setQueryData(["cart"], previousCartRef.current);
      }
    },
    //수량 업데이트를 완료(실패 또는 성공) 하면 장바구니 다시 조회
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // 디바운스 타임아웃
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const debounceMutate = useCallback(
    (newQuantity: number) => {
      // 수량 조절 버튼 클릭시 디바운스 타임아웃 초기화
      if (timerRef.current) clearTimeout(timerRef.current);

      // 디바운스 타임아웃이 0.5초 지날 시 수량 변경 호출
      timerRef.current = setTimeout(() => {
        mutation.mutate(newQuantity);
      }, 500);
    },
    [mutation],
  );

  const updateQuantity = (newQuantity: number) => {
    queryClient.cancelQueries({ queryKey: ["cart"] });
    //수량 버튼 클릭시 조회 데이터 ref에 저장
    previousCartRef.current = queryClient.getQueryData(["cart"]);
    queryClient.setQueryData(
      ["cart"],
      (oldCartData: CartItem[] | undefined) => {
        if (!oldCartData) return oldCartData;
        // 수량 변경 아이템 수량을 새 수량으로 변경
        return oldCartData.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem,
        );
      },
    );

    // 디바운스 요청
    debounceMutate(newQuantity);
  };

  const handleIncrease = () => updateQuantity(item.quantity + 1);
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.quantity - 1);
    }
  };

  return {
    handleIncrease,
    handleDecrease,
  };
};
