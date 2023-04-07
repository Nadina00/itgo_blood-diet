import React, { useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/en-au";
import { useState } from "react";
import css from "./DailyDate.module.css";
import { useDispatch } from "react-redux";
import { setDate } from "../../redux/bloodDiet/bloodDiet-slice";


export const DailyData = () => {
  const [value, setValue] = useState(moment(new Date()));
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  
  const firstData = "February 21, 2022";
  const first = moment(firstData);
  const current = moment(new Date());

  const normalizeDate = (date) => {
    return `${date.format("YYYY.MM.DD")}Z`;
  };

  useEffect(() => {
    dispatch(setDate(normalizeDate(value)));
  }, [value, dispatch]);

  const onChange = (newValue) => {
    setIsOpen(false);
    console.log(newValue);
    if (newValue > current || newValue < first) {
      setValue(current);
      return;
    }
    setValue(newValue);
    
  };

  return (
    <div className={css.box}>
      <Datetime
        locale="en-au"
        onChange={onChange}
        value={value}
        closeOnSelect={true}
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        open={isOpen}
      />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={css.btn}
      >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 9H12V11H14V9Z" fill="#9B9FAA" />
          <path d="M10 9H8V11H10V9Z" fill="#9B9FAA" />
          <path d="M6.00008 9H4.00006V11H6.00008V9Z" fill="#9B9FAA" />
          <path
            d="M16 2.00001H15V0H13V2.00001H5.00001V0H3V2.00001H2.00001C0.890015 2.00001 0.0100313 2.90001 0.0100313 4.00003L0 18C0 19.1 0.890015 20 2.00001 20H16C17.1 20 18 19.1 18 18V3.99998C18 2.90001 17.1 2.00001 16 2.00001ZM16 18H2.00001V6.99998H16V18Z"
            fill="#9B9FAA"
          />
        </svg>
      </button>
    </div>
  );
};
