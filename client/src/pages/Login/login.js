import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/loginForm";
function Login() {
  return (
    <div id="loginBanner" className="row">
      <div className="container ">
        <div className="col s12 l12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default Login;
