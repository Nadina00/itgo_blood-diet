import css from "./logo.module.css";
import logo2 from "../../img/logo2.png";



export const LogoCalculator = () => {
  return (
    <div className={css.box}>
      <img
        src={logo2}
        alt="logo"
        width={160}
        height={44}
        className={css.logo2}
      />
         </div>
  );
};
