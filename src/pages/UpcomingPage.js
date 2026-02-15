import React from "react";
import events from "../data/eventsData";
import { Link } from "react-router-dom";

const UpcomingPage = () => {
  return (
    <div>
      <div className="upcoming-img">
        {/* <img className="upcoming-background-img" src={background} alt="Upcoming image" /> */}
        <div className="upcoming-header">
          <p className="text-overlay">Experience The 6202 Band</p>
        </div>
      </div>
      <div className="upcoming-container">
        <h1>Upcoming and Recent Events</h1>
        <div className="events-gallery">
          {events.map((event) => (
            <div className="event-container">
              <div key={event.id} className="event-card">
                <img src={event.logo} alt="Event Logo" />
                <h2>{event.title}</h2>
                <div className="event-details">
                  <h2>{event.title}</h2>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <br />
                  <p>{event.location}</p>
                  <p>{event.address}</p>
                  <br />
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="event-button">
                <Link to={`/event/${event.id}`} className="button-label">
                  <label>Details</label>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
