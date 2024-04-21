import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/eventsData";

const EventPage = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === Number(id));

  return (
    <div className="event-page">
      <div key={event.id} className="">
        <div className="event-top">
          <h2>
            {event.date} | {event.location}
          </h2>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
        <img src={event.logo} className="event-logo" alt="Event Logo" />
        <div className="event-bottom">
          <h3>Time & Location</h3>
          <p>{event.time}</p>
          <p>
            {event.location}, {event.address}
          </p>
        </div>
        <iframe
          src={event.mapEmbed}
          // width="600"
          // height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default EventPage;
