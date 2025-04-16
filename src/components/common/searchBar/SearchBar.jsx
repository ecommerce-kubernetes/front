import styles from "./SearchBar.module.css";
import searchIcon from "../../../assets/images/search.svg";
const SearchBar = () => {
  return (
    <form>
      <div className={styles.container}>
        <input
          className={styles.searchInput}
          placeholder="상품을 검색해보세요"
        />
        <button className={styles.searchButton}>
          <img style={{ width: "25px" }} src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
