import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplyCouponCode from "../../UI/ApplyCouponCode";
import useCouponCode from "../../../hooks/useCouponCode";
import TotalAmountDetails from "../Checkout/CheckoutSummary/TotalAmountDetails";
import FillButton from "../../UI/Button/FillButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";

const BillingSummary = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const initialSubtotal = cartItems.reduce((accumulator, cartItem) => {
    return parseFloat(
      (accumulator + cartItem.price * cartItem.quantity).toFixed(2)
    );
  }, 0);

  const [subTotal, setSubTotal] = useState(initialSubtotal);
  const { isCouponButtonDisabled, setCouponCode, handleApplyCouponCode } =
    useCouponCode({ setSubTotal });

  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between py-10 md:py-20 md:items-start">
      <ApplyCouponCode
        setCouponCode={setCouponCode}
        handleApplyCouponCode={handleApplyCouponCode}
        isCouponButtonDisabled={isCouponButtonDisabled}
        containerStyle="flex-col xs:flex-row"
        inputStyle="w-full xs:w-fit sm:w-full"
        buttonStyle="w-full xs:w-fit sm:w-full"
      />
      <div className="border-2 border-black-900 w-full md:w-[40%] rounded-md flex flex-col items-center py-10">
        <p className="text-xl font-semibold self-start pl-8 pb-6">Cart Total</p>
        <TotalAmountDetails subTotal={subTotal} shippingCharge={30} />
        <FillButton
          text="Proceed to checkout"
          className="mt-4"
          onClick={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
};

export default BillingSummary;
