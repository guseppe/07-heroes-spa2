import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { types } from "../types/type"
const initialState = {
    loggedIn: false,
}
export const AuthProvider = ({ children}) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);
  const login = (name ='')=>{
    const action = {
      type: types.login,
      payload: {
        id:'abc',
        name: name,
      }
    }
    dispatch(action);
  }
  return (
     <AuthContext.Provider value={{
      ...authState, 
      login: login
     }}>
         { children }
     </AuthContext.Provider>
  )
}
