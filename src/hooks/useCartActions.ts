import { useCallback, useState } from "react";
import { SelectedItem } from "../types/product";

export const useCartActions = () => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addToCart = useCallback((items: SelectedItem[]) => {
    setIsAddingToCart(true);
    console.log("장바구니 추가 호출");
  }, []);

  const buyNow = useCallback((items: SelectedItem[]) => {
    console.log("바로 구매");
  }, []);

  return {
    addToCart,
    buyNow,
    isAddingToCart,
  };
};
