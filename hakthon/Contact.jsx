// Contact.jsx

import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccessMessage("");

    if (Object.keys(validationErrors).length === 0) {
      // Simulate API call
      setTimeout(() => {
        setSuccessMessage(
          "Thank you for contacting us! We will get back to you shortly."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
          />
          {errors.subject && <p className="error-text">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="cta-button">
          Send Message
        </button>

        {successMessage && (
          <p className="success-text" role="alert" aria-live="polite">
            {successMessage}
          </p>
        )}
      </form>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p>
          <strong>Phone:</strong> 0123456789
        </p>
        <p>
          <strong>Email:</strong> support@vahanbazar.com
        </p>
        <p>
          <strong>Address:</strong> 123 Railway Street, velankanni, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
