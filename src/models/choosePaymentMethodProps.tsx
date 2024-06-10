type choosePaymentMethodProps = {
  isCashSelected: boolean;
  setIsCashSelected: React.Dispatch<React.SetStateAction<boolean>>;
  subTotal: number;
  shippingCharge: number;
};

export default choosePaymentMethodProps;
