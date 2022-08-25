import { Link } from "react-router-dom";

import darkLogo from "../../assets/images/dark_theme_logo.png";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <img src={darkLogo} alt="" />
      </div>
      <div className={style.navItems}>
        <div className={style.navItem}>
          <Link to="/">Home</Link>
        </div>
        <div className={style.navItem}>
          <Link to="/">About me</Link>
        </div>
        <div className={style.navItem}>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
