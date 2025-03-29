import Link from "next/link";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.titleLink}>
        <h1 className={styles.title}>Gunnar Asplund</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
