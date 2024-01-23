import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../shared/constants/links";
import Logo from "../../shared/ui/logo/Logo";
import styles from "./Sidebar.module.sass";
import ChevronIcon from "../../shared/ui/icons/chevron-icon";
import { useContext } from "react";
import { SidebarContext } from "../layout/Layout";
import avatar from "@images/avatar.png";

export default function Sidebar() {
  const { isOpen, toggle } = useContext(SidebarContext);

  return (
    <div className={`${styles.sidebar} ${isOpen && styles.show}`}>
      <div className={styles.sidebar__inner}>
        <div>
          <Logo />

          <nav className={styles.sidebar__nav}>
            {sidebarLinks.map((link) => (
              <NavLink
                onClick={toggle}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebar__nav__link} ${styles.active}`
                    : styles.sidebar__nav__link
                }
                key={link.path}
                to={link.path}
              >
                <div className={styles.sidebar__nav__link__inner}>
                  {link.icon()}
                  <span>{link.text}</span>
                </div>
                <ChevronIcon />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.account}>
          <div className={styles.account__image}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.account__inner}>
            <div className={styles.account__inner__name}>Evano</div>
            <div>Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}
