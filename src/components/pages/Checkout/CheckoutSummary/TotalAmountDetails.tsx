import React from "react";

import totalAmountDetailsProps from "../../../../models/totalAmountDetailsProps";

const TotalAmountDetails: React.FC<totalAmountDetailsProps> = ({
  subTotal,
  shippingCharge,
}) => {
  return (
    <div className="flex flex-col w-[88%]">
      <div className="flex justify-between font-medium text-[12px] sm:text-sm md:text-[16px] py-2 lg:py-4">
        <p>Subtotal:</p>
        <p>${subTotal}</p>
      </div>
      <div className="flex justify-between border-t border-b border-gray-200 font-medium text-[12px] sm:text-sm md:text-[16px] py-2 lg:py-4">
        <p>Shipping:</p>
        <p>${shippingCharge}</p>
      </div>
      <div className="flex justify-between font-medium text-[12px] sm:text-sm md:text-[16px] py-2 lg:py-4">
        <p>Total:</p>
        <p>${(subTotal || 0) + (shippingCharge || 0)}</p>
      </div>
    </div>
  );
};

export default TotalAmountDetails;
