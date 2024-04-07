import React from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import background from "../content/images/contact-page.png";

const ContactPage = () => {
  return (
    <div className="contact-img">
      {/* <img className="contact-background-img" src={background} alt="Contact Us image" /> */}
      <div className="contact-box">
        <div className="contact-container">
          <div className="contact-left">
            <h1>BOOK US!</h1>
            <p>6202band@gmail.com</p>
            <p>214 773-4526</p>
            <ul className="social-buttons">
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-facebook-f" className="social-icons facebook" />
                </a>
              </li>
              <li>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-x-twitter" className="social-icons twitter" />
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

          <div className="input-container">
            <div className="input-row">
              <input placeholder="Name" />
              <input placeholder="Email" />
            </div>
            <div className="input-row">
              <input placeholder="Phone" />
              <input placeholder="Address" />
            </div>
            <input placeholder="Subject" />
            <textarea placeholder="Type your message here..." />
            <button className="contact-submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
