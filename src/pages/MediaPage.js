import React from "react";
import galleryImages from "../content/galleryExport";

function MediaPage() {
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
    </div>
  );
}

export default MediaPage;
