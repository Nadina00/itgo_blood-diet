import React from "react";
import { HeaderCalculator } from "../Header/HeaderCalculator";
import { DailyCaloriesForm } from "../DailyCaloriesForm/DailyCaloriesForm";
import SideBar from "../SideBar/SideBar";
import { Button } from "../DailyCalorieIntake/Button/Button";
import css from "./CalculatorСalorieForm.module.css"


export function CalculatorСalorieForm({ onSubmit }) {

  return (
    <div>
       <div className={css.boxSide}>
        <div>
      <HeaderCalculator />
      <Button />  
      <DailyCaloriesForm />
      </div>
      <SideBar />
      </div>
    </div>
  );
}
