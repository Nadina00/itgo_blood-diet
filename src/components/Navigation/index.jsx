import React from "react";
import css from "./navigation.module.css"
import { Link } from "react-router-dom";
import cn from 'classnames'
import { useSelector } from "react-redux";

let className = css.text
 className += " " + css.log

 


export const UserNavigation = () => {

  const theme = useSelector((state) => state.theme)
  let logText = cn(className, theme === 'dark' ? css.dark : css.light)
  let registerText = cn(css.text, theme === 'dark' ? css.dark : css.light)
  
  return (
    <div className={css.box}>
      <Link className={logText} to={"/login"}> log in </Link>
      <Link className={registerText} to={"/register"}> Registration</Link>
    </div>
  );
};
