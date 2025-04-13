import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext( AuthContext)
  const onLogin = () =>{
    login('Guseppe Rodriguez');
     const lastPath = localStorage.getItem('lastPath') || '/';
     navigate(lastPath,{ replace: true })
     window.location.reload();
  }
  return (
    <div className="container">
      <h1>
        LoginPage
      </h1>
      <button 
      onClick={onLogin}
      className="btn btn-primary">
          Login
      </button>
    </div>
  )
}

