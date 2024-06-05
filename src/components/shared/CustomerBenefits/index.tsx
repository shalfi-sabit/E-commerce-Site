import React from "react";
import DeliveryIcon from "../../../assets/icons/DeliveryIcon";
import HeadsetIcon from "../../../assets/icons/HeadsetIcon";
import GuaranteeIcon from "../../../assets/icons/GuaranteeIcon";
import Wrapper from "../../UI/Wrapper";
import FeaturesWrapper from "./CustomerBenefitsItem";

interface CustomerBenefitsProps {
  className?: string;
}

const CustomerBenefits: React.FC<CustomerBenefitsProps> = ({ className }) => {
  return (
    <Wrapper className="m-auto py-10">
      <div
        className={`flex flex-wrap justify-evenly items-center text-xs md:text-sm gap-6 ${className}`}
      >
        <FeaturesWrapper
          icon={<DeliveryIcon />}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <FeaturesWrapper
          icon={<HeadsetIcon />}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />

        <FeaturesWrapper
          icon={<GuaranteeIcon />}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </Wrapper>
  );
};

export default CustomerBenefits;
