import { useContext } from "react";
import styles from "./Header.module.sass";
import { SidebarContext } from "../layout/Layout";


export default function Header() {
  const { toggle, isOpen } = useContext(SidebarContext);

  return (
    <header className={styles.header}>
      <span>Hello Evano 👋🏼</span>
      <div className={`${styles.hamburger} ${isOpen && styles.open}`} onClick={toggle}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </header>
  );
}
