import React, { MouseEventHandler } from "react";
import RemoveButtonIcon from "../../assets/icons/RemoveButtonIcon";

const RemoveButtonContainer: React.FC<{
  onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
  return (
    <div className="absolute left-1 top-1" onClick={onClick}>
      <RemoveButtonIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
    </div>
  );
};

export default RemoveButtonContainer;
