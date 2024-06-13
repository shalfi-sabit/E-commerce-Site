import ProductSummaryItem from "./ProductSummaryItem";

import TotalAmountDetails from "./TotalAmountDetails";
import ChoosePaymentMethod from "./ChoosePaymentMethod";
import ApplyCouponCode from "../../../UI/ApplyCouponCode";
import checkoutSummary from "../../../../models/checkoutSummary";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-store/redux-store";

const CheckoutSummary: React.FC<checkoutSummary> = ({
  isCashSelected,
  setIsCashSelected,
  subTotal,
  shippingCharge,
  couponCode,
  setCouponCode,
  handleApplyCouponCode,
  isCouponButtonDisabled,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div className="bg-white-900 flex flex-col gap-2 md:gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-7 max-h-[325px] overflow-y-scroll">
        {cartItems.map((item) => (
          <ProductSummaryItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageSource={item.image}
            price={item.price * item.quantity}
            count={item.quantity}
          />
        ))}
      </div>

      <TotalAmountDetails subTotal={subTotal} shippingCharge={shippingCharge} />

      <ChoosePaymentMethod
        isCashSelected={isCashSelected}
        setIsCashSelected={setIsCashSelected}
      />

      <ApplyCouponCode
        setCouponCode={setCouponCode}
        handleApplyCouponCode={handleApplyCouponCode}
        isCouponButtonDisabled={isCouponButtonDisabled}
        containerStyle="flex flex-col xs:flex-row"
      />
    </div>
  );
};

export default CheckoutSummary;
