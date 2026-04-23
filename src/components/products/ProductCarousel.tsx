"use client";
import { Product } from "@/src/types/product";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { useCarousel } from "@/src/hooks/useCarousel";

interface ProductCarouselProps {
  title: string;
  href: string;
  products: Product[];
}

export const ProductCarousel = ({
  title,
  href,
  products,
}: ProductCarouselProps) => {
  const { emblaRef, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel({ loop: false, align: "start", slidesToScroll: 1 });

  return (
    <div className="w-full flex flex-col">
      <div className="flex pl-5 items-center justify-between">
        <h1 className="font-pretendard font-bold text-2xl">{title}</h1>
        <Link href={href} className="h-full flex items-center gap-1.5">
          <span className="font-medium font-pretendard text-gray-600">
            전체보기
          </span>
          <div className="rounded-full bg-brand-primary">
            <ArrowRight size={18} className="text-white" />
          </div>
        </Link>
      </div>
      <div className="relative w-full group mt-5">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full -ml-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_25%] min-w-0 h-full flex pl-4"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className={`absolute cursor-pointer top-1/3 -left-5 p-2 rounded-full bg-white border border-gray-500 
              ${canScrollPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={scrollPrev}
          >
            <ChevronLeft size={30} className="text-black" />
          </button>
          <button
            type="button"
            className={`absolute cursor-pointer top-1/3 -right-5 p-2 rounded-full bg-white border border-gray-500 
              ${canScrollNext ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={scrollNext}
          >
            <ChevronRight size={30} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
