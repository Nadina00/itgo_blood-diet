import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DiaryProductItem } from "./DiaryProductItem";
import css from "./DairyProductItem.module.css";
import SideBar from "../SideBar/SideBar";
import { HeaderCalculator } from "../Header/HeaderCalculator";
import { Button } from "../DailyCalorieIntake/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import productOperations from "../../redux/products/products-operation";
import bloodDietOperations from "../../redux/bloodDiet/bloodDiet-operation";
import { DailyData } from "../DailyDate/DailyDate";
import { useBloodDiet } from "../../hook/bloodDietHook";
import { selectProducts } from "../../redux/bloodDiet/bloodDiet-selector";

export default function DairyProductList() {
 
  const dispatch = useDispatch();
  const { date, isLoader } = useBloodDiet();
  const products = useSelector(selectProducts)
    
   const addClick = () => {
    dispatch(productOperations.productList());
  };
  useEffect(() => {
   dispatch(bloodDietOperations.getDateBloodProduct(date)); 
   console.log("click")
    }, [date, dispatch]);


  return (
    <div>
     
      <div className={css.boxSide}>
        <div className={css.boxLeft}>
        <HeaderCalculator />
      <Button />
      <div className={css.time}>
      <DailyData />
      </div>
      <ul className={css.list}>
        {isLoader && <Loader />}
        {products.length ? (
         products.map((product) => (
            <li key={product._id}>
              <DiaryProductItem product={product} />
            </li>
          ))
        ) : (
          <p>No products found for this date</p>
        )}
      </ul>

      <div className={css.box_btn}>
        <Link to={"/addproduct"} className={css.button_add} onClick={addClick}>
          +
        </Link>
      </div>
      </div>
     <SideBar  />
         </div>
         </div>
  );
}
