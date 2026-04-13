export interface AddCartItemRequest {
  productVariantId: number;
  quantity: number;
}
export interface AddCartRequest {
  items: AddCartItemRequest[];
}

export interface AddCartResponse {
  items: CartItemResponse[];
  totalItemCount: number;
}

export interface CartItemResponse {
  id: number;
  status: string;
  isAvailable: boolean;
  productId: number;
  productVariantId: number;
  productName: string;
  thumbnail: string;
  quantity: number;
  price: CartItemPriceResponse;
  lineTotal: number;
  options: CartItemOptionResponse[];
}

export interface CartItemPriceResponse {
  originalPrice: number;
  discountRate: number;
  discountAmount: number;
  discountedPrice: number;
}

export interface CartItemOptionResponse {
  optionTypeName: string;
  optionValueName: string;
}
