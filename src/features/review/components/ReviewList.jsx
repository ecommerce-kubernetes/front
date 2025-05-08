import styles from "../../../pages/product/detail/ProductDetail.module.css";
import star from "../../../assets/images/star.svg";
import thumb from "../../../assets/images/thumb.svg";
const ReviewList = () => {
  return (
    <div className={styles.reviewListWrapper}>
      <div className={styles.reviewContentWrapper}>
        <div className={styles.reviewerWrapper}>
          <span className={styles.reviewerName}>최민식</span>
          <div className={styles.reviewRatingWrapper} style={{ gap: "5px" }}>
            <img style={{ width: "18px", height: "18px" }} src={star} />
            <span style={{ paddingTop: "5px", fontWeight: "bold" }}>4</span>
          </div>
          <span className={styles.reviewDate}>2025.05.02</span>
          <div className={styles.reviewProductName}>
            <span>청송사과</span>
          </div>
        </div>
        <div className={styles.reviewContent}>
          <p style={{ margin: "0" }}>맛있엇습니다</p>
        </div>
        <div className={styles.recommendBtnWrapper}>
          <button className={styles.recommendBtn}>
            <div className={styles.recommendBtnContent}>
              <img style={{ width: "18px", height: "18px" }} src={thumb} />
              <span>추천해요</span>
              <span>16</span>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.reviewContentWrapper}>
        <div className={styles.reviewerWrapper}>
          <span className={styles.reviewerName}>최민식</span>
          <div className={styles.reviewRatingWrapper} style={{ gap: "5px" }}>
            <img style={{ width: "18px", height: "18px" }} src={star} />
            <span style={{ paddingTop: "5px", fontWeight: "bold" }}>2</span>
          </div>
          <span className={styles.reviewDate}>2025.05.02</span>
          <div className={styles.reviewProductName}>
            <span>청송사과</span>
          </div>
        </div>
        <div className={styles.reviewContent}>
          <p style={{ margin: "0" }}>별론데용?</p>
        </div>
        <div className={styles.recommendBtnWrapper}>
          <button className={styles.recommendBtn}>
            <div className={styles.recommendBtnContent}>
              <img style={{ width: "18px", height: "18px" }} src={thumb} />
              <span>추천해요</span>
              <span>16</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
