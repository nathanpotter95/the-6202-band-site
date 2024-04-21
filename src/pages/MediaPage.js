import React, { useState } from "react";
import galleryImages from "../content/galleryExport";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.indexOf(lightboxImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setLightboxImage(galleryImages[nextIndex]);
  };

  const previousImage = () => {
    const currentIndex = galleryImages.indexOf(lightboxImage);
    const previousIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxImage(galleryImages[previousIndex]);
  };

  return (
    <div className="media-page">
      <h1 className="title">
        6202 <span>On Stage Moments</span>
      </h1>
      <div className="photo-gallery">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>
      <div className="video-gallery">
        {videoIds.map((videoId, index) => (
          <div className="video" key={index}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title={`YouTube Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox">
          <img src={lightboxImage} alt="Lightbox" />
          <button onClick={closeLightbox}>
            <Icon icon={faTimes} className="close-button" />
          </button>
          <button className="arrow-button left" onClick={previousImage}>
            <Icon icon={faChevronLeft} />
          </button>
          <button className="arrow-button right" onClick={nextImage}>
            <Icon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
