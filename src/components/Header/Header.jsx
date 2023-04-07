import React from "react";
import {Logo} from "../Logo/index";
import {UserNavigation} from "../Navigation/index";
import css from './Header.module.css'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={css.box}>
      <Link to={"/"}>
      <Logo />
      </Link>
      <UserNavigation />
    </div>
  );
};
