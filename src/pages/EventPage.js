import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/eventsData";

const EventPage = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === Number(id));

  return (
    <div className="event-page">
      <div className="">
        <div key={event.id} className="">
          <img src={event.logo} className="event-logo" alt="Event Logo" />
          <h2>{event.title}</h2>
          <div className="">
            <p>{event.date}</p>
            <p>{event.time}</p>
            <br />
            <p>{event.location}</p>
            <p>{event.address}</p>
            <br />
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
