import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { snackbarActions } from "../redux-store/slices/snackbarSlice";
import applicableCouponCodes from "../data/applicableCouponCodes";

type CouponCodes = "RATUL30" | "SAKIB20" | "SABIT15";

type useCouponCodeProps = {
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
};

const useCouponCode = ({ setSubTotal }: useCouponCodeProps) => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponButtonDisabled, setIsCouponButtonDisabled] = useState(false);
  const [isPlaceOrderButtonDisabled, setIsPlaceOrderButtonDisabled] =
    useState(false);

  const handleApplyCouponCode = () => {
    if (applicableCouponCodes[couponCode as CouponCodes]) {
      setSubTotal(
        (prevSubTotal) =>
          prevSubTotal -
          (prevSubTotal / 100) *
            applicableCouponCodes[couponCode as CouponCodes]
      );

      setIsCouponButtonDisabled(true);
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "success",
          message: "Coupon code applied successfully",
        })
      );
    } else {
      dispatch(
        snackbarActions.handleSnackbarOpen({
          severity: "error",
          message: "Invalid coupon code",
        })
      );
    }
  };

  return {
    couponCode,
    isCouponButtonDisabled,
    setCouponCode,
    handleApplyCouponCode,
    setIsPlaceOrderButtonDisabled,
    isPlaceOrderButtonDisabled,
  };
};

export default useCouponCode;
