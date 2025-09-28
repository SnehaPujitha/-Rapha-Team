import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
function Home() {
  const backgroundImage =
    "https://png.pngtree.com/background/20230412/original/pngtree-car-motor-vehicle-abstract-picture-image_2398015.jpg";

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "0 20px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      maxWidth: "700px",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "20px",
      fontWeight: "700",
      letterSpacing: "2px",
      textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
    },
    paragraph: {
      fontSize: "1.25rem",
      lineHeight: "1.6",
      textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
    },
    // features section
    featuresSection: {
      backgroundColor: "#f8f9fa",
      color: "#333",
      padding: "60px 20px",
      textAlign: "center",
    },
    featureHeading: {
      fontSize: "2rem",
      marginBottom: "40px",
      fontWeight: "600",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    featureCard: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      cursor: "pointer",
      textDecoration: "none",
      color: "inherit",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    featureCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    },
    featureTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#0077b6",
    },
    featureDesc: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  };

  const features = [
    {
      title: "Vahan Bazar",
      desc: "Get real-time updates on 2 wheeler vehicles accessibly",
      link: "https://enquiry.vahanbazar.gov.in/mntes/",
    },
    {
      title: "Easy Vehicle Booking",
      desc: "Book vehicles quickly and securely with just a few clicks.",
      link: "https://www.vhnbzr.co.in/",
    },
    {
      title: "Smart Alerts",
      desc: "Receive instant notifications for vehicles changes.",
      link: "https://www.railyatri.in/train-ticket-alerts",
    },
    {
      title: "🌍 Multi-language Support",
      desc: "Access the app in your preferred language for better experience.",
      link: "https://translate.google.com/?sl=auto&tl=hi", // <- replace .com with .co.in
    },
    
    {
      title: "⭐ Personalized Dashboard",
      desc: "Manage your bookings, history, and saved routes in one place.",
      link: "https://www.irctc.co.in/nget/profile/user-profile",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div style={styles.container}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.heading}>Welcome to Vahan Bazar</h1>
          <p style={styles.paragraph}>
            Check Vehicle status, book vehicles, and manage your journeys with
            ease and confidence.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.featureHeading}>Our Features</h2>
        <div style={styles.featureGrid}>
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.featureCard}
            >
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
