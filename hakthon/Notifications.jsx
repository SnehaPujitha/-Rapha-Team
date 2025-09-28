// Notifications.jsx

import React, { useState } from "react";
import "./styles.css";

const Notifications = () => {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    audience: "all",
    trainNo: "",
  });

  const [sentNotifications, setSentNotifications] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = () => {
    if (!notification.title || !notification.message) {
      alert("Title and Message are required!");
      return;
    }

    const newNotification = {
      ...notification,
      time: new Date().toLocaleString(),
      id: Date.now(),
    };

    setSentNotifications((prev) => [newNotification, ...prev]);

    // Reset form
    setNotification({ title: "", message: "", audience: "all", companyNo: "" });
  };

  return (
    <div className="notification-container">
      <h2>Send Notifications</h2>

      <div className="notification-form">
        <input
          type="text"
          name="title"
          placeholder="Notification Title"
          value={notification.title}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={notification.message}
          onChange={handleChange}
        />
        <div className="audience-select">
          <label>Audience:</label>
          <select
            name="audience"
            value={notification.audience}
            onChange={handleChange}
          >
            <option value="all">All Users</option>
            <option value="train">Specific Company</option>
          </select>
        </div>

        {notification.audience === "train" && (
          <input
            type="text"
            name="companyNo"
            placeholder="Enter company Number"
            value={notification.companyNo}
            onChange={handleChange}
          />
        )}

        <button onClick={handleSend}>Send Notification</button>
      </div>

      <h3>Sent Notifications</h3>
      <ul className="notification-list">
        {sentNotifications.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong> – {note.message}
            <div className="note-meta">
              To:{" "}
              {note.audience === "all"
                ? "All Users"
                : `Company ${note.companyNo}`} |{" "}
              {note.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
