import React from "react";

const GalleryItem = ({ item }) => {
  return (
    <div
      className="group cursor-pointer relative overflow-hidden md:w-1/4"
      key={item.id}
    >
      <img
        src={item.desktopImg}
        alt={item.id}
        className="md:block hidden w-full group-hover:scale-110 transition-all duration-200"
      />
      <img
        src={item.mobileImg}
        alt={item.id}
        className="block md:hidden w-full group-hover:scale-110 transition-all duration-200"
      />

      {/* gradient */}
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50" />

      <h3 className="group-hover:text-black group-hover:scale-110 transition-all duration-200 absolute bottom-0 p-6 pb-4 max-w-xs">
        {item.title}
      </h3>
    </div>
  );
};

export default GalleryItem;
