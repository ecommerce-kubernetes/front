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

export interface ProductImageResponse {
  imageUrl: string;
  order: number;
  thumbnail: boolean;
}

export interface OptionValueResponse {
  optionValueId: number;
  name: string;
}

export interface OptionGroupResponse {
  optionTypeId: number;
  name: string;
  priority: number;
  values: OptionValueResponse[];
}

export interface ProductVariantResponse {
  variantId: number;
  sku: string;
  optionValueIds: number[];
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  stockQuantity: number;
}

export interface ProductDescriptionImageResponse {
  imageUrl: string;
  order: number;
}

export interface ProductDetailResponse {
  productId: number;
  name: string;
  categoryId: number;
  description: string;
  displayPrice: number;
  originalPrice: number;
  maxDiscountRate: number;
  rating: number;
  reviewCount: number;
  popularityScore: number;
  optionGroups: OptionGroupResponse[];
  images: ProductImageResponse[];
  descriptionImages: ProductDescriptionImageResponse[];
  variants: ProductVariantResponse[];
  status: "ON_SALE" | "STOP_SALE" | "PREPARING";
}
