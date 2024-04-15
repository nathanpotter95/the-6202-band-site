import React from "react";
import PhotoAlbum from "react-photo-album";
import * as gallery from "../content/galleryExport.js";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
// import photos from ".../content/images/gallery";

const photos = [
  {
    src: gallery.gallery1,
    width: 1,
    height: 1,
  },
  {
    src: gallery.gallery2,
    width: 1,
    height: 1,
  },
  {
    src: gallery.gallery3,
    width: 3,
    height: 4,
  },
  {
    src: gallery.gallery4,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery5,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery6,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery7,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery8,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery9,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery10,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery11,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery12,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery13,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery14,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery15,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery16,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery17,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery18,
    width: 3,
    height: 5,
  },
  {
    src: gallery.gallery19,
    width: 3,
    height: 5,
  },
];

const Gallery = () => {
  return (
    <div className="media-gallery">
      <PhotoAlbum layout="masonry" photos={photos} spacing={80} />;
    </div>
  );
};
export default Gallery;
