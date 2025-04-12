import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const { logged } = useContext(AuthContext);
  return (
     (logged) ?
     <Outlet/>: 
     <Navigate to ='/login'  />
  )
}
