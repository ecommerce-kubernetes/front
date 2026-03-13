export type ProductStatus = "ON_SALE" | "STOP_SALE" | "PREPARING";

export interface Product {
  productId: number;
  name: string;
  thumbnail: string;
  displayPrice: number;
  originalPrice: number;
  maxDiscountRate: number;
  categoryId: number;
  publishedAt: string;
  rating: number;
  reviewCount: number;
  status: ProductStatus;
}
