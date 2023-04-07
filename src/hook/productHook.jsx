import { useSelector } from "react-redux";
import {selectItems,selectIsLoader, selectDailyCalories, selectIsLoggind} from "../redux/products/product-selector"

export const useProduct =  () =>{
    return{
        items:  useSelector(selectItems),
        isLoader: useSelector(selectIsLoader),
        dailyCalories: useSelector(selectDailyCalories),
        loggind: useSelector(selectIsLoggind)
    }
} 
