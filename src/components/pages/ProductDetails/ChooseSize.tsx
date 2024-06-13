import React from "react";

const ChooseSize = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
      <p className="font-medium text-base lg:text-lg mr-2">Size: </p>
      <div className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex justify-center items-center font-semibold text-[10px] sm:text-[12px] hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer">
        XS
      </div>
      <div className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex justify-center items-center font-semibold text-[10px] sm:text-[12px] hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer">
        S
      </div>
      <div className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex justify-center items-center font-semibold text-[10px] sm:text-[12px] bg-red-900 border-none text-white-900 duration-300 cursor-pointer">
        M
      </div>
      <div className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex justify-center items-center font-semibold text-[10px] sm:text-[12px] hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer">
        L
      </div>
      <div className="w-6 h-6 sm:w-7 sm:h-7 border rounded flex justify-center items-center font-semibold text-[10px] sm:text-[12px] hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer">
        XL
      </div>
    </div>
  );
};

export default ChooseSize;
