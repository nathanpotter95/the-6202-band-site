import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import logo from "../content/images/Band-Logo-Header.png";
import social from "../data/socialMedia";

const Header = () => {
  return (
    <div className="site-header">
      <div className="header-top">
        <div className="title-container">
          <div className="header-title">
            <div className="header-logo">
              <img className="site-logo" src={logo} alt="The 6202 Band Logo" />
            </div>
            <div className="header-text">
              <h1 className="title">The 6202 Band</h1>
              <h2 className="subtitle">Playing songs that take you back...</h2>
            </div>
          </div>
        </div>

        <div className="header-contact">
          <p>6202band@gmail.com</p>
          <p>214 773-4526</p>
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

      <nav className="header-navigation">
        <ul className="navbar-options">
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
      </nav>
    </div>
  );
};

export default Header;
