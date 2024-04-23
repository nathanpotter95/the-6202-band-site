import React, { useState } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const ContactPage = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://github.us18.list-manage.com/subscribe/post?u=748e84cb2434e64172222b3f3&amp;id=df2209b072&amp;f_id=006bc2e1f0",
        {
          method: "POST",
          body: new FormData(event.target),
        }
      );

      if (response.ok) {
        // Set subscribed state to true
        setSubscribed(true);
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error, display error message, or log the error
    }
  };

  return (
    <div className="">
      <div className="contact-img">
        <div className="contact-container">
          <div className="contact-left">
            <h1>BOOK US!</h1>
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

          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-container">
                <div className="input-row">
                  <input type="text" name="FNAME" placeholder="First Name" required />
                  <input type="text" name="LNAME" placeholder="Last Name" />
                </div>
                <div className="input-row">
                  <input type="email" name="EMAIL" placeholder="Email" required />
                  <input type="tel" name="PHONE" placeholder="Phone" />
                </div>
                <input type="text" name="MERGE5" placeholder="Type your message here..." />
                <button className="contact-submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <div>
              {/* Thank you message */}
              {subscribed && <p>Thank you for subscribing!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
