import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../utils/icons/fontawesome";
import logo from "../content/images/Band-Logo-Header.png";
import social from "../data/socialMedia";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="site-header">
      {/* Mobile Menu Button */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <Icon icon={faTimes} /> // "x" icon when mobile menu is open
        ) : (
          <Icon icon={faBars} /> // bars icon when mobile menu is closed
        )}
      </div>

      {/* Site Title */}
      <div className="header-container">
        <div className="header-logo">
          <img className="site-logo" src={logo} alt="The 6202 Band Logo" />
        </div>

        <div className="header-text">
          <h1 className="header-title">The 6202 Band</h1>
          <h2 className="header-subtitle">Playing songs that take you back...</h2>

          <div className="header-contact">
            <p>6202band@gmail.com</p>
            <p>(214) 773-4526</p>
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <Icon icon={faTimes} /> {/* "x" icon to close the mobile menu */}
          </div>
          <ul className="navbar-options">
            <li>
              <Link to="/" className="link" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            {/* Add other menu items here */}
            <li>
              <Link to="/upcoming" className="link" onClick={toggleMobileMenu}>
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/media" className="link" onClick={toggleMobileMenu}>
                Media
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/band-bios" className="link" onClick={toggleMobileMenu}>
                Band Bios
              </Link>
            </li>
            <li>
              <Link to="/song-list" className="link" onClick={toggleMobileMenu}>
                Song List
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
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
