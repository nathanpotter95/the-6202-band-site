import React from "react";
import background from "../content/images/home-background.png";

const HomePage = () => {
  return (
    <div>
      <img className="home-background-img" src={background} alt="Crowd background image" />
      <div className="page-container">
        <div className="home-container">
          <div className="home-header">
            <h1 className="home-title">6202</h1>
            <h2 className="home-subtitle">A Musical Collaboration</h2>
          </div>

          <p className="home-info">
            They say that music is the language of the soul, and nothing could be truer for this
            unique Rock Band. Composed of a group of inspirational musicians and skillful
            performers, the artists behind 6202 have earned their reputation as a talented band to
            look out for. From live gigs to studio sessions and more, they continue to touch fans
            all over with their distinct musical style, song selection and energy. <br /> Explore
            the site and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
