import SearchBar from "../common/searchBar/SearchBar";
import styles from "./Header.module.css";
import Logo from "../common/logo/Logo";
import UserNav from "./userNav/UserNav";
import AccountNav from "./accountNav/AccountNav";
import CategoryNav from "./categoryNav/CategoryNav";
import MainNav from "./mainNav/MainNav";

const Header = () => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.container}>
        <AccountNav />
        <div className={styles.topElement}>
          <div className={styles.logoSearchWrapper}>
            <Logo logoWidth={150} />
            <SearchBar />
          </div>
          <UserNav />
        </div>
        <div className={styles.bottomElement}>
          <CategoryNav />
          <MainNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
