import Logo from "../../common/logo/Logo";
import styles from "./Description.module.css";
const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo logoWidth={100} />
        <div>
          <p className={styles.description}>
            신선한 식품과, 트랜디한 의류, 전자기기등등 여러 상품을 판매하는
            BuyNest 입니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
