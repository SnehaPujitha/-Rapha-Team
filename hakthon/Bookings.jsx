// Bookings.jsx

import React, { useState } from "react";
import "./styles.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: "BK101",
      user: "Simon Peter",
      vehicle: "Yamaha YZF-R3",
      date: "2025-09-10",
      status: "Confirmed",
    },
    {
      id: "BK102",
      user: "Mary Magdalane",
      train: "Suzuki access 125",
      date: "2025-09-12",
      status: "Pending",
    },
    {
      id: "BK103",
      user: "john",
      train: "TVS Jupiter 120",
      date: "2025-09-08",
      status: "Cancelled",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div className="booking-container">
      <h2>Bookings Management</h2>

      <table className="vehicle_table">
        <thead>
          <tr>
            <th>#</th>
            <th>Booking ID</th>
            <th>User</th>
            <th>Vehicle</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.vehicle}</td>
              <td>{booking.date}</td>
              <td>
                <select
                  value={booking.status}
                  onChange={(e) =>
                    handleStatusChange(booking.id, e.target.value)
                  }
                  className={`status-select status-${booking.status.toLowerCase()}`}
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
