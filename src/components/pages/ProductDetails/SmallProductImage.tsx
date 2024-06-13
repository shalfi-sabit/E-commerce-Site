import React from "react";

type smallProductImageProps = {
  imageSource: string;
};

const smallProductImage: React.FC<smallProductImageProps> = ({
  imageSource,
}) => {
  return (
    <div className="w-[40%] md:w-[85%] lg:w-[80%] shadow-md p-4 sm:p-6 flex justify-center items-center">
      <img
        src={imageSource}
        alt="product"
        className="w-[70%] xs:w-[55%] md:w-[100%]"
      />
    </div>
  );
};

export default smallProductImage;
