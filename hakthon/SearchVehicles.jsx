// SearchTrains.jsx

import React, { useState } from "react";
import "./styles.css"; // Reuse your CSS or customize as needed

const SearchVehicles = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // TODO: Replace with real API call
    const mockResults = [
      {
        companyNo: "12345",
        companyname: "Express Line",
        model:"125",
      },
      {
        companyNo: "67890",
        companyname: "Superfast Express",
        model:"1500",
      },
    ];

    setResults(mockResults);
  };

  return (
    <div className="search-container">
      <h2>Search Vehicles</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="form-group">
          <label>Source Station</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g. Chennai"
            required
          />
        </div>

        <div className="form-group">
          <label>customer Station</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="e.g. Bengaluru"
            required
          />
        </div>

        <div className="form-group">
          <label>Travel Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="cta-button">
          Search Vehicles
        </button>
      </form>

      {/* Results Section */}
      {results.length > 0 && (
        <div className="search-results">
          <h3>Available Vehicles</h3>
          <table className="train-table">
            <thead>
              <tr>
                <th>Company No</th>
                <th>Name</th>
                <th>Model</th>
              </tr>
            </thead>
            <tbody>
              {results.map((comapany, index) => (
                <tr key={index}>
                  <td>{company.companyNo}</td>
                  <td>{company.name}</td>
                  <td>{company.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchVehicles;
