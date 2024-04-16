import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { title, date, time, location, description } = event;

  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <p>Description: {description}</p>
      <Link to={``}>
        <label>Details</label>
      </Link>
    </div>
  );
};

export default EventCard;
