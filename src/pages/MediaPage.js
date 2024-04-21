import React from "react";
import galleryImages from "../content/galleryExport";

const videoIds = [
  "H2dDtgGkCIc",
  "eYjnLodqq7E",
  "IUApUG9c6yE",
  "ZpLl90Axu9k",
  "9FHixd3r-qo",
  "3XpH8YGsVg4",
  "mI_YN75Z8Tg",
  "LqgwQ8-a-v8",
  "ypRIO5P9f-s",
  "7kZBtZpE94s",
];

const MediaPage = () => {
  return (
    <div className="media-page">
      <h1 className="title">
        6202 <span>On Stage Moments</span>
      </h1>
      <div className="photo-gallery">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
      <div className="video-gallery">
        {videoIds.map((videoId, index) => (
          <div className="video">
            <iframe
              key={index}
              // width="560"
              // height="315"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={`YouTube Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
