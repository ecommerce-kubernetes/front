import {
  CartItemOptionResponse,
  CartItemPriceResponse,
  CartItemResponse,
} from "./types";
import { CartItem, CartItemOption, CartItemPrice } from "@/src/types/cart";

export const mapToCartItemDomain = (raw: CartItemResponse): CartItem => {
  return {
    id: raw.id,
    status: raw.status,
    isAvailable: raw.isAvailable,
    productId: raw.productId,
    productVariantId: raw.productVariantId,
    productName: raw.productName,
    thumbnail: raw.thumbnail,
    quantity: raw.quantity,
    price: mapToCartItemPriceDomain(raw.price),
    lineTotal: raw.lineTotal,
    options: raw.options.map((option) => mapToCartItemOptionDomain(option)),
  };
};

export const mapToCartItemPriceDomain = (
  raw: CartItemPriceResponse,
): CartItemPrice => {
  return {
    originalPrice: raw.originalPrice,
    discountRate: raw.discountRate,
    discountAmount: raw.discountAmount,
    discountedPrice: raw.discountedPrice,
  };
};

export const mapToCartItemOptionDomain = (
  raw: CartItemOptionResponse,
): CartItemOption => {
  return {
    typeName: raw.optionTypeName,
    valueName: raw.optionValueName,
  };
};
