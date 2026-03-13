"use client";
import { Product } from "@/src/types/product";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="w-full flex flex-col">
      <div className="flex pl-5 items-center justify-between">
        <h1 className="font-pretendard font-bold text-2xl">{title}</h1>
        <Link href={"/"} className="h-full flex items-center gap-1.5">
          <span className="font-medium font-pretendard text-gray-600">
            전체보기
          </span>
          <div className="rounded-full bg-brand-primary">
            <ArrowRight size={18} className="text-white" />
          </div>
        </Link>
      </div>
      <div className="mt-5">
        <div className="w-full overflow-hidden group relative" ref={emblaRef}>
          <div className="flex h-full">
            {products.map((product) => (
              <div
                key={product.productId}
                className="flex-[0_0_25%] min-w-0 h-full flex"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
