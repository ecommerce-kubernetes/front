import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { CartItem } from "../types/cart";
import { useUpdateQuantityMutation } from "./queries/useCartQuery";

export const useCartQuantity = (item: CartItem) => {
  const queryClient = useQueryClient();
  const previousCartRef = useRef<CartItem[] | undefined>(undefined);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { mutate } = useUpdateQuantityMutation();

  const debounceMutate = useCallback(
    (newQuantity: number) => {
      // 수량 조절 버튼 클릭시 타임아웃 초기화 => 디바운스 기능
      if (timerRef.current) clearTimeout(timerRef.current);
      // 타임아웃이 0.5초 지날 시 수량 변경 api 호출
      timerRef.current = setTimeout(() => {
        mutate(
          { id: item.id, quantity: newQuantity },
          {
            // 에러 발생시 이전 장바구니로 롤백
            onError: () => {
              if (previousCartRef.current) {
                queryClient.setQueryData(["cart"], previousCartRef.current);
              }
            },
          },
        );
      }, 500);
    },
    [item.id, mutate, queryClient],
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
