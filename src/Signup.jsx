import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Signup failed! " + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="log">Create an Account</h2>
        <form className="login-form" onSubmit={handleSignup}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <i className="material-symbols-rounded">person</i>
          </div>
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
              type="password"
              placeholder="Password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="material-symbols-rounded">lock</i>
          </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
