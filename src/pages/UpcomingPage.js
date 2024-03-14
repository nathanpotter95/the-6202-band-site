import React from "react";
import background from "../content/images/upcoming-page.png";

const UpcomingPage = () => {
  return (
    <div className="page">
      <div className="upcoming-heading">
        <img className="upcoming-background-img" src={background} alt="Upcoming image" />
        <div className="text-overlay">
          <p>Experience The 6202 Band</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
