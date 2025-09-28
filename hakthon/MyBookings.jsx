// MyBookings.jsx

import React, { useState, useEffect } from "react";
import "./styles.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  // Mock fetch bookings (replace with API call)
  useEffect(() => {
    const mockBookings = [
      {
        bookingId: "BK123456789",
        CompanyNo: "12345",
        CompanyName: "InterCity Express",
        journeyDate: "2025-09-15",
        customers: 2,
        status: "Confirmed",
      },
      {
        bookingId: "BK987654321",
        CompanyNoNo: "67890",
        CompanyName: "Coastal Mail",
        journeyDate: "2025-09-18",
        customers: 1,
        status: "Cancelled",
      },
    ];

    setBookings(mockBookings);
  }, []);

  // Handle cancel booking
  const handleCancel = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings((prev) =>
        prev.map((b) =>
          b.bookingId === bookingId ? { ...b, status: "Cancelled" } : b
        )
      );
      setMessage("Booking cancelled successfully.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="mybookings-container">
      <h2>My Bookings</h2>

      {message && <p className="success-text">{message}</p>}

      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Company</th>
              <th>Journey Date</th>
              <th>Customers</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.bookingId}
                className={
                  booking.status === "Cancelled" ? "cancelled-row" : ""
                }
              >
                <td>{booking.bookingId}</td>
                <td>
                  {booking.compoanyName} ({booking.CompanyNoNo})
                </td>
                <td>{booking.journeyDate}</td>
                <td>{booking.from}</td>
                <td>{booking.to}</td>
                <td>{booking.customers}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status !== "Cancelled" && (
                    <button
                      className="cancel-button"
                      onClick={() => handleCancel(booking.bookingId)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookings;
