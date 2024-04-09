import React from "react";
import background from "../content/images/upcoming-page.png";

const UpcomingPage = () => {
  return (
    <div>
      <div className="upcoming-img">
        {/* <img className="upcoming-background-img" src={background} alt="Upcoming image" /> */}
        <div className="upcoming-header">
          <p className="text-overlay">Experience The 6202 Band</p>
        </div>
      </div>
      <div className="upcoming-content">
        <h1 className="upcoming-subheader">Upcoming and Recent Events</h1>
        <div className="events-gallery"></div>
      </div>
    </div>
  );
};

export default UpcomingPage;
