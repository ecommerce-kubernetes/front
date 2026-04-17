import { create } from "zustand";
import { CartItem } from "../types/cart";

interface CartToastState {
  isOpen: boolean;
  addedItem: CartItem | null;
  showToast: (item: CartItem) => void;
  hideToast: () => void;
}

export const useCartToastStore = create<CartToastState>((set) => ({
  isOpen: false,
  addedItem: null,
  showToast: (item) => {
    set({ isOpen: true, addedItem: item });
    setTimeout(() => {
      set({ isOpen: false, addedItem: null });
    }, 3000);
  },
  hideToast: () => set({ isOpen: false, addedItem: null }),
}));
