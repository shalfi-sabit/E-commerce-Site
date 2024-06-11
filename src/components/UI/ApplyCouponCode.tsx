import { ChangeEvent } from "react";
import FillButton from "../UI/Button/FillButton";

import applyCouponCodeProps from "../../models/applyCouponCodeProps";

const ApplyCouponCode: React.FC<applyCouponCodeProps> = ({
  subTotal,
  couponCode,
  setCouponCode,
  handleApplyCouponCode,
  isCouponButtonDisabled,
}) => {
  const handleCouponCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  return (
    <div className="flex lg:items-center sm:flex-col lg:flex-row gap-2">
      <input
        className="w-fit border-gray-200 border-2 rounded focus:outline-none px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 font-medium text-[12px] sm:text-sm lg:text-[16px]"
        placeholder="Coupon Code"
        onChange={handleCouponCodeChange}
      />
      <FillButton
        onClick={handleApplyCouponCode}
        type="button"
        className="w-fit"
        text="Apply Coupon"
        disabled={isCouponButtonDisabled}
      />
    </div>
  );
};

export default ApplyCouponCode;
