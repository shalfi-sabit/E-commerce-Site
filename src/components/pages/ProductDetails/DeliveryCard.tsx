import React from "react";

import DeliveryCarIcon from "../../../assets/icons/DeliveryCarIcon";
import ReturnIcon from "../../../assets/icons/ReturnIcon";

const Delivery = () => {
  return (
    <div className="border rounded">
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 p-[3%] border-b">
        <DeliveryCarIcon />
        <div>
          <h3 className="text-[12px] xs:text-base font-semibold">
            Free Delivery
          </h3>
          <p className="underline cursor-pointer text-[10px] xs:text-sm">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 p-[3%] ">
        <ReturnIcon />
        <div>
          <h3 className="text-[12px] xs:text-base font-semibold">
            Return Delivery
          </h3>
          <p className="text-[10px] xs:text-sm">
            Free 30 Days Delivery Returns.{" "}
            <span className="underline cursor-pointer">Details</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
