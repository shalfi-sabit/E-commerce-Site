import { useRef } from "react";
import totalAmountDetailsProps from "../../models/totalAmountDetailsProps";
import FillButton from "../UI/Button/FillButton";

const ApplyCouponCode: React.FC<totalAmountDetailsProps> = (subTotal: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const COUPON_CODE = "RATUL30";
  const DISCOUNT_PERCENTAGE = 30;
  const handleApplyCoupon = () => {
    if (inputRef.current) {
      const enteredCoupon = inputRef.current.value;
      if (enteredCoupon === COUPON_CODE) {
        const discountedTotal =
          subTotal - subTotal * (DISCOUNT_PERCENTAGE / 100);
        return (subTotal = discountedTotal);
      } else {
        console.log("Invalid coupon code");
      }
    }
  };

  return (
    <div className="flex lg:items-center sm:flex-col lg:flex-row gap-2">
      <input
        ref={inputRef}
        className="w-full lg:w-fit border-gray-200 border-2 rounded focus:outline-none px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 font-medium text-[12px] sm:text-sm lg:text-[16px]"
        placeholder="Coupon Code"
      />
      <FillButton
        onClick={handleApplyCoupon}
        type="button"
        className="w-full"
        text="Apply Coupon"
      />
    </div>
  );
};

export default ApplyCouponCode;
