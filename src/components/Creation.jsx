import React from "react";
import CreationGallery from "./CreationGallery";

const Creation = () => {
  return (
    <div className="flex flex-col items-center md:items-stretch marginY">
      <div className="flex justify-center md:justify-between mb-12 md:mb-20">
        <h2 className="uppercase text-4xl font-josefin">Our Creations</h2>
        <button className="btn hidden md:block">see all</button>
      </div>
      <CreationGallery />
      <button className="btn md:hidden mt-8">see all</button>
    </div>
  );
};

export default Creation;
