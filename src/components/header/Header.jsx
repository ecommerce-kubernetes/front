import SearchBar from "../common/SearchBar";
import styles from "./Header.module.css";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topElement}>
        <Logo logoWidth={100} />
        <SearchBar />
        <div>sadfasd</div>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
