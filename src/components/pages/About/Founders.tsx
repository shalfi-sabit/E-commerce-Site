import React from "react";
import comTruise from "../../../assets/images/aboutUs/comTruise.png";
import temmaWason from "../../../assets/images/aboutUs/temmaWason.png";
import millSwith from "../../../assets/images/aboutUs/millSwith.png";
import Wrapper from "../../UI/Wrapper";

const Founders = () => {
  return (
    <div
      className="flex flex-row flex-wrap gap-10 justify-center lg:justify-between items-start w-full my-16
    md:my-20 lg:my-32"
    >
      <div>
        <img src={comTruise} />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-[30px] font-medium">Com Truise</p>
          <p className="font-medium">Founder and Chairman</p>
        </div>
      </div>
      <div>
        <img src={temmaWason} />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-[30px] font-medium">Temma Wason</p>
          <p>Managing Director</p>
        </div>
      </div>
      <div>
        <img src={millSwith} />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-[30px] font-medium">Mill Swith</p>
          <p>Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
