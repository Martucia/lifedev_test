import LogoIcon from "../icons/logo-icon";
import styles from "./Logo.module.sass";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <div className={styles.logo__inner}>
        <span>Dashboard</span>
        <span className={styles.version}>v.01</span>
      </div>
    </div>
  );
}
