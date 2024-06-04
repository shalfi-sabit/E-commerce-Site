import React from "react";
import DeliveryIcon from "../../../assets/icons/DeliveryIcon";
import HeadsetIcon from "../../../assets/icons/HeadsetIcon";
import GuarantyIcon from "../../../assets/icons/GuarantyIcon";
import Wrapper from "../../UI/Wrapper";
const CustomerBenefits = () => {
  return (
    <Wrapper className="m-auto py-10">
      <div className="border flex flex-wrap justify-evenly items-center text-sm">
        <div className="flex flex-col items-center border gap-6">
          <DeliveryIcon />
          <div className="flex flex-col items-center gap-2">
            <p>FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <HeadsetIcon />
          <div>
            <p>24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div>
          <GuarantyIcon />
          <div>
            <p>MONEY BACK GUARANTEE</p>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CustomerBenefits;
