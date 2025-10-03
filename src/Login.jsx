import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./Sign.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);

        // Save token + role in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Navigate based on role
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      alert("Login failed! " + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="log">Log in with</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="material-symbols-rounded">mail</i>
          </div>

          <div className="input-wrapper">
            <input
              type={isPasswordShown ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="material-symbols-rounded">lock</i>
            <i
              className="material-symbols-rounded eye-icon"
              onClick={() => setIsPasswordShown((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              {isPasswordShown ? "visibility" : "visibility_off"}
            </i>
          </div>

          <p><a href="">Forgot Password ?</a></p>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p className="or">----------or----------</p>

        <div className="social-login">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google login success:", credentialResponse);
              alert("✅ Google Login Successful!");
              navigate("/user");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <p className="signup-text" style={{ color: "white" }}>
          Don't have an account?{" "}
          <button className="link-button" onClick={() => navigate("/signup")}>
            Signup now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
