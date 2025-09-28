import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PassengerNavbar from "./PassengerNavbar";
import AdminNavbar from "./AdminNavbar";

import Home from "./Home";
import CustomerStatus from "./CustomerStatus";   // ✅ fixed here
import BookVehicle from "./BookVehicle";
import MyBookings from "./MyBookings";
import Contact from "./Contact";
import Login from "./Login";


// admin pages
import Dashboard from "./Dashboard";
import VehicleManagement from "./VehicleManagement";
import Location from "./Location";
import Bookings from "./Bookings";
import CustomerManagement from "./CustomerManagement"; // ✅ admin page
import Reports from "./Reports";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Logout from "./Logout";



// passenger search
import SearchVehicles from "./SearchVehicles";

function App() {
  const [userRole, setUserRole] = useState("passenger");

  return (
    <Router>
      {/* Nav based on role */}
      {userRole === "admin" ? <AdminNavbar /> : <PassengerNavbar />}

      <Routes>
        {/* Passenger Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchVehicles />} />
        <Route path="/customerstatus" element={<CustomerStatus />} /> {/* ✅ correct */}
        <Route path="/book-vehicle" element={<BookVehicle />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/vehicles" element={<VehicleManagement />} />
        <Route path="/admin/location" element={<Location />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/customer" element={<CustomerManagement />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout setUserRole={setUserRole} />} />
      </Routes>
    </Router>
  );
}

export default App;
