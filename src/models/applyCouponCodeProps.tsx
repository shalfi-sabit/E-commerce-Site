type applyCouponCodeProps = {
  subTotal: number;
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleApplyCouponCode: () => void;
  isCouponButtonDisabled: boolean;
};

export default applyCouponCodeProps;
