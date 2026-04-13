export interface CartItem {
  id: number;
  status: string;
  isAvailable: boolean;
  productId: number;
  productVariantId: number;
  productName: string;
  thumbnail: string;
  quantity: number;
  price: CartItemPrice;
  lineTotal: number;
  options: CartItemOption[];
}

export interface CartItemOption {
  typeName: string;
  valueName: string;
}

export interface CartItemPrice {
  originalPrice: number;
  discountRate: number;
  discountAmount: number;
  discountedPrice: number;
}
