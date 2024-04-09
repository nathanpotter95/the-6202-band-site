import React from "react";
import background from "../content/images/upcoming-page.png";

const UpcomingPage = () => {
  return (
    <div className="page">
      <img className="upcoming-background-img" src={background} alt="Upcoming image" />
      <div className="upcoming-heading">
        <div>
          <p className="text-overlay">Experience The 6202 Band</p>
        </div>
      </div>
      <div>
        <h1>Upcoming and Recent Events</h1>
      </div>
    </div>
  );
};

export default UpcomingPage;
