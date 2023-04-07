import React, { useEffect, useState } from "react";
import Select from "react-select";
import { HeaderCalculator } from "../Header/HeaderCalculator";
import { Button } from "../DailyCalorieIntake/Button/Button";
import css from "./AddProducts.module.css";
import { useProduct } from "../../hook/productHook";
import { useDispatch } from "react-redux";
import bloodDietOperations from "../../redux/bloodDiet/bloodDiet-operation";
import { useBloodDiet } from "../../hook/bloodDietHook";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader_min";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProdycts() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");
  const { items, loggind } = useProduct();
  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const { date, error } = useBloodDiet();
  const { isLoader } = useProduct();

  console.log(items);

  const handleChange = (inputValue) => {
    setSelectedOption(inputValue);
  };

  useEffect(() => {
    if (!items) {
      return;
    }
    const result = items.map((item) => ({
      value: item?._id,
      label: item?.title.ua,
    }));
    setOptions(result);
  }, [items]);

  console.log(selectedOption);
  const onChange = (evt) => {
    evt.preventDefault();
    console.log(evt.target.value);
    setWeight(evt.target.value);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    if (!date) {
      console.log("not date");
      return;
    }
    if (!selectedOption && !weight) {
      console.log("not selectedOption, weight");
      return;
    }
    if (loggind) {
      const newProduct = {
        date,
        product: selectedOption.label,
        weight: Number(weight),
        baseCaloriti: items.filter(
          (item) => item.title.ua === selectedOption.label
        )[0].calories,
      };
      console.log(newProduct);
      dispatch(bloodDietOperations.addBloodDietProduct(newProduct));
      setItem("");
      setWeight("");
      setSelectedOption("");
      setOptions([]);
    }
  };

 const notify = () => {
      if (!error) {
      toast.success("Successfully! Product added", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else
    toast.error("Product not added", {
      position: toast.POSITION.TOP_CENTER,
    });

  }

  return (
    <div>
      <HeaderCalculator />
      <Button />
          <div className={css.box}>
        <form>
          <div className={css.box_form}>
            <Select
              required
              options={options}
              onChange={handleChange}
              inputValue={item}
              value={selectedOption}
              onInputChange={setItem}
              placeholder={isLoader ? <Loader weight={35} height={35}/> : "Enter product name"}
              className={css.text}
            />
            <label htmlFor="">
              <input
                type="number"
                placeholder="Grams"
                name="grams"
                className={css.input}
                onChange={onChange}
                value={weight}
              />
            </label>
          </div>
          <div className={css.btn}>
          <button className={css.button} onClick={handleClick}>
            <Link to={"/diary"} className={css.link} onClick={notify}>
              Add
            </Link>
         </button>
         <button className={css.buttonX} >
            <Link to={"/diary"} className={css.link}>
              Back
            </Link>
            </button>
            </div>
        </form>
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
    </div>
  );
}
