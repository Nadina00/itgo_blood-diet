import React from "react";
import { BloodTypeProduct } from "../bloodTypeProduct/bloodTypeProduct";
import css from "../bloodTypeProduct/bloodType.module.css";



export default function AddProductsList({ items }) {
  
  console.log(items);

  return (
    <div className={css.box}>
      <ol>
        {(
          items.map((item) => (
            <li key={item._id} className={css.text}>
              <BloodTypeProduct item={item} />
            </li>
          ))
        )}
      </ol>
    </div>
  );
}
