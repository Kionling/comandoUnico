import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col l6">
            <h1>Login</h1>
            <form>
                <label>Email</label>
              <input type="email"></input>
              <label>Password   </label>
              <input type="password"></input>
            </form>
          </div>
          <div className="col l6">
            <h1>Signup</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
