import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
export const useCarousel = (
  options?: EmblaOptionsType,
  plugins?: EmblaPluginType[],
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [selectIndex, setSelectIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setTotalCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onInit();

    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectIndex,
    totalCount,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    emblaRef,
  };
};
