import { Product, ProductDetail } from "@/src/types/product";
import { ProductDetailResponse, ProductResponse } from "./types";
import { PageResponse } from "../common/types";
import { PaginatedList } from "@/src/types/common";

export const mapProductToDomain = (raw: ProductResponse): Product => {
  {
    /** TODO cdn 사용으로 변경한 후 설정 */
  }
  // const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;

  return {
    id: raw.productId,
    name: raw.name,
    // cdn 사용으로 변경한 후 설정
    // thumbnailUrl: raw.thumbnail ? `${imageBaseUrl}/${raw.thumbnail}` : "",
    thumbnailUrl: raw.thumbnail,
    price: raw.displayPrice,
    originalPrice: raw.originalPrice,
    discountRate: raw.maxDiscountRate,
    categoryId: raw.categoryId,
    publishedDate: raw.publishedAt,
    rating: raw.rating,
    reviewCount: raw.reviewCount,
    status: raw.status,
  };
};

export const mapProductPageToDomain = (
  rawPage: PageResponse<ProductResponse>,
): PaginatedList<Product> => {
  return {
    items: rawPage.content.map(mapProductToDomain),
    currentPage: rawPage.currentPage,
    totalPage: rawPage.totalPage,
    pageSize: rawPage.pageSize,
    totalCount: rawPage.totalElement,
  };
};

export const mapProductDetail = (raw: ProductDetailResponse): ProductDetail => {
  return {
    id: raw.productId,
    name: raw.name,
    categoryId: raw.categoryId,
    description: raw.description,
    price: raw.displayPrice,
    originalPrice: raw.originalPrice,
    discountRate: raw.maxDiscountRate,
    rating: raw.rating,
    reviewCount: raw.reviewCount,
    popularityScore: raw.popularityScore,
    descriptionImages: raw.descriptionImages.map((img) => ({
      url: img.imageUrl,
      order: img.order,
    })),
    optionGroups: raw.optionGroups,
    images: raw.images.map((img) => ({
      url: img.imageUrl,
      order: img.order,
      thumbnail: img.thumbnail,
    })),
    variants: raw.variants.map((variant) => ({
      id: variant.variantId,
      sku: variant.sku,
      optionValueIds: variant.optionValueIds,
      price: variant.originalPrice,
      discountedPrice: variant.discountedPrice,
      discountRate: variant.discountRate,
      stockQuantity: variant.stockQuantity,
    })),
  };
};
