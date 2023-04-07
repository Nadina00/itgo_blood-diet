import { useSelector } from "react-redux";
import {
  selectIsLoggind,
  selectIsRefreshing,
  selectToken,
  selectUser,
  selectDailyCalories,
  selectIsLoader,
  selectError
} from "../redux/auth/auth-selector";


export const useAuth = () => {
    return {
      user: useSelector(selectUser),
      token: useSelector(selectToken),
      isLoggind: useSelector(selectIsLoggind),
      isRefreshing: useSelector(selectIsRefreshing),
      dailyCalories: useSelector(selectDailyCalories), 
      isLoader: useSelector(selectIsLoader),
      error: useSelector(selectError)

    };
  };
  

