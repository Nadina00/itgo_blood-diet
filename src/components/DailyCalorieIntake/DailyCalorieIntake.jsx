import React from "react";
import css from "./DailyCalorieIntake.module.css";
import BloodTypeProductList from "../bloodTypeProduct/bloodTypeProductList";
import { Link } from "react-router-dom";
import { useProduct } from "../../hook/productHook";
import {Loader} from "../Loader/Loader"
import className from 'classnames'
import { useSelector } from "react-redux";

export default function DailyCalorieIntake({products}) {

  const {dailyCalories, isLoader} = useProduct()
  localStorage.setItem('dailyCalories', dailyCalories);
  const theme = useSelector((state) => state.theme)
  let numberMod = className(css.number, theme === 'dark' ? css.dark : css.light)
  
  return (
    <div>
      <h2 className={css.title}>Your recommended daily calorie intake is</h2>
      <p className={numberMod}>{dailyCalories} ккал</p>
      <p className={css.text}>Foods you should not eat</p>
{isLoader ? <Loader  className={css.loader}/> : 
      <BloodTypeProductList products={products} className={css.list}/>}

      <Link className={css.button} to={"/register"}>Start losing weight</Link>
    </div>
  );
}
