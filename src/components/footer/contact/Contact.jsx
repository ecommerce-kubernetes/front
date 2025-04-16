import styles from "./Contact.module.css";
import github from "../../../assets/images/github.svg";
import youtube from "../../../assets/images/youtube.svg";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Contact</span>
        <ul>
          <li>
            <a href="https://github.com/ecommerce-kubernetes/front">
              <img src={github} style={{ width: "32px" }} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={youtube} style={{ width: "32px" }} />
            </a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
