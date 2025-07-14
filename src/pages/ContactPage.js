import React, { useState } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const thankYou = () => {
    setMessage("Thank you for your submission!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/80ab1fcee013d5f0bd7038a1e6c61e4f", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Oops! Something went wrong. Please try again later.");
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
              {message}
              <div className="input-container">
                <div className="input-row">
                  <input type="text" name="FNAME" placeholder="First Name*" required />
                  <input type="text" name="LNAME" placeholder="Last Name" />
                </div>
                <div className="input-row">
                  <input type="email" name="EMAIL" placeholder="Email*" required />
                  <input type="tel" name="PHONE" placeholder="Phone" />
                </div>
                <input type="text" name="MMERGE5" placeholder="Type your message here..." />
                <button onClick={thankYou} className="contact-submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
