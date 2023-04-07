import DairyProductList from "../components/DiaryProductsList/DiaryProductList"
import { useAuth } from "../hook/authHook"

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) =>{
    const {isLoggind} = useAuth()
    const shouldRedirect = isLoggind && restricted
    return shouldRedirect ? <DairyProductList to={redirectTo} /> : children
}

export default PublicRoute