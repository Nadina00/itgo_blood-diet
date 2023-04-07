import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegistrationPage";
import DiaryPage from "../pages/DiaryPage";
import CalculatorPage from "../pages/CalculatorPage";
import AddProduct from "../pages/AddProductPage";
import ModalNavPage from "../pages/ModalNavPage";
import { Loader } from "./Loader/Loader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import authOperations from "../redux/auth/auth-operations";
import PriveRoute from "../routes/PrivatRoute";
import PublicRoute from "../routes/PublicRouter";
import { useAuth } from "../hook/authHook";
import Layout from './Layout/index'


function App() {
  const {isRefreshing} = useAuth()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (

    <div className="App">

       {isRefreshing ? (
        <Loader />
      ) :(
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/diary" restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/diary" restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/diary"
          element={
            <PriveRoute>
              <DiaryPage />
            </PriveRoute>
          }
        />
        <Route
          path="/addproduct"
          element={
            <PriveRoute>
              <AddProduct />
            </PriveRoute>
          }
        />
        <Route
          path="/calculator"
          element={
            <PriveRoute>
              <CalculatorPage />
            </PriveRoute>
          }
        />
        <Route path="/modal" element={<ModalNavPage />} />
        </Route>
      </Routes>)}
          <ToastContainer />
    </div>

  );
}

export default App;
