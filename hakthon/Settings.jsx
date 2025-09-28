// Settings.jsx

import React, { useState } from "react";
import "./styles.css";

const Settings = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [alertEmail, setAlertEmail] = useState("support@traingrid.com");
  const [cancellationPolicy, setCancellationPolicy] = useState("24 hours before departure");
  const [adminPassword, setAdminPassword] = useState("");

  const handleSave = () => {
    alert("Settings saved successfully!");
    // In real apps: send to backend
  };

  return (
    <div className="settings-container">
      <h2>System Settings</h2>

      <div className="setting-group">
        <label>Maintenance Mode</label>
        <div className="toggle">
          <input
            type="checkbox"
            id="maintenance-toggle"
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
          />
          <label htmlFor="maintenance-toggle">
            {maintenanceMode ? "ON" : "OFF"}
          </label>
        </div>
      </div>

      <div className="setting-group">
        <label>Alert Contact Email</label>
        <input
          type="email"
          value={alertEmail}
          onChange={(e) => setAlertEmail(e.target.value)}
        />
      </div>

      <div className="setting-group">
        <label>Cancellation Policy</label>
        <input
          type="text"
          value={cancellationPolicy}
          onChange={(e) => setCancellationPolicy(e.target.value)}
        />
      </div>

      <div className="setting-group">
        <label>Change Admin Password</label>
        <input
          type="password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />
      </div>

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;
