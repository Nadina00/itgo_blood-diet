import css from "./Modal.module.css";
import { useSelector } from "react-redux";
import DailyCalorieIntake from "../DailyCalorieIntake/DailyCalorieIntake";
import { Header } from "../Header/Header";
import className from 'classnames'

export default function ModalIntake({ setIsOpen
 }) {
  const theme = useSelector((state) => state.theme)
  const onClick = () => {
    setIsOpen(false);
  };
 
  let modalBox = className(css.modal_box, theme === 'dark' ? css.dark : css.light)


  return (
    <div className={css.box} >
      <div className={modalBox}>
        <div className={css.header}>
          <Header />
        </div>
        <button className={css.btn_back} onClick={onClick}>
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </button>
        <button onClick={onClick} className={css.btn_backX}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_13001_132)">
              <path
                d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_13001_132">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <DailyCalorieIntake />
      </div>
    </div>
  );
}
