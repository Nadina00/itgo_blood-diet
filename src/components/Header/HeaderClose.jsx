import logo2 from "../../img/logo2.png";
import css from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";


export const HeaderClose = () => {
  const location = useLocation()
  const backLink = location.state?.from ?? "/calculator"
  console.log(backLink)
  
  return (
    <div className={css.box_close}>
      <img
        src={logo2}
        alt="logo"
        width={160}
        height={44}
        className={css.logo2}
      />
      <Link className={css.btn_close} to={backLink}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_1348)">
            <path d="M6 6L18 18" stroke="#212121" stroke-width="2" />
            <path d="M6 18L18 6" stroke="#212121" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0_6_1348">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
};
