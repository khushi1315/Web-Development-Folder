import React from "react";
import "./login.css";
import loginImage from './textutil_LOGIN.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Image on Left */}
        <div className="login-left">
          <img
            src={loginImage}
            alt="Login Art"
            className="login-img"
          />
        </div>

        {/* Form on Right */}
        <div className="login-right">
          <h2>Welcome to TEXTUTILS </h2>

          <button className="login-btn google">Login with Google</button>
          <button className="login-btn linkedin">Login with LinkedIn</button>

          <div className="login-divider">OR</div>

          <input type="text" placeholder="Username or Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />

          <a href="#" className="login-link">I can't remember my login ID</a>

          <button className="login-submit">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
