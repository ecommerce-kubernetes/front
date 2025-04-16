import styles from "./MainBanner.module.css";
import banner1 from "../../../../assets/images/banner/banner1.png";
import banner2 from "../../../../assets/images/banner/banner2.png";
import arrow from "../../../../assets/images/arrow.svg";
import { useEffect, useRef, useState } from "react";
const banners = [banner1, banner2];
const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeRef = useRef(null);
  const containerRef = useRef(null);
  const startAutoFade = () => {
    console.log("start");
    if (fadeRef.current) return;
    fadeRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
  };

  const stopAutoFade = () => {
    if (fadeRef.current) {
      clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    startAutoFade();

    container.addEventListener("mouseenter", stopAutoFade);
    container.addEventListener("mouseleave", startAutoFade);

    return () => {
      stopAutoFade();
      container.removeEventListener("mouseenter", stopAutoFade);
      container.removeEventListener("mouseleave", startAutoFade);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        {banners.map((banner, index) => (
          <img
            className={`${styles.slideImage} ${
              index == currentIndex ? styles.active : ""
            }`}
            src={banner}
            key={index}
          />
        ))}
      </div>
      <div className={styles.navWrapper}>
        <div className={styles.imageCount}>
          {banners.length}/{currentIndex + 1}
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + banners.length) % banners.length
              )
            }
          >
            <img className={styles.buttonImage} src={arrow} />
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % banners.length)
            }
          >
            <img className={styles.buttonImage} src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainBanner;
