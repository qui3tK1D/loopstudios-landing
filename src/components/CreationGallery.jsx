import React from "react";
import GalleryItem from "./GalleryItem";
import { creationCategoryOne, creationCategoryTwo } from "../constants";

const CreationGallery = () => {
  const galleryItemsOne = creationCategoryOne.map((item) => (
    <GalleryItem item={item} key={item.id} />
  ));

  const galleryItemsTwo = creationCategoryTwo.map((item) => (
    <GalleryItem item={item} key={item.id} />
  ));

  return (
    <div className="space-y-6">
      <div className="gallery__container">{galleryItemsOne}</div>
      <div className="gallery__container">{galleryItemsTwo}</div>
    </div>
  );
};

export default CreationGallery;
