import SearchBar from "../common/searchBar/SearchBar";
import styles from "./Header.module.css";
import Logo from "../common/logo/Logo";
import UserNav from "./userNav/UserNav";
import AccountNav from "./accountNav/AccountNav";

const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <AccountNav />
        <div className={styles.topElement}>
          <div className={styles.logoSearchWrapper}>
            <Logo logoWidth={150} />
            <SearchBar />
          </div>
          <UserNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
