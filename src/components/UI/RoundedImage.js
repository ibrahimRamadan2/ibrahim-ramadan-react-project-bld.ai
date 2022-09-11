import React from "react";

const RoundedImage = ({ src, radius }) => {
  return (
    <div
      style={{
        width: `${radius}px`,
        height: `${radius}px`,
        borderRadius: "50%",
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        aspectRatio: 1,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default RoundedImage;
