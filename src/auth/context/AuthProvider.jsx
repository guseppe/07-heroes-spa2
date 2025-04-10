import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
const initialState = {
    loggedIn: false,
}
export const AuthProvider = ({ children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
     <AuthContext.Provider value={{}}>
         { children }
     </AuthContext.Provider>
  )
}
