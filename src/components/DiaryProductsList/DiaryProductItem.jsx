import React from "react";
import { useDispatch } from "react-redux";
import css from "./DairyProductItem.module.css";
import { useBloodDiet } from "../../hook/bloodDietHook";
import bloodDietOperations from "../../redux/bloodDiet/bloodDiet-operation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DiaryProductItem = ({ product }) => {
  const {error} = useBloodDiet()
  const dispatch = useDispatch();
 
  const onClick = (evt) => {
    console.log(product._id)
    dispatch(bloodDietOperations.deleteBloodProduct(product._id));
    notify()
  };
  const baseCal = (product.weight * product.baseCaloriti) / 100

  const notify = () => {
    if (!error) {
    toast.success("Successfully! Product removed", {
      position: toast.POSITION.TOP_CENTER,
    });
  } else
  toast.error("Product not removed", {
    position: toast.POSITION.TOP_CENTER,
  });

}

  return (
    <div className={css.box}>
      <h2 className={css.title}> {product.product}</h2>
      <p className={css.title}>{product.weight} g</p>
      <p className={css.title}>{baseCal} kcal</p>
      <button className={css.button} type="button" onClick={onClick}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L10.8258 11" stroke="#9B9FAA" stroke-width="2" />
          <path d="M1 11L10.8258 1" stroke="#9B9FAA" stroke-width="2" />
        </svg>
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
