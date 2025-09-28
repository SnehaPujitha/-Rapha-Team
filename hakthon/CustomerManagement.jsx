import React from "react";

function CustomerManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Management</h1>
      <p>Manage customers here: view, update, and delete customer records.</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Sample Customers</h3>
        <ul>
          <li>Ravi Kumar — Active</li>
          <li>Sneha Pujitha — Active</li>
          <li>Anita Sharma — Inactive</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerManagement;
