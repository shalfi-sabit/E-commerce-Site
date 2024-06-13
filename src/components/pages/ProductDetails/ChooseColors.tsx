import React from "react";

const ChooseColors = () => {
  return (
    <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
      <p className="text-base lg:text-lg font-medium">Colours:</p>
      <div className="flex items-center gap-2">
        <div className="cursor-pointer w-2 h-2 sm:w-3 sm:h-3 bg-[#9FBCE0] rounded-full sm:border-2 border-white-900 outline outline-black-900"></div>
        <div className="cursor-pointer w-3 h-3 sm:w-4 sm:h-4 bg-[#E07575] rounded-full "></div>
      </div>
    </div>
  );
};

export default ChooseColors;
