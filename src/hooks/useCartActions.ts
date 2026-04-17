import { AddCartItemRequest, AddCartRequest } from "../api/cart/types";
import { useCallback } from "react";
import { SelectedItem } from "../types/product";
import { useAddCartMutation } from "./queries/useCartQuery";
import { useAuthStore } from "../store/useAuthStore";
import { useModal } from "./useModal";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CartItem } from "../types/cart";
import { useCartToastStore } from "../store/useCartToastStore";

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
  const { showToast } = useCartToastStore();
  const {
    isModalOpen: isLoginModal,
    modalOpen: loginModalOpen,
    modalClose: loginModalClose,
  } = useModal();

  const router = useRouter();
  const addToCart = useCallback(
    (items: SelectedItem[], options?: { onSuccess?: () => void }) => {
      if (!isLoggedIn) {
        return loginModalOpen();
      }

      if (items.length === 0) {
        return toast.error("주문할 상품을 선택해주세요.", {
          className: "font-pretendard",
          id: "cart-item-error",
          position: "top-center",
          duration: 1500,
        });
      }

      const request = mapToAddCartRequest(items);
      addCart(request, {
        onSuccess: (response: CartItem[]) => {
          if (options?.onSuccess) {
            options.onSuccess();
          }
          const firstItem = response[0];
          showToast(firstItem);
        },
      });
    },
    [addCart, isLoggedIn, loginModalOpen, showToast],
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
