import {DailyCaloriesForm} from "../components/DailyCaloriesForm/DailyCaloriesForm"
import { useAuth } from "../hook/authHook"

const PriveRoutes = ({ children, redirectTo = '/' }) =>{
    const {isLoggind, isRefreshing} = useAuth()
    const shouldRedirect = !isLoggind && !isRefreshing
    return shouldRedirect ? <DailyCaloriesForm to={redirectTo}/> : children
}
export default PriveRoutes