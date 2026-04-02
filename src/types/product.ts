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

export interface ProductImage {
  url: string;
  order: number;
  thumbnail: boolean;
}

export interface ProductDescriptionImage {
  url: string;
  order: number;
}

export interface OptionValue {
  optionValueId: number;
  name: string;
}

export interface OptionGroup {
  optionTypeId: number;
  name: string;
  priority: number;
  values: OptionValue[];
}

export interface ProductVariant {
  id: number;
  sku: string;
  optionValueIds: number[];
  price: number;
  discountedPrice: number;
  discountRate: number;
  stockQuantity: number;
}
export interface ProductDetail {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  originalPrice: number;
  discountRate: number;
  rating: number;
  reviewCount: number;
  popularityScore: number;
  descriptionImages: ProductDescriptionImage[];
  optionGroups: OptionGroup[];
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface SelectedItem extends ProductVariant {
  quantity: number;
  optionName: string;
}
