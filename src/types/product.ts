export type ProductStatus = "ON_SALE" | "STOP_SALE" | "PREPARING";

export interface ProductFilterState {
  page?: number;
  size?: number;
  sort?: string;
  categoryId?: number;
  name?: string;
  rating?: number;
}

export interface Product {
  id: number;
  name: string;
  thumbnailUrl: string;
  price: number;
  originalPrice: number;
  discountRate: number;
  categoryId: number;
  publishedDate: string;
  rating: number;
  reviewCount: number;
  status: ProductStatus;
}
