// PnrStatus.jsx

import React, { useState } from "react";
import "./styles.css";

const CustomerStatus = () => {
  const [Customer, setCustomer] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    setError("");
    setStatus(null);

    // Simple PNR validation: 10 digit number (customize as per your format)
    const customerPattern = /^[0-9]{10}$/;
    if (!customerPatternPattern.test(pnr)) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }

    // Mock API response (replace with real API call)
    const mockResponse = {
      pnr,
      companyNo: "12345",
      companyName: "Express Line",
      journeyDate: "2025-09-15",
      bookingStatus: "Confirmed",
      currentStatus: "confirmed",
      CustomerCount: 2,
    };

    setStatus(mockResponse);
  };

  return (
    <div className="customer-container">
      <h2>Check Cutomer Status</h2>

      <form className="customer-form" onSubmit={handleCheck}>
        <div className="form-group">
          <label htmlFor="customer">Customer Number</label>
          <input
            type="text"
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Enter your 10-digit PNR"
            maxLength={10}
            required
          />
        </div>
        <button type="submit" className="cta-button">
          Check Status
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {status && (
        <div className="customer-status-card">
          <h3>
            Train {status.customerName} (#{status.customerNo})
          </h3>
          <p>
            Journey Date: <strong>{status.journeyDate}</strong>
          </p>
          <p>
            From: <strong>{status.from}</strong> To: <strong>{status.to}</strong>
          </p>
          <p>
            Booking Status: <strong>{status.bookingStatus}</strong>
          </p>
          <p>
            Current Status: <strong>{status.currentStatus}</strong>
          </p>
          <p>Passengers: {status.customerCount}</p>

          <table className="customer-table">
            <tbody>
              {status.costumers.map((p, idx) => (
                <tr key={idx}>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerStatus;
