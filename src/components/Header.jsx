import styles from "../styles/header.module.scss";
import { GiBatMask } from "react-icons/gi";
import { FaSearch, FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <header role="banner">
      <a aria-label="Tonight In Gotham" href="#" className={styles.headerSvg}>
        <GiBatMask />
      </a>
      <nav
        role="navigation"
        aria-label="main navigation"
        className={styles.mainNav}
      >
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Story</a>
          </li>
          <li>
            <a href="#">Villains</a>
          </li>
          <li>
            <a href="#">Gadgets</a>
          </li>
        </ul>
      </nav>
      <form action="" role="search">
        <label htmlFor="search" className={styles.srOnly}>
          Search
        </label>
        <FaSearch />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
      </form>
      <div className={styles.dropdownMenu} aria-label="profile">
        <div className={styles.menuHeader}>
          <GiBatMask />
          <p>
            <a
              href="#"
              className={styles.dropdownLink}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Batman</span>
              <FaChevronDown />
            </a>
          </p>
        </div>
        <ul className={styles.dropdownList}>
          <li>
            <a href="#"> My villians</a>
          </li>
          <li>
            <a href="#">My gadgets</a>
          </li>
          <li>
            <a href="#"> Switch profile</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
