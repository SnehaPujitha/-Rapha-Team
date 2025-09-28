// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = ({ setUserRole }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock users for demo purpose
  const mockUsers = [
    { username: "passenger1", password: "pass123", role: "passenger" },
    { username: "admin1", password: "admin123", role: "admin" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const user = mockUsers.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      setUserRole(user.role);
      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <div className="form-group">
          <label htmlFor="username">Username *</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="cta-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
