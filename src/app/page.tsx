import { fetchProductList } from "../api/product";
import { ProductCarousel } from "../components/products/ProductCarousel";
import { HeroBanner } from "./HeroBanner";

const BANNERS = [
  { id: 1, color: "#9CA3AF", text: "첫 번째 배너" },
  { id: 2, color: "#EF4444", text: "두 번째 배너" },
  { id: 3, color: "#3B82F6", text: "세 번째 배너" },
];

export default async function HomePage() {
  const [popularPage, salePage, newPage] = await Promise.all([
    fetchProductList({ page: 1, size: 20, sort: "latest" }),
    fetchProductList({ page: 1, size: 20, sort: "latest" }),
    fetchProductList({ page: 1, size: 20, sort: "latest" }),
  ]);
  return (
    <div className="w-full flex flex-col">
      <section className="w-full">
        <HeroBanner banners={BANNERS} />
      </section>
      <section className="w-full max-w-250 mx-auto">
        <div className="flex flex-col py-20 gap-25">
          <ProductCarousel
            title="지금 제일 인기있는 상품"
            products={popularPage.content}
            href={"/menu/popular"}
          />
          <ProductCarousel
            title="특가! 할인 상품을 만나보세요"
            products={salePage.content}
            href="/menu/special-sale"
          />
          <ProductCarousel
            title="새 상품이 들어왔어요"
            products={newPage.content}
            href="/menu/new"
          />
        </div>
      </section>
    </div>
  );
}
