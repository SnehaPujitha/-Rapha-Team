

  import React from "react";
  import "./styles.css";

  const Reports = () => {
    const reportData = {
      totalRevenue: "₹4,52,000",
      totalBookings: 1342,
      totalTrains: 128,
      delayedTrains: 7,
      cancelledTrains: 3,
      topTrains: [
        { name: "InterCity Express", bookings: 320 },
        { name: "Rajdhani Express", bookings: 270 },
        { name: "Duronto Express", bookings: 180 },
      ],
    };

    return (
      <div className="reports-container">
        <h2>System Reports & Analytics</h2>

        <div className="report-cards">
          <div className="report-card highlight">
            <h3>Total Revenue</h3>
            <p>{reportData.totalRevenue}</p>
          </div>
          <div className="report-card">
            <h3>Total Bookings</h3>
            <p>{reportData.totalBookings}</p>
          </div>
          <div className="report-card">
            <h3>Total Trains</h3>
            <p>{reportData.totalTrains}</p>
          </div>
          <div className="report-card warning">
            <h3>Delayed Trains</h3>
            <p>{reportData.delayedTrains}</p>
          </div>
          <div className="report-card danger">
            <h3>Cancelled Trains</h3>
            <p>{reportData.cancelledTrains}</p>
          </div>
        </div>

        <div className="top-trains">
          <h3>Top Booked Trains</h3>
          <table className="train-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Train Name</th>
                <th>Bookings</th>
              </tr>
            </thead>
            <tbody>
              {reportData.topTrains.map((train, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{train.name}</td>
                  <td>{train.bookings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default Reports;
