import { CartItem } from "@/src/types/cart";
import { authFetch } from "../client";
import { mapToCartItemDomain } from "./mapper";
import { AddCartRequest, AddCartResponse } from "./types";

export const addCart = async (data: AddCartRequest): Promise<CartItem[]> => {
  const response = await authFetch<AddCartResponse>("/order-service/carts", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.items.map((item) => mapToCartItemDomain(item));
};
