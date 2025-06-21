import React from "react";
import image from "../../assets/images/banner.png";

const HomeBanner = () => {
  return (
    <div className="section-padding-x section-padding-y relative">
      {/* Image wrapper with shadow and z-index */}
      <div className="relative z-10 shadow-2xl rounded-md overflow-hidden">
        <img src={image} alt="image" className="w-full h-auto object-cover" />
      </div>

      {/* Overlay on top */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20" />
      <p>hello</p>
    </div>
  );
};

export default HomeBanner;
