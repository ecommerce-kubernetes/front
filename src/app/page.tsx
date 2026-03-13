import { ProductCarousel } from "../components/products/ProductCarousel";
import { Product } from "../types/product";
import { HeroBanner } from "./HeroBanner";

const data: Product[] = [
  {
    productId: 1,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
  {
    productId: 2,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
  {
    productId: 3,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
  {
    productId: 4,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
  {
    productId: 5,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
  {
    productId: 6,
    name: "테스트 상품",
    thumbnail:
      "https://cdn.digitaltoday.co.kr/news/photo/202507/576550_539265_5751.jpg",
    displayPrice: 10000,
    originalPrice: 12000,
    maxDiscountRate: 10,
    categoryId: 1,
    publishedAt: "2026-02-27T16:45:07.144945793",
    rating: 2.0,
    reviewCount: 100,
    status: "ON_SALE",
  },
];

export default function HomePage() {
  return (
    <div className="w-full h-500 flex flex-col">
      <section className="w-full">
        <HeroBanner />
      </section>
      <section className="w-full max-w-250 mx-auto">
        <div className="flex flex-col py-10">
          <ProductCarousel title="지금 제일 인기있는 상품" products={data} />
        </div>
      </section>
    </div>
  );
}
