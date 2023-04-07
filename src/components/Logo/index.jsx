import css from "./logo.module.css";
import logo from "../../img/logo.png";


export const Logo = () => {

  return <img src={logo} alt="logo" width={46} height={44} className={css.logo} />
       

};
