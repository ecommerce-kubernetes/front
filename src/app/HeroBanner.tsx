"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";
import Autoplay from "embla-carousel-autoplay";

//TODO 배너 타입 정의
export const HeroBanner = ({ banners }) => {
  const { emblaRef, scrollPrev, scrollNext, selectIndex, totalCount } =
    useCarousel({ loop: true }, [
      Autoplay({ delay: 4000, stopOnInteraction: false }),
    ]);
  return (
    <div className="w-full h-100 overflow-hidden group relative" ref={emblaRef}>
      <div className="flex h-full">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="flex-[0_0_100%] min-w-0 h-full flex"
            style={{ backgroundColor: banner.color }}
          >
            <span className="text-white text-2xl font-bold">{banner.text}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/30 p-2
       outline-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        onClick={scrollPrev}
      >
        <ChevronLeft size={30} className="text-white" />
      </button>
      <button
        type="button"
        className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/30 p-2
       outline-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        onClick={scrollNext}
      >
        <ChevronRight size={30} className="text-white" />
      </button>
      <div className="absolute text-lg text-white rounded-full bottom-5 right-50 bg-black/30 px-5 py-1 select-none">
        <span className="font-bold">{selectIndex + 1}</span> /{" "}
        <span>{totalCount}</span>
      </div>
    </div>
  );
};
