// PassengerNavbar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const PassengerNavbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Search Vehicles", path: "/search" },
    { label: "Customer Status", path: "/customer-status" },
    { label: "Book Vehicle", path: "/book-vehicle" },
    { label: "My Bookings", path: "/my-bookings" },
    { label: "Alerts", path: "/alerts" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">VahanBazar</div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PassengerNavbar;
