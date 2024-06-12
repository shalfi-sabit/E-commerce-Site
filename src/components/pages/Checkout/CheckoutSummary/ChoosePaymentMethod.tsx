import CheckedIcon from "../../../../assets/icons/CheckedIcon";
import UncheckedIcon from "../../../../assets/icons/UncheckedIcon";
import PaymentGatewayIconContainer from "../../../UI/PaymentGatewayIconContainer";
import choosePaymentMethodProps from "../../../../models/choosePaymentMethodProps";

const ChoosePaymentMethod: React.FC<choosePaymentMethodProps> = ({
  isCashSelected,
  setIsCashSelected,
}) => {
  const selectMethodBank = () => {
    setIsCashSelected(false);
  };

  const selectMethodCash = () => {
    setIsCashSelected(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div onClick={selectMethodBank}>
            {!isCashSelected && <CheckedIcon />}
            {isCashSelected && <UncheckedIcon />}
          </div>
          <label
            className="font-medium text-[12px] sm:text-sm md:text-[16px]"
            htmlFor="bank"
          >
            Bank
          </label>
        </div>
        <PaymentGatewayIconContainer />
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div onClick={selectMethodCash}>
          {isCashSelected && <CheckedIcon />}
          {!isCashSelected && <UncheckedIcon />}
        </div>
        <label
          className="font-medium text-[12px] sm:text-sm md:text-[16px]"
          htmlFor="cashOnDelivery"
        >
          Cash on delivery
        </label>
      </div>
    </div>
  );
};

export default ChoosePaymentMethod;
