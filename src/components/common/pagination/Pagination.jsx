import styles from "./Pagination.module.css";
import arrow from "../../../assets/images/arrow.svg";
const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button>
          <img
            style={{
              width: "12px",
              height: "12px",
              transform: "rotate(180deg)",
            }}
            src={arrow}
          />
        </button>
        <button className={styles.selected}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>...</button>
        <button>29</button>
        <button>
          <img style={{ width: "12px", height: "12px" }} src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
