import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img className="img-logo" src="./images/ssmt_logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about-us-container">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#hire">Hire Developers</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
