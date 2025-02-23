import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Family Dental Surgery</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/login">Appointments</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
