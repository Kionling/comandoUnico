import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/loginForm";
function Login() {
  return (
    <div>
      <h1 className="center bold750">Comando Unico</h1>
      <div className="center">
          <LoginForm />
          </div>
        
    </div>
  );
}
export default Login;
