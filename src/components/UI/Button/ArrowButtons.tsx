import React from "react";
import LeftArrowIcon from "../../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../../assets/icons/RightArrowIcon";

const ArrowButtons = () => {
  return (
    <div className="flex gap-1 md:gap-2">
      <LeftArrowIcon />
      <RightArrowIcon />
    </div>
  );
};

export default ArrowButtons;
