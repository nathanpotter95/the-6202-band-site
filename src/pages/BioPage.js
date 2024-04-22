import React from "react";
import members from "../data/bandData";

const BioPage = () => {
  return (
    <div className="band-bio-page">
      <div className="bio-heading">
        <h1 className="page-title">Who are 6202?</h1>
        <p className="subtitle">The Sum of Very Talented Parts</p>
        <p className="band-bio">
          When musicians went looking to find the right people for a band, little did they know that
          being persistent was the key, and that timing is everything. <br />
          <br />
          Vocalist/Percussionist Larry Canepa met Guitarist John Santus in early 2017 and they set
          off to build their vision of a great band. Drummer Shane Gregg joined the group shortly
          after, having played with John in a previous band. Bob Sullivan joined the group as the
          Keyboardist in 2019, bringing his amazing experience on keys/organ/synths, which help
          broaden the band's song choices. And the newest member, Terry DeBell, joining in 2023, as
          the band's Bassist and additional vocalist. Terry brings an outstanding sense of rhythm,
          pure harmonies and backing vocals, and can take the lead on songs as well, which help fill
          out the band's offering
        </p>
        <p className="subtitle">The rest, as they say, is history...</p>
      </div>
      {/* 
      {member.orientation === "regular" && (
            )}
            {member.orientation === "mirror" && (
            )} */}

      {members.map((member) => (
        <div className="member-list">
          <div className="member-container" key={member.id}>
            <div className={`member-preview ${member.orientation === "mirror" ? "mirror" : ""}`}>
              <div className="member-img-container">
                <img className="member-img" src={member.image} alt={member.title} />
              </div>
              <div className="member-bio-container">
                <h2 className="member-title">{member.title}</h2>
                <p className="subtitle">{member.role}</p>
                <p className="member-bio" style={{ whiteSpace: "pre-line" }}>
                  {member.description}
                </p>
                {/* the styling allows \n and whitespace line breaks  */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BioPage;
