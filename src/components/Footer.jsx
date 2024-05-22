import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3 className="company-name">S SMT Solutions</h3>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">UI/UX</a>
            </li>
            <li>
              <a href="#">Software Consulting</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile Development</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Technologies</h3>
          <ul>
            <li>
              <a href="#">Cloud Services</a>
            </li>
            <li>
              <a href="#">Generative AI</a>
            </li>
            <li>
              <a href="#">AI & ML</a>
            </li>
            <li>
              <a href="#">Blockchain</a>
            </li>
            <li>
              <a href="#">Backend Engineering</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} &nbsp; S SMT Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
