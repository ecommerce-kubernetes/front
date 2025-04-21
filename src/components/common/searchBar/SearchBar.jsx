import styles from "./SearchBar.module.css";
import searchIcon from "../../../assets/images/search.svg";
const SearchBar = ({ placeholder }) => {
  return (
    <form>
      <div className={styles.container}>
        <input className={styles.searchInput} placeholder={placeholder} />
        <button className={styles.searchButton}>
          <img style={{ width: "25px" }} src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
