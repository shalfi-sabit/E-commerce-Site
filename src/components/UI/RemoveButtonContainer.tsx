import React from "react";
import RemoveButtonIcon from "../../assets/icons/RemoveButtonIcon";

const RemoveButtonContainer = () => {
  return (
    <div className="absolute left-1 top-1">
      <RemoveButtonIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
    </div>
  );
};

export default RemoveButtonContainer;
