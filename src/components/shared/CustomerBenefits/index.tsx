import React from "react";
import DeliveryIcon from "../../../assets/icons/DeliveryIcon";
import HeadsetIcon from "../../../assets/icons/HeadsetIcon";
import GuaranteeIcon from "../../../assets/icons/GuaranteeIcon";
import Wrapper from "../../UI/Wrapper";
import CustomerBenefitsItem from "./CustomerBenefitsItem";

interface CustomerBenefitsProps {
  className?: string;
}

const CustomerBenefits: React.FC<CustomerBenefitsProps> = ({ className }) => {
  return (
    <Wrapper className="m-auto">
      <div
        className={`flex flex-wrap justify-evenly items-center text-xs md:text-sm gap-4 p-6 xs:p-12 sm:p-14 md:p-16 lg:p-28 ${className}`}
      >
        <CustomerBenefitsItem
          icon={<DeliveryIcon />}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <CustomerBenefitsItem
          icon={<HeadsetIcon />}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />

        <CustomerBenefitsItem
          icon={<GuaranteeIcon />}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </Wrapper>
  );
};

export default CustomerBenefits;
