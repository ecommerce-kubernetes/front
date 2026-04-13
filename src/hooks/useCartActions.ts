import { AddCartItemRequest, AddCartRequest } from "./../api/cart/types";
import { useCallback } from "react";
import { SelectedItem } from "../types/product";
import { useAddCartMutation } from "./queries/useCartQuery";
import { useAuthStore } from "../store/useAuthStore";
import { useModal } from "./useModal";
import { useRouter } from "next/navigation";

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
  const { isLoggedIn } = useAuthStore();
  const {
    isModalOpen: isLoginModal,
    modalOpen: loginModalOpen,
    modalClose: loginModalClose,
  } = useModal();
  const router = useRouter();
  const addToCart = useCallback(
    (items: SelectedItem[]) => {
      if (!isLoggedIn) {
        loginModalOpen();
        return;
      }
      const request = mapToAddCartRequest(items);
      addCart(request);
    },
    [addCart, isLoggedIn, loginModalOpen],
  );

  const handleLoginConfirm = () => {
    loginModalClose();
    router.push(`/login?redirect=${window.location.pathname}`);
  };

  const buyNow = useCallback((items: SelectedItem[]) => {
    console.log("바로 구매");
  }, []);

  return {
    isLoginModal,
    handleLoginConfirm,
    addToCart,
    buyNow,
    isAddingToCart,
  };
};
