type applyCouponCodeProps = {
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleApplyCouponCode: () => void;
  isCouponButtonDisabled: boolean;
  containerStyle?: string;
  buttonStyle?: string;
  inputStyle?: string;
};

export default applyCouponCodeProps;
