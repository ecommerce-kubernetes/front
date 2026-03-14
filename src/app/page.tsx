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

const BANNERS = [
  { id: 1, color: "#9CA3AF", text: "첫 번째 배너" },
  { id: 2, color: "#EF4444", text: "두 번째 배너" },
  { id: 3, color: "#3B82F6", text: "세 번째 배너" },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full">
        <HeroBanner banners={BANNERS} />
      </section>
      <section className="w-full max-w-250 mx-auto">
        <div className="flex flex-col py-20 gap-25">
          <ProductCarousel title="지금 제일 인기있는 상품" products={data} />
          <ProductCarousel
            title="특가! 할인 상품을 만나보세요"
            products={data}
          />
          <ProductCarousel title="새 상품이 들어왔어요" products={data} />
        </div>
      </section>
    </div>
  );
}
