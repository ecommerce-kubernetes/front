import { AddCartItemRequest, AddCartRequest } from "./../api/cart/types";
import { useCallback } from "react";
import { SelectedItem } from "../types/product";
import { useAddCartMutation } from "./queries/useCartQuery";

const mapToAddCartRequest = (items: SelectedItem[]): AddCartRequest => {
  const cartItemRequest: AddCartItemRequest[] = items.map((item) => {
    return {
      productVariantId: item.id,
      quantity: item.quantity,
    };
  });

  return {
    items: cartItemRequest,
  };
};

export const useCartActions = () => {
  const { mutate: addCart, isPending: isAddingToCart } = useAddCartMutation();
  const addToCart = useCallback(
    (items: SelectedItem[]) => {
      const request = mapToAddCartRequest(items);
      addCart(request);
    },
    [addCart],
  );

  const buyNow = useCallback((items: SelectedItem[]) => {
    console.log("바로 구매");
  }, []);

  return {
    addToCart,
    buyNow,
    isAddingToCart,
  };
};
