import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollToSection = <T extends string>(
  initialTab: T,
  navHeight: number = 0,
) => {
  const [activeTab, setActiveTab] = useState<T>(initialTab);
  const sectionRefs = useRef<Record<T, HTMLDivElement | null>>(
    {} as Record<T, HTMLDivElement | null>,
  );

  const isClickScrolling = useRef(false);

  const setRef = useCallback(
    (tab: T) => (el: HTMLDivElement | null) => {
      sectionRefs.current[tab] = el;
    },
    [],
  );

  const scrollTo = useCallback(
    (tab: T) => {
      isClickScrolling.current = true;
      setActiveTab(tab);
      const targetElement = sectionRefs.current[tab];
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setTimeout(() => {
          isClickScrolling.current = false;
        }, 800);
      }
    },
    [navHeight],
  );

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabKey = Object.keys(sectionRefs.current).find(
            (key) => sectionRefs.current[key as T] === entry.target,
          ) as T;
          if (tabKey) {
            setActiveTab(tabKey);
          }
        }
      });
    };

    const observerOptions = {
      rootMargin: `-${navHeight + 10}px 0px -60% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el instanceof Element) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [navHeight]);

  return { activeTab, setRef, scrollTo };
};
