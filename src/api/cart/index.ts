import { Cart, CartItem } from "@/src/types/cart";
import { authFetch } from "../client";
import { mapToCartItemDomain } from "./mapper";
import { AddCartRequest, AddCartResponse, CartResponse } from "./types";

export const addCart = async (data: AddCartRequest): Promise<CartItem[]> => {
  const response = await authFetch<AddCartResponse>("/order-service/carts", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.items.map((item) => mapToCartItemDomain(item));
};

export const getCart = async (): Promise<Cart> => {
  const response = await authFetch<CartResponse>("/order-service/carts", {
    method: "GET",
  });

  return {
    items: response.items.map((item) => mapToCartItemDomain(item)),
    totalOriginalPrice: response.totalOriginalPrice,
    totalDiscountAmount: response.totalDiscountAmount,
    totalFinalPrice: response.totalFinalPrice,
  };
};
