import React from "react";

import { featureImgDesktop, featureImgMobile } from "../assets/images";

const Feature = () => {
  return (
    <div className="marginY relative flex flex-col md:space-y-0">
      <img
        src={featureImgDesktop}
        alt="interactive-vr"
        className="md:w-2/3 hidden md:flex"
      />
      <img src={featureImgMobile} alt="interactive-vr" className="md:hidden" />
      <div className="text-center bg-white md:text-start md:max-w-lg lg:max-w-xl md:absolute md:bottom-0 md:right-0 md:pt-12 md:pl-12 lg:pt-16 lg:pl-16">
        <h2 className="text-4xl font-josefin mb-4 uppercase mt-12 md:mt-0">
          The leader in interactive VR
        </h2>
        <p className="text-very-dark-gray font-alata leading-loose max-w-sm mx-auto md:max-w-none">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Feature;
