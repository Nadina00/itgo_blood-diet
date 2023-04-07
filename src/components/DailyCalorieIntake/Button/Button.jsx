import React from "react";
import css from "./Button.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import authOperations from "../../../redux/auth/auth-operations";
import { useAuth } from "../../../hook/authHook";
import cn from 'classnames'
import { useSelector } from "react-redux"

export const Button = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/diary";
  const dispatch = useDispatch();
  const { user } = useAuth();
  const theme = useSelector((state) => state.theme)
  let themeText = cn(css.text, theme === 'dark' ? css.dark : css.light)

  const onClick = () => {
    console.log('click')
    dispatch(authOperations.logOut());
  };
  return (
    <div className={css.box}>
      <Link className={css.btn_back} to={backLinkHref}>
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </Link>
      <div className={css.box_btn}>
        <p className={themeText}>{user.name}</p>
        <button className={css.button} type="buttom" onClick={onClick}>
          Exit
        </button>
      </div>
    </div>
  );
};
