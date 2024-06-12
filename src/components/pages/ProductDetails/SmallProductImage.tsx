import React from "react";

type smallProductImageProps = {
  imageSource: string;
};

const smallProductImage: React.FC<smallProductImageProps> = ({
  imageSource,
}) => {
  return (
    <div className=" shadow-md p-4 sm:p-6">
      <img src={imageSource} alt="product" />
    </div>
  );
};

export default smallProductImage;
