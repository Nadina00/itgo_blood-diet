import React from "react";
import { useState } from "react";
import ModalIntake from "../Modal/ModalIntake";
import css from "./DailyCaloriesForm.module.css";
import { Header } from "../Header/Header";
import { useAuth } from "../../hook/authHook";
import { useDispatch } from "react-redux";
import productOperations from "../../redux/products/products-operation";
import authOperations from "../../redux/auth/auth-operations";

export function DailyCaloriesForm() {
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [desiredWeight, setDesiredWeight] = useState("");
  const [blood, setBlood] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const { isLoggind } = useAuth();
  const dispatch = useDispatch();

  const handleChangeValue = (evt) => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "height":
        setHeight(value);
        break;
      case "age":
        setAge(value);
        break;
      case "currentWeight":
        setCurrentWeight(value);
        break;
      case "desiredWeight":
        setDesiredWeight(value);
        break;
      default:
        return;
    }
  };
  const handleChangeRadio = (evt) => {
    console.log(evt.target.value);
    setBlood(evt.target.value);
  };
  const reset = () => {
    setHeight("");
    setAge("");
    setCurrentWeight("");
    setDesiredWeight("");
    setBlood("");
  };


  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    localStorage.setItem("blood", blood);
    console.log({ height, age, currentWeight, desiredWeight, blood });
    dispatch(productOperations.productBloodType({ blood }));
    if (isLoggind){
      dispatch(
        authOperations.userDailyСalories({
          height,
          age,
          currentWeight,
          desiredWeight,
        })
      );
    }
    dispatch(
      productOperations.dailyСalories({
        height,
        age,
        currentWeight,
        desiredWeight,
      })
    );
    reset();
  };
 
  const onClickModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!isLoggind && <Header />}
      <div className={css.box}>
        <h2 className={css.title}>
          Calculate your daily calorie <br /> intake right now{" "}
        </h2>
        <form className={css.form} onSubmit={handleSubmitForm}>
          <div className={css.boxRadio}>
            <div className={css.formBox}>
              <label htmlFor="" className={css.label}>
                <input
                  type="text"
                  name="height"
                  placeholder="Height *"
                  className={css.input}
                  onChange={handleChangeValue}
                  required
                  value={height}
                />
              </label>
              <label htmlFor="" className={css.label}>
                <input
                  type="text"
                  name="age"
                  placeholder="Age *"
                  className={css.input}
                  onChange={handleChangeValue}
                  required
                  value={age}
                />
              </label>
              <label htmlFor="" className={css.label}>
                <input
                  type="text"
                  name="currentWeight"
                  placeholder="Current weight * "
                  className={css.input}
                  onChange={handleChangeValue}
                  required
                  value={currentWeight}
                />
              </label>
              <label htmlFor="" className={css.label}>
                <input
                  type="text"
                  name="desiredWeight"
                  placeholder="Desired weight *"
                  className={css.input}
                  onChange={handleChangeValue}
                  required
                  value={desiredWeight}
                />
              </label>
            </div>

            <h3 className={css.text}> Blood type *</h3>
            <label htmlFor="" className={css.label_radio}>
              <input
                type="radio"
                name="bloodType"
                value={1}
                onChange={handleChangeRadio}
              />
              1
            </label>
            <label htmlFor="" className={css.label_radio}>
              <input
                type="radio"
                name="bloodType"
                value={2}
                onChange={handleChangeRadio}
              />
              2
            </label>
            <label htmlFor="" className={css.label_radio}>
              <input
                type="radio"
                name="bloodType"
                value={3}
                onChange={handleChangeRadio}
              />
              3
            </label>
            <label htmlFor="" className={css.label_radio}>
              <input
                type="radio"
                name="bloodType"
                value={4}
                onChange={handleChangeRadio}
              />
              4
            </label>
          </div>
          <button
            type="submit"
            className={css.button}
            onClick={onClickModal}
            disabled={!(height && age && currentWeight && desiredWeight )}
          >
            Start losing weight
          </button>

          {isOpen && !isLoggind && <ModalIntake setIsOpen={setIsOpen} />}
        </form>
      </div>
    </>
  );
}
