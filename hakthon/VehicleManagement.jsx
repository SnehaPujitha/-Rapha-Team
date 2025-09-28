// UserManagement.jsx

import React, { useState } from "react";
import "./styles.css";

const VehicleManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      role: "passenger",
      active: true,
    },
    {
      id: 2,
      username: "admin_user",
      email: "admin@example.com",
      role: "admin",
      active: true,
    },
    {
      id: 3,
      username: "alice_w",
      email: "alice@example.com",
      role: "passenger",
      active: false,
    },
  ]);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const changeRole = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="user-container">
      <h2>User Management</h2>

      <table className="train-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => changeRole(user.id, e.target.value)}
                  className="role-select"
                >
                  <option value="passenger">Passenger</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <span
                  className={
                    user.active ? "status-active" : "status-inactive"
                  }
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </td>
              <td>
                <button onClick={() => toggleStatus(user.id)}>
                  {user.active ? "Deactivate" : "Activate"}
                </button>
                <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleManagement;
