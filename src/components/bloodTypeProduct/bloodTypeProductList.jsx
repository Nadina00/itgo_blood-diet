import React from "react";
import { BloodTypeProduct } from "./bloodTypeProduct";
import css from "./bloodType.module.css";
import { useProduct } from "../../hook/productHook";
import { Loader } from "../Loader/Loader";

export default function BloodTypeProductList() {
  const { items } = useProduct();
  const {isLoader} = useProduct();

  return (
    <div className={css.box}>
    <ol>
      {isLoader ? <Loader/> : (
        items.map((item) => (
          <li key={item._id} className={css.text}>
            <BloodTypeProduct item={item}/>
          </li>
        ))
      )}
    </ol>
    </div>
  );
}
