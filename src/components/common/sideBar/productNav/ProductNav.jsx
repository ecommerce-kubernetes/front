import { Link } from "react-router-dom";
import styles from "./ProductNav.module.css";
import { useState } from "react";
import ToggleRadio from "../../radio/ToggleRadio";
import star from "../../../../assets/images/star.svg";
import grayStar from "../../../../assets/images/empty-star.svg";

const priceOptions = [
  { id: "p1", label: "4000원 이하", value: "under_4000" },
  { id: "p2", label: "4000원 ~ 만원", value: "4000_to_10000" },
  { id: "p3", label: "만원 이상", value: "above_10000" },
];

const ratings = [
  { id: "r1", label: "5점", value: "5" },
  { id: "r2", label: "4점", value: "4" },
  { id: "r3", label: "3점", value: "3" },
  { id: "r4", label: "2점", value: "2" },
  { id: "r5", label: "1점", value: "1" },
];

const RatingLabel = ({ rating, label }) => {
  const fillStar = Array.from({ length: rating }, (_, i) => (
    <img style={{ width: "12px", height: "12px" }} key={i} src={star} />
  ));
  const emptyStar = Array.from({ length: 5 - rating }, (_, i) => (
    <img style={{ width: "12px", height: "12px" }} key={i} src={grayStar} />
  ));

  return (
    <div className={styles.ratingLabelWrapper}>
      <div className={styles.starWrapper}>
        {fillStar} {emptyStar}
      </div>
      <span style={{ paddingTop: "2px" }}>{label}</span>
    </div>
  );
};

const ProductNav = ({ categoryId }) => {
  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedRating, setSelectedRating] = useState();
  const handlePriceClick = (value) => {
    setSelectedPrice((prev) => (prev === value ? null : value));
  };

  const handleRatingClick = (value) => {
    setSelectedRating((prev) => (prev === value ? null : value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tagWrapper}>
          <span className={styles.tagHead}>카테고리</span>
          <ul className={`${styles.tagUlWrapper} ${styles.subCategory}`}>
            <li>
              <Link className={styles.link}>반찬</Link>
            </li>
            <li>
              <Link className={styles.link}>음료</Link>
            </li>
            <li>
              <Link className={styles.link}>조미료</Link>
            </li>
            <li>
              <Link className={styles.link}>과일</Link>
            </li>
            <li>
              <Link className={styles.link}>쌀</Link>
            </li>
            <li>
              <Link className={styles.link}>소스</Link>
            </li>
          </ul>
        </div>

        <div className={styles.tagWrapper}>
          <span className={styles.tagHead}>가격</span>
          <ul className={`${styles.tagUlWrapper}`}>
            {priceOptions.map((opt) => (
              <li key={opt.id}>
                <ToggleRadio
                  name="price"
                  value={opt.value}
                  checked={selectedPrice === opt.value}
                  onClick={handlePriceClick}
                >
                  <span>{opt.label}</span>
                </ToggleRadio>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tagWrapper}>
          <span className={styles.tagHead}>평점</span>
          <ul className={`${styles.tagUlWrapper}`}>
            {ratings.map((opt) => (
              <li key={opt.id}>
                <ToggleRadio
                  name="rating"
                  value={opt.value}
                  checked={selectedRating === opt.value}
                  onClick={handleRatingClick}
                >
                  <RatingLabel rating={opt.value} label={opt.label} />
                </ToggleRadio>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductNav;
