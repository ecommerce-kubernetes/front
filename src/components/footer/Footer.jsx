import Contact from "./contact/Contact";
import Description from "./description/Description";
import styles from "./Footer.module.css";
import Support from "./support/Support";
const Footer = () => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Description />
          <Support />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
