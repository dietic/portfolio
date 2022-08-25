import style from "./SocialNavbar.module.scss";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { Link } from "react-router-dom";

export const SocialNavbar = () => {
  return (
    <div className={style.container}>
      <div className={style.socialItem}>
        <a href="https://linkedin.com">
          <Icon path={mdiLinkedin} size={1.5}></Icon>
        </a>
      </div>
      <div className={style.socialItem}>
        <a href="https://linkedin.com">
          <Icon path={mdiGithub} size={1.5}></Icon>
        </a>
      </div>
      <div className={style.verticalDivider}></div>
    </div>
  );
};
