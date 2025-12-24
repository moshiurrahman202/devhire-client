import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="text-center"><span className="loading loading-dots loading-xl"></span></div>
    }
    if(!user){
       return <Navigate to="/signin" state={location.pathname}></Navigate>
    }
    return children;
};
export default PrivateRoute;