// BookTicket.jsx

import React, { useState } from "react";
import "./styles.css";

const BookVehicle = () => {
  const [formData, setFormData] = useState({
    source: "",
    company: "",
    model: "",
    customers: 1,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const stations = [
    "Chennai Central",
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Kolkata",
    "Trivandrum",
  ];

  const validate = () => {
    const errors = {};
    if (!formData.source) errors.source = "Please select source station.";
    if (!formData.company) errors.company = "Please select company.";
    if (formData.source && formData.company && formData.source === formData.company)
      errors.company = "Source and company cannot be the same.";
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "customers"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length === 0) {
      // Simulate booking API call
      setTimeout(() => {
        setSuccessMessage(
          `Vehicle booked successfully for ${formData.customers} customer(s) from ${formData.source} to ${formData.company}.`
        );
        setFormData({
          source: "",
          company: "",
          model: "",
          customers: 1,
        });
      }, 1000);
    }
  };

  return (
    <div className="book-Vehicle-container">
      <h2>Book a Vehicle</h2>

      <form onSubmit={handleSubmit} className="book-vehicle-form" noValidate>
        <div className="form-group">
          <label htmlFor="source">Source Station</label>
          <select
            name="source"
            id="source"
            value={formData.source}
            onChange={handleChange}
          >
            <option value="">-- Select Source --</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
          {errors.source && <p className="error-text">{errors.source}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="company">Company </label>
          <select
            name="company"
            id="company"
            value={formData.vehicle}
            onChange={handleChange}
          >
            <option value="">-- Select Company --</option>
            {stations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
          {errors.company && <p className="error-text">{errors.company}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="model">Journey Date</label>
          <input
            type="model"
            id="model"
            name="model name"
            value={formData.model}
            onChange={handleChange}
          />
          {errors.model && <p className="error-text">{errors.model}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="customers">Number of customers</label>
          <input
            type="number"
            id="customers"
            name="customers"
            min="1"
            max="6"
            value={formData.customers}
            onChange={handleChange}
          />
          {errors.customers && <p className="error-text">{errors.customers}</p>}
        </div>

        <button type="submit" className="cta-button">
          Book Vehicle
        </button>

        {successMessage && (
          <p className="success-text" role="alert" aria-live="polite">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookVehicle;
