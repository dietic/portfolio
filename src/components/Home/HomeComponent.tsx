import style from "./HomeComponent.module.scss";
import { SocialNavbar } from "../../elements/SocialNavbar/SocialNavbar";

export const HomeComponent = () => {
  return (
    <div className={style.container}>
      <SocialNavbar />
      <div className={style.innerContainer}>
        <div className={style.mainText}>
          <h3>Hi šš¼, my name is</h3>{" "}
          <h1>
            Diego Rios. <span>I enjoy building things.</span>
          </h1>
          <p>
            Iām a software engineer specialized in building digital experiences
            with lots of experience in digital marketing and unlimited desire to
            learn.
          </p>
          <p>
            Currently, Iām focused on contacting aliens šø to see what else is
            there to learn.
          </p>
        </div>
      </div>
    </div>
  );
};
