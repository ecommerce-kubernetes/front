export interface ProductListParams {
  page?: number;
  size?: number;
  sort?: string;
  categoryId?: number;
  name?: string;
  rating?: number;
}

export interface ProductResponse {
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
  status: "ON_SALE" | "STOP_SALE" | "PREPARING";
}
