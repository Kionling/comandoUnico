import React from "react";

function SignUp() {
  return (
    <div>
      <div className="row container center">
        <div className="card">
            <h1>Sign Up</h1>
            <form>
                <label className="left">Name:</label>
                <input type="text"></input>
                <label className="left">New Email:</label>
                <input type="email"></input>
                <label className="left">Set Password:</label>
                <input type="password"></input>
              </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp
