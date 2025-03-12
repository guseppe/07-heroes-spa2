import { useNavigate } from "react-router"

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () =>{
     navigate('/marvel',{ replace: true })
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

