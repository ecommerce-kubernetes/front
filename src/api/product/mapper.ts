import { Product, ProductDetail } from "@/src/types/product";
import { ProductDetailResponse, ProductResponse } from "./types";
import { PageResponse } from "../common/types";
import { PaginatedList } from "@/src/types/common";

export const mapProductToDomain = (raw: ProductResponse): Product => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;
  return {
    id: raw.productId,
    name: raw.name,
    thumbnailUrl: raw.thumbnail ? `${imageBaseUrl}/${raw.thumbnail}` : "",
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
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE;
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
      id: img.imageId,
      url: img.imagePath ? `${imageBaseUrl}/${img.imagePath}` : "",
      order: img.sortOrder,
    })),
    optionGroups: raw.optionGroups,
    images: raw.images.map((img) => ({
      id: img.imageId,
      url: img.imagePath ? `${imageBaseUrl}/${img.imagePath}` : "",
      order: img.sortOrder,
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
