import React, { MouseEvent } from "react";
import LeftArrowIcon from "../../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../../assets/icons/RightArrowIcon";

type arrowButtonsProps = {
  leftArrowOnClick: (event: MouseEvent<HTMLOrSVGElement>) => void;
  rightArrowOnClick: (event: MouseEvent<HTMLOrSVGElement>) => void;
};

const ArrowButtons: React.FC<arrowButtonsProps> = ({
  leftArrowOnClick,
  rightArrowOnClick,
}) => {
  return (
    <div className="flex gap-1 md:gap-2">
      <LeftArrowIcon onClick={leftArrowOnClick} />
      <RightArrowIcon onClick={rightArrowOnClick} />
    </div>
  );
};

export default ArrowButtons;
