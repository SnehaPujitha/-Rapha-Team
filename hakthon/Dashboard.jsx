// Dashboard.jsx

import React from "react";
import "./styles.css";

const Dashboard = () => {
  const stats = [
    { label: "Total Vehicles", value: 128, color: "#003366" },
    { label: "Active Bookings", value: 872, color: "#007bff" },
    { label: "Registered Customers", value: 435, color: "#28a745" },
    { label: "Delayed Vehicles", value: 4, color: "#ffc107" },
    { label: "Cancelled Vehicles", value: 2, color: "#dc3545" },
  ];

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-grid">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{ borderLeft: `6px solid ${stat.color}` }}
          >
            <div className="card-icon">{stat.icon}</div>
            <div className="card-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-note">
        <p><strong>Tip:</strong> Use the admin navigation above to manage vehicles, customers, bookings, or send alerts.</p>
      </div>
    </div>
  );
};

export default Dashboard;
