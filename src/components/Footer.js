import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";

const Footer = () => {
  return (
    <div className="site-footer">
      <h1>The 6202 Band</h1>
      <div className="footer-top">
        <div className="footer-column col1">
          <p>Castle Rock, CO, USA</p>
          <p>6202band@gmail.com</p>
          <p>(214) 773-4526</p>
        </div>
        <div className="footer-column col2">
          <ul className="footer-navigation">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="link">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/media" className="link">
                Media
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/band-bios" className="link">
                Band Bios
              </Link>
            </li>
            <li>
              <Link to="/song-list" className="link">
                Song List
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column col3">
          <ul className="social-buttons">
            <li>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-facebook-f" className="social-icons facebook" />
              </a>
            </li>
            <li>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-youtube" className="social-icons youtube" />
              </a>
            </li>
            <li>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © 2023 The 6202 Band. Website developed by{" "}
        <a href="https://npotter.com/" target="_blank" rel="noopener noreferrer">
          npotter.com
        </a>
        .
      </p>
    </div>
  );
};
export default Footer;
