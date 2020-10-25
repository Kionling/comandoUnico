import React from "react";
import { Link } from "react-router-dom";
import LoginFormStyles from "../LoginForm/loginForm.css";
import Banner from "./assets/mockBanner.gif";
function LoginForm() {
  return (
    <div className="container row center">
      <div className=" card #37474f blue-grey darken-3 col s6" id="loginCard">
        <div className="row ">
          <div className="col s12 ">
            <div>
              <h1 id="loginTitle" className="bold750 white-text">
                Login
              </h1>
            </div>
            <div>
              <form>
                <label className="white-text">Email address</label>
                <input type="text" className="white-text" placeholder="Email"></input>
                <label className="white-text">Password</label>
                <input type="password" className="white-text" placeholder="Password"></input>
                <button className="btn #37474f blue-grey darken-3" id="loginButton">Login</button>
              </form>
            </div>
           <p className="white-text"> Don't have an account? Create an account <Link to="/signup">here.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
