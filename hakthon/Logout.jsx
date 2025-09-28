// Logout.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUserRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session or role
    setUserRole(null);

    // Optionally clear tokens or localStorage
    // localStorage.removeItem("authToken");

    // Redirect to login after 1 second
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate, setUserRole]);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Logging out...</h2>
      <p>Redirecting to login page.</p>
    </div>
  );
};

export default Logout;
