type checkoutSummary = {
  isCashSelected: boolean;
  setIsCashSelected: React.Dispatch<React.SetStateAction<boolean>>;
  subTotal: number;
  shippingCharge: number;
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleApplyCouponCode: () => void;
  isCouponButtonDisabled: boolean;
};

export default checkoutSummary;
