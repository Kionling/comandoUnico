import React from "react";
import { Link } from "react-router-dom";
import LoginFormStyles from "../LoginForm/loginForm.css";
import Banner from "./assets/mockBanner.gif";
function LoginForm() {
  return (
    <div>
    <div className="card container" id="loginCard">
      <div className="container center">
        <h1 className="bold750">Login</h1>
        <form>
          <label className="left">Email:</label>
          <input placeholder="Email" type="email"></input>
          <br></br>
          <br></br>
          <br></br>
          <label className="left">Password:</label>
          <input placeholder="Password" type="password"></input>
        </form>
        <div className="row">
          <p>This is only for Grupo Members.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
