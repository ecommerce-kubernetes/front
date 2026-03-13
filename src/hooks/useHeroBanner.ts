import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const BANNERS = [
  { id: 1, color: "#9CA3AF", text: "첫 번째 배너" },
  { id: 2, color: "#EF4444", text: "두 번째 배너" },
  { id: 3, color: "#3B82F6", text: "세 번째 배너" },
];

export const useHeroBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const [selectIndex, setSelectIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const banners = BANNERS;
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return {
    banners,
    emblaRef,
    scrollPrev,
    scrollNext,
    selectIndex,
    totalCount: scrollSnaps.length,
  };
};
