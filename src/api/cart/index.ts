import { CartItem } from "@/src/types/cart";
import { authFetch } from "../client";
import { mapToCartItemDomain } from "./mapper";
import {
  AddCartRequest,
  AddCartResponse,
  CartItemResponse,
  CartResponse,
} from "./types";

export const addCart = async (data: AddCartRequest): Promise<CartItem[]> => {
  const response = await authFetch<AddCartResponse>("/order-service/carts", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.items.map((item) => mapToCartItemDomain(item));
};

export const getCart = async (): Promise<CartItem[]> => {
  const response = await authFetch<CartResponse>("/order-service/carts", {
    method: "GET",
  });

  return response.items.map((item) => mapToCartItemDomain(item));
};

export const updateCartItemQuantity = async (
  id: number,
  quantity: number,
): Promise<CartItem> => {
  const response = await authFetch<CartItemResponse>(
    `/order-service/carts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ quantity: quantity }),
    },
  );
  return mapToCartItemDomain(response);
};

export const deleteCartItem = async (ids: number[]): Promise<void> => {
  const queryString = ids.join(",");
  await authFetch<void>(`/order-service/carts?cartItemIds=${queryString}`, {
    method: "DELETE",
  });
};
