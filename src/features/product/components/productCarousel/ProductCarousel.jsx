import Product from "../../../../components/common/product/Product";
import styles from "./ProductCarousel.module.css";
import arrow from "../../../../assets/images/arrow.svg";
import { useRef } from "react";
const ProductCarousel = ({ title, productList }) => {
  const viewportRef = useRef(null);
  const swiperRef = useRef(null);

  const scrollByPage = (direction) => {
    const viewport = viewportRef.current;
    const track = swiperRef.current;
    if (!viewport || !track) return;

    const cards = track.children;
    if (cards.length === 0) return;
    const firstCard = cards[0];
    const style = window.getComputedStyle(firstCard);
    const marginRight = parseInt(style.marginRight, 10);
    const cardWidth = firstCard.offsetWidth + marginRight;
    const visibleCount = Math.floor(viewport.offsetWidth / cardWidth) + 1 || 1;
    const scrollAmount = visibleCount * cardWidth;
    track.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.swiperContainer}>
        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.swiperTrack} ref={swiperRef}>
            <Product product={productList[1]} key={1} size="sm" />
            <Product product={productList[1]} key={2} size="sm" />
            <Product product={productList[1]} key={3} size="sm" />
            <Product product={productList[1]} key={4} size="sm" />
            <Product product={productList[0]} key={5} size="sm" />
            <Product product={productList[0]} key={6} size="sm" />
            <Product product={productList[0]} key={7} size="sm" />
            <Product product={productList[0]} key={8} size="sm" />
          </div>
        </div>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={() => scrollByPage("prev")}
        >
          <img src={arrow} className={styles.arrowImage} draggable="false" />
        </button>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={() => scrollByPage("next")}
        >
          <img src={arrow} className={styles.arrowImage} draggable="false" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
