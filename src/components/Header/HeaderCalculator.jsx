import { LogoCalculator } from "../Logo/LogoCalculator";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/authHook";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import cn from 'classnames'
import { useSelector } from "react-redux";

export const HeaderCalculator = () => {
  const theme = useSelector((state) => state.theme)
  let header_box = cn(css.boxHeader, theme === 'dark' ? css.dark : css.light)
  let btnHeader = cn(css.buttonHeader, theme === 'dark' ? css.dark : css.light)
  let linkHeader = cn(css.link, theme === 'dark' ? css.dark : css.light)

  const { user, isLoggind } = useAuth();
  const dispatch = useDispatch()

  const onClick = () =>{
    dispatch(authOperations.logOut())
  }

  return (
    <div className={css.box}>
       <LogoCalculator />
      {isLoggind &&  (
      <div>
      <div className={header_box}>
        <p className={css.textHeader}>{user.name}</p>
        <button className={btnHeader} type="button" onClick={onClick} >Exit</button>
      </div>
      <div className={css.boxLink}>
      <Link to={"/diary"} className={linkHeader}> Diary</Link>
      <Link to={"/calculator"} className={linkHeader}> Calculator</Link>
    </div>
    </div>)}
      <Link className={css.menu} to={"/modal"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_12701_554)">
            <path
              d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
              fill="#212121"
            />
          </g>
          <defs>
            <clipPath id="clip0_12701_554">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
     
    </div>
  );
};
