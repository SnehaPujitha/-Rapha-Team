// src/Location.jsx
import React from "react";

function Location() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Location Management</h1>
      <p>
        This page will help manage and display different locations in the system.
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3>Available Locations:</h3>
        <ul>
          <li>Hyderabad</li>
          <li>Bangalore</li>
          <li>Chennai</li>
          <li>Mumbai</li>
        </ul>
      </div>
    </div>
  );
}

export default Location;
