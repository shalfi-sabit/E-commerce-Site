import React from "react";
import comTruise from "../../../assets/images/aboutUs/comTruise.png";
import temmaWason from "../../../assets/images/aboutUs/temmaWason.png";
import millSwith from "../../../assets/images/aboutUs/millSwith.png";

const Founders = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-between items-start w-full">
      <div className="w-full xs:w-[31%] flex flex-col gap-4">
        <img src={comTruise} alt="founder" />
        <div className="flex flex-col gap-1 ">
          <p className="text-2xl xs:text-lg md:text-xl font-medium leading-5 xs:leading-4 md:leading-3">
            Com Truise
          </p>
          <p className="text-[12px]">Founder and Chairman</p>
        </div>
      </div>

      <div className="w-full xs:w-[31%] flex flex-col gap-4">
        <img src={temmaWason} alt="founder" />
        <div className="flex flex-col gap-1 ">
          <p className="text-2xl xs:text-lg md:text-xl font-medium leading-5 xs:leading-4 md:leading-3">
            Temma Wason
          </p>
          <p className="text-[12px]">Managing Director</p>
        </div>
      </div>

      <div className="w-full xs:w-[31%] flex flex-col gap-4">
        <img src={millSwith} alt="founder" />
        <div className="flex flex-col gap-1 ">
          <p className="text-2xl  xs:text-lg md:text-xl font-medium leading-5 xs:leading-4 md:leading-3">
            Mill Swith
          </p>
          <p className="text-[12px]"> Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
