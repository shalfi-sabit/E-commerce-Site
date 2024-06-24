import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { snackbarActions } from "../redux-store/slices/snackbarSlice";
import applicableCouponCodes from "../data/applicableCouponCodes";

type CouponCodes = "RATUL30" | "SAKIB20" | "SABIT15";

type useCouponCodeProps = {
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
  subTotal: number;
};

const useCouponCode = ({ setSubTotal, subTotal }: useCouponCodeProps) => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponButtonDisabled, setIsCouponButtonDisabled] = useState(false);
  const [isPlaceOrderButtonDisabled, setIsPlaceOrderButtonDisabled] =
    useState(false);

  const handleApplyCouponCode = () => {
    if (applicableCouponCodes[couponCode as CouponCodes]) {
      if (
        applicableCouponCodes[couponCode as CouponCodes].minimumAmount <=
        subTotal
      ) {
        setSubTotal(
          (prevSubTotal) =>
            prevSubTotal -
            (prevSubTotal / 100) *
              applicableCouponCodes[couponCode as CouponCodes].discount
        );

        setIsCouponButtonDisabled(true);
        dispatch(
          snackbarActions.handleSnackbarOpen({
            severity: "success",
            message: `Coupon code applied! You saved ${
              applicableCouponCodes[couponCode as CouponCodes].discount
            }% on your purchase.`,
          })
        );
      } else {
        dispatch(
          snackbarActions.handleSnackbarOpen({
            severity: "error",
            message: `To apply this coupon code, your purchase must exceed $${
              applicableCouponCodes[couponCode as CouponCodes].minimumAmount
            }. Please add more items to your cart.`,
          })
        );
      }
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
