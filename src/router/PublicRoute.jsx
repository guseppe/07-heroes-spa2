
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const loggedIn = localStorage.getItem('user') != null ? true: false;
  return (
       (!loggedIn) ? <Outlet/> : <Navigate to='/marvel'/> 
  )
}
