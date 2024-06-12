import React from "react";

import BkashIcon from "../../assets/images/bkash-icon.png";
import NagadIcon from "../../assets/images/nagad-icon.png";
import MastercardIcon from "../../assets/images/mastercard.png";
import VisacardIcon from "../../assets/images/visa.png";

const PaymentGatewayIconContainer = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 md:w-8 lg:w-10">
        <img src={BkashIcon} alt="bkash-icon" />
      </div>

      <div className="w-6 md:w-8 lg:w-10">
        <img src={VisacardIcon} alt="visa-icon" />
      </div>

      <div className="w-6 md:w-8 lg:w-10">
        <img src={MastercardIcon} alt="mastercard-icon" />
      </div>

      <div className="w-6 md:w-8 lg:w-10">
        <img src={NagadIcon} alt="nagad-icon" />
      </div>
    </div>
  );
};

export default PaymentGatewayIconContainer;
