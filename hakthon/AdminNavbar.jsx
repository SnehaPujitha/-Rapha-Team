// AdminNavbar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const AdminNavbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Vehicle Management", path: "/admin/vehicles" },
    { label: "Bookings", path: "/admin/bookings" },
    { label: "CustomerManagement", path: "/admin/users" },
    { label: "Reports", path: "/admin/reports" },
    { label: "Notifications", path: "/admin/notifications" },
    { label: "Settings", path: "/admin/settings" },
    { label: "Logout", path: "/logout" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Admin Panel</div>
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

export default AdminNavbar;
