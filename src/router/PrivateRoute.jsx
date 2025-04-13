import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, Outlet} from "react-router";

export const PrivateRoute = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
     (loggedIn) ?
     <Outlet/>: 
     <Navigate to ='/login'  />
  )
}
