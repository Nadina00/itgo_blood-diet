import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";
import { Header } from "../Header/Header";
import { useAuth } from "../../hook/authHook";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./RegistorForm.module.css";

export default function RegistorForm({ onSubmit }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const { error } = useAuth();
  console.log({error});

  const handleChangeValue = (evt) => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleClick = (evt) => {
    evt.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    let blood = localStorage.getItem("blood");
    let dailyCalories = localStorage.getItem("dailyCalories");
    dispatch(
      authOperations.register({ name, email, password, blood, dailyCalories })
    );
    notify();
    reset();
  };
  const reset = () => {
    setEmail("");
    setPassword("");
    localStorage.clear();
  };
  const notify = () => {
   if(error === true){
      toast.error("Email is already in use", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className={css.box}>
      <Header />
      <h2 className={css.title}> Register</h2>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <label htmlFor="" className={css.label}>
          <input
            type="name"
            placeholder="Name *"
            name="name"
            className={css.input}
            onChange={handleChangeValue}
            required
            value={name}
          />
        </label>
        <label htmlFor="" className={css.label}>
          <input
            type="email"
            placeholder="Email *"
            name="email"
            className={css.input}
            onChange={handleChangeValue}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-z]{2,3}$"
            required
            value={email}
          />
        </label>
        <label htmlFor="" className={css.label}>
        <div className={css.boxPassword}>
          <input
            type={type}
            placeholder="Password *"
            name="password"
            className={css.input}
            onChange={handleChangeValue}
            required
            value={password}
          />
            <button onClick={handleClick} className={css.btnShow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9C10.358 9 9 10.359 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
                  fill="grey"
                />
                <path
                  d="M12 5C4.408 5 2.12632 11.617 2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5ZM12 17C6.67774 17 4.61587 13.154 4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17Z"
                  fill="grey"
                />
              </svg>
            </button>
            </div>
        </label>
        <div className={css.box_btn}>
          <button
            type="submit"
            className={css.button}
            disabled={!(name && email && password)}
           
          >
            Register
          </button>
          <div className={css.box_link}>
            <Link to={"/login"} className={css.link}>
              Log in
            </Link>
          </div>
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
  );
}
