import ProductSummaryItem from "./ProductSummaryItem";

import TotalAmountDetails from "./TotalAmountDetails";
import cartItems from "../../../../data/dummyCartItems";
import ChoosePaymentMethod from "./ChoosePaymentMethod";
import ApplyCouponCode from "../../../UI/ApplyCouponCode";
import choosePaymentMethodProps from "../../../../models/choosePaymentMethodProps";

const CheckoutSummary: React.FC<choosePaymentMethodProps> = ({
  isCashSelected,
  setIsCashSelected,
  subTotal,
  shippingCharge,
}) => {
  return (
    <div className="bg-white-900 flex flex-col gap-2 md:gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-7 max-h-[325px] overflow-y-scroll">
        {cartItems.map((item) => (
          <ProductSummaryItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageSource={item.imageSource}
            price={item.price * item.count}
            count={item.count}
          />
        ))}
      </div>

      <TotalAmountDetails subTotal={subTotal} shippingCharge={shippingCharge} />

      <ChoosePaymentMethod
        isCashSelected={isCashSelected}
        setIsCashSelected={setIsCashSelected}
        subTotal={subTotal}
        shippingCharge={shippingCharge}
      />

      <ApplyCouponCode subTotal={subTotal} shippingCharge={shippingCharge} />
    </div>
  );
};

export default CheckoutSummary;
