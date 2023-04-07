import React from "react";
import { Link } from "react-router-dom";
import { HeaderClose } from "../Header/HeaderClose";
import css from "./Diary.module.css"

export const Diary = () => {
  return (
    <div>
      <HeaderClose />
      <div className={css.box}>
        <Link to={"/diary"} className={css.link}> Diary</Link>
        <Link to={"/calculator"} className={css.link}> Calculator</Link>
      </div>
    </div>
  );
};
