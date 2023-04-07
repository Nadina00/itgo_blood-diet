import { useSelector } from "react-redux";
import {selectDate, selectProducts, selectIsLogging, selectIsLoader, selectError} from "../redux/bloodDiet/bloodDiet-selector"

export const useBloodDiet = () =>{
        return{
        date: useSelector(selectDate),
        products: useSelector(selectProducts),
        isLogging: useSelector(selectIsLogging),
        isLoader: useSelector(selectIsLoader),
        error: useSelector(selectError)
            }
}